// const serverUrl = "https://localhost:7077/";
const serverUrl = 'https://bitscaner.pro'
export class BitscannerApi {
    token;

    async login({ email, password }) {
        const endpoint = `${serverUrl}/api/autentication/login`
        let response = await this.#makeRequest(endpoint, 'POST', { email, password })
        this.token = response.token
        console.log(this.token)
    }

    async getChatMessages() {
        const endpoint = `${serverUrl}/api/chat/getChatMessages`
        let response = await this.#makeRequest(endpoint, 'GET')
        return response
    }

    async sendChatMessage({ message }) {
        const endpoint = `${serverUrl}/api/chat/sendChatMessage`
        let response = await this.#makeRequest(endpoint, 'POST', { message })
        return response
    }

    async #makeRequest(endpoint, httpMethod, request = {}) {
        // Default options are marked with *
        let r = {
            method: httpMethod,
            headers: {
                "Content-Type": "application/json",
                "Bearer": this.token
            },
            // body: JSON.stringify(request),
        };
        if (httpMethod === 'POST') r.body = JSON.stringify(request);

        const response = await fetch(endpoint, r )
        return response.json()
    }
}

/* TEST */
// let b = new BitscannerApi()
// b.login({ email: "xv.solutions@gmail.com", password: "Qwerty_123" });
// let chatMessages = b.getChatMessages()
// chatMessages.map(i => {
//     const { nick, time, msg } = i
//     console.log(`user ${nick} ${time} ${message}`)
// })
// let latest = b.sendChatMessage("Hola");
// const { nick, time, msg } = latest
// console.log(`user ${nick} ${time} ${message}`)
