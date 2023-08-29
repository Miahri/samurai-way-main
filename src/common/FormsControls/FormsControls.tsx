import React, {FC} from 'react';
import styles from './FormsControls.module.css';

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
}

export const Textarea: FC<any> = (props) => {
  const {input, meta, child, ...restProps} = props;

  return <FormControlComp {...props}><textarea {...input} {...restProps} /></FormControlComp>
}

export const Input: FC<any> = (props) => {
  const {input, meta, child, ...restProps} = props;

  return <FormControlComp {...props}><input {...input} {...restProps} /></FormControlComp>
}