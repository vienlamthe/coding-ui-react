import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { typography } from '../../utils/styles';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-size: 16px;
    color: #333;
    ${typography.family.base}
  }
`;

export default GlobalStyle;
