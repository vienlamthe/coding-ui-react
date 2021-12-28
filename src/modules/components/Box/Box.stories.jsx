import React from 'react'

import GlobalStyle from '../GlobalStyles'
import Box from './index'

export default {
  title: 'Example/Box',
  component: Box,
}

const Template = () => (
  <>
    <GlobalStyle />
    <Box>
      <h3>Box content</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, numquam inventore! Corrupti exercitationem laudantium maiores animi, voluptatem officiis hic blanditiis unde iure odio aut. Laboriosam iure modi dolore nemo magni!</p>
    </Box>
  </>
)

export const Default = Template.bind({})
