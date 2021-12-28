import React from 'react'
import GlobalStyle from '../GlobalStyles'
import Tag from './index'

export default {
  title: 'Example/Tag',
  component: Tag,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <Tag {...args} />
  </>
)

export const Default = Template.bind({})
Default.args = {
  variant: 'orange',
  label: 'Frontend',
}