import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../../common/FormsControls/FormsControls";

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
        <Field validate={[required]} placeholder={"Login"} name={'login'} component={Input}></Field>
      </div>
      <div>
        <Field validate={[required]} placeholder={"Password"} name={'password'} component={Input}></Field>
      </div>
      <div>
        <Field validate={[required]} name={'rememberMe'} component={Input} type={"checkbox"}>remember me</Field>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;