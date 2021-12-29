import styled from 'styled-components';
import { typography, colors } from '../../utils/styles';

const Label = styled.label`
  display: block;
  ${typography.size.small}
  ${typography.weight.semibold}
  color: ${colors.gray1};
  margin-bottom: 0.5rem;
`;

export default Label;
