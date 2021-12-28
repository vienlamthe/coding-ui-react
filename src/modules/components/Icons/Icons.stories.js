import React from 'react'
import GlobalStyle from '../GlobalStyles'
import { colors } from '../../utils/styles'
import * as Icons from './index'

export default {
  title: 'Example/Icons',
  component: Icons,
}

const Template = () => (
  <>
    <GlobalStyle />
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {Object.entries(Icons).map(([iconName, Icon]) => (
          <div
            key={iconName}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px' }}
          >
            <Icon color={colors.gray1} style={{ marginBottom: '0.25rem' }} />
            {iconName}
          </div>
        ))}
    </div>
  </>
)

export const Default = Template.bind({})