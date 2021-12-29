import React from 'react';
import { useField } from 'react-final-form';
import Label from './Label';
import { FieldWrapper } from './Field';
import Error from './Error';

const CheckboxGroup = ({ name, label, children, required, ...restProps }) => {
  const { meta } = useField(name);

  return (
    <FieldWrapper {...restProps}>
      {!!label && (
        <Label htmlFor={name}>
          {label}
          {!required && ' (Optional)'}
        </Label>
      )}
      <div style={{ position: 'relative' }}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            ...child.props,
            name,
            type: 'checkbox',
            required,
          })
        )}
      </div>
      {meta.error && meta.touched && <Error>{meta.error}</Error>}
    </FieldWrapper>
  );
};

export default CheckboxGroup;
