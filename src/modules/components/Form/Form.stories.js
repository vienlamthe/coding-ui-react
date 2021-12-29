import React from 'react';
import GlobalStyle from '../GlobalStyles';
import { colors } from '../../utils/styles';
import { Search } from '../Icons';
import Form from './index';
import { hasMoreCharactersThan } from './validators';

export default {
  title: 'Example/Form',
  component: Form,
};

const Template = () => (
  <>
    <GlobalStyle />
    <div style={{ width: 400 }}>
      <Form onSubmit={(values) => console.log('submit: ', values)}>
        <Form.Input label="Full Name" name="fullName" placeholder="Enter your full name" required />

        <Form.Input label="Email" name="email" placeholder="Enter your email" required />

        <Form.Input
          label="Search"
          name="search"
          icon={<Search color={colors.gray1} />}
          validate={[hasMoreCharactersThan(15)]}
        />

        <Form.RadioGroup label="Gender" name="gender" required>
          <Form.Radio value="male" label="Male" />
          <Form.Radio value="female" label="Female" />
        </Form.RadioGroup>

        <Form.Input label="Description" name="bio" placeholder="Enter your bio" rows="5" />

        <Form.Checkbox type="checkbox" label="Cam" value="cam" name="cam" />
        <Form.Checkbox type="checkbox" label="Xoài" value="xoai" name="xoai" />
        <Form.Checkbox type="checkbox" label="Bưởi" value="buoi" name="buoi" />

        <Form.SubmitButton label="Submit" />
      </Form>
    </div>
  </>
);

export const Default = Template.bind({});
