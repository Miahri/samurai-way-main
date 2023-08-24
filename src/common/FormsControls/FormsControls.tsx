import React, {FC} from 'react';

export const Textarea: FC<any> = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;

  return (
    <div>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}