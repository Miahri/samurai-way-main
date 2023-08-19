import React from 'react';
import {Field, reduxForm} from "redux-form";

type LoginFormType = {
    onSubmit: () => void
}

const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return (

        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div>
                <Field placeholder={"Login"} name={'login'} component={"input"}></Field>
            </div>
            <div>
                <Field placeholder={"Password"} name={'password'} component={"input"}></Field>
            </div>
            <div>
                <Field name={'rememberMe'} component={"input"} type={"checkbox"}>remember me</Field>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;