import React, {FC} from 'react';
import styles from './FormsControls.module.css';
import {Field} from "redux-form";
import {required} from "../../utils/validators/validators";

export const FormControlComp: FC<any> = ({input, meta, child, ...props}) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
      <div>
        {props.children}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
};

export const Textarea: FC<any> = (props) => {
  const {input, meta, child, ...restProps} = props;

  return <FormControlComp {...props}><textarea {...input} {...restProps} /></FormControlComp>
};

export const Input: FC<any> = (props) => {
  const {input, meta, child, ...restProps} = props;

  return <FormControlComp {...props}><input {...input} {...restProps} /></FormControlComp>
};

export const createField = (validators: Array<any>, placeholder: string, name: string,
                            component: any, props: any = {}, text: string = "") => {
  return <div>
    <Field validate={validators}
           placeholder={placeholder}
           name={name}
           component={component}
           {...props}
    />{text}
  </div>
}
