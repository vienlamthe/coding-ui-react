import React from 'react';
import Tabs from './Tabs';

export default {
  title: 'Example/Tabs',
  component: Tabs,
  argTypes: {
    activeTab: {
      control: {
        type: null,
      },
    },
    onTabClick: {
      control: {
        type: null,
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <>
    <Tabs {...args}>
      <Tabs.Panel tab="Tab 1">Content tab 1</Tabs.Panel>
      <Tabs.Panel tab="Tab 2">Content tab 2</Tabs.Panel>
      <Tabs.Panel tab="Tab 3">Content tab 3</Tabs.Panel>
      <Tabs.Panel tab="Tab 4">Content tab 4</Tabs.Panel>
    </Tabs>
  </>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
