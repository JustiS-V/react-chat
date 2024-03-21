import React from 'react';
import {connect} from 'react-redux';

const About = () => {
    return (
        <div className="row justify-content-center">
            
            {/*<div className="col-md-4">*/}
            {/*    <form*/}
            {/*        id="registerForm"*/}
            {/*        // asp-route-returnUrl="@Model.ReturnUrl"*/}
            {/*        method="post"*/}
            {/*    >*/}
            {/*        <div className="text-center">*/}
            {/*            <h2>*/}
            {/*                /!*<img src="/img/set011.png" width="20" style="margin-right:7px"/>*!/*/}
            {/*                <img src="../../assets/img/set011.png" width="20" style="margin-right:7px"/>*/}
            {/*                Create a new account*/}
            {/*                <img src="../../assets/img/set011.png" width="20" style="margin-left:7px"/>*/}
            {/*            </h2>*/}
            {/*        </div>*/}
            {/*        <hr/>*/}
            {/*        <div asp-validation-summary="ModelOnly" className="text-danger" role="alert"></div>*/}
            {/*        <div className="form-floating mb-3">*/}
            {/*            <input asp-for="Input.Email" className="form-control" autoComplete="username"*/}
            {/*                   aria-required="true" placeholder="name@example.com"/>*/}
            {/*            <label asp-for="Input.Email">Email</label>*/}
            {/*            <span asp-validation-for="Input.Email" className="text-danger"></span>*/}
            {/*        </div>*/}
            {/*        <div className="form-floating mb-3">*/}
            {/*            <input asp-for="Input.Password" className="form-control" autoComplete="new-password"*/}
            {/*                   aria-required="true" placeholder="password"/>*/}
            {/*            <label asp-for="Input.Password">Password</label>*/}
            {/*            <span asp-validation-for="Input.Password" className="text-danger"></span>*/}
            {/*        </div>*/}
            {/*        <div className="form-floating mb-3">*/}
            {/*            <input asp-for="Input.ConfirmPassword" class="form-control" autocomplete="new-password"*/}
            {/*                   aria-required="true" placeholder="password"/>*/}
            {/*            <label asp-for="Input.ConfirmPassword">Confirm Password</label>*/}
            {/*            <span asp-validation-for="Input.ConfirmPassword" class="text-danger"></span>*/}
            {/*        </div>*/}
            {/*        <button id="registerSubmit" type="submit" class="w-100 btn btn-lg btn-primary">Register</button>*/}
            {/*    </form>*/}
            {/*</div>*/}
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.data,
});

export default connect(mapStateToProps)(About);
