import React from 'react';
import Button from './Button';
import SearchIcon from '../Icons/Search'

export default {
  title: 'Example/Button',
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <>
  {/* <Button label="Search" Icon={SearchIcon} {...args} /> */}
  <Button {...args} />
</>

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Click me',
};
