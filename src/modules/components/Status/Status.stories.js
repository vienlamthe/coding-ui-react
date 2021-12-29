import React from 'react';
import GlobalStyle from '../GlobalStyles';
import Status from './Status';

export default {
  title: 'Example/Status',
  component: Status,
};

const Template = (args) => (
  <React.Fragment>
    <GlobalStyle />
    <Status {...args} />
  </React.Fragment>
);

export const Default = Template.bind({});
Default.args = {
  value: 'accepted',
};
