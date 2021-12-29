import { Form as FinalForm } from 'react-final-form';
import Input from './Input';
import SubmitButton from './SubmitButton';
import RadioGroup from './RadioGroup';
import Radio from './Radio';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

const Form = ({ onSubmit, children, ...restProps }) => (
  <FinalForm onSubmit={onSubmit}>
    {(props) => (
      <form {...restProps} onSubmit={props.handleSubmit}>
        {children}
      </form>
    )}
  </FinalForm>
);

Form.Input = Input;
Form.Radio = Radio;
Form.Checkbox = Checkbox;
Form.CheckboxGroup = CheckboxGroup;
Form.RadioGroup = RadioGroup;
Form.SubmitButton = SubmitButton;

export default Form;
