import React from 'react';
import Spinner from './Spinner';

export default {
  title: 'Example/Spinner',
  component: Spinner,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <>
    {/* <Button label="Search" Icon={SearchIcon} {...args} /> */}
    <Spinner {...args} />
  </>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: '#FF5959'
};
