import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import styles from './FormsControls.module.css';

type LoginPropsType = {
  isAuth: boolean
  login: (email: string, password: string, rememberMe: boolean) => void
};

type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

const mapStateToProps = (state: AppRootStateType) => {
  return {
    isAuth: state.authPage.isAuth
  }
};

const Login = (props: LoginPropsType) => {
  const onSubmit = (formData: FormDataType) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={[required]} placeholder={"Login"} name={'login'} component={Input}></Field>
      </div>
      <div>
        <Field validate={[required]} placeholder={"Password"} name={'password'} component={Input}></Field>
      </div>
      <div>
        <Field validate={[required]} name={'rememberMe'} component={Input} type={"checkbox"}>remember me</Field>
      </div>
      {props.error && <div className={styles.formSummaryError}>
        {props.error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);

export default connect(mapStateToProps, {login})(Login);