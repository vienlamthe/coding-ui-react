import styled from 'styled-components'
import { colors } from '../../utils/styles'

const StyledBox = styled.div`
  border-radius: 0.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: ${colors.white};
  padding: 1rem;
  overflow-wrap: anywhere;
`

function Box(props) {
  return (
    <StyledBox {...props} />
  )
}

export default Box