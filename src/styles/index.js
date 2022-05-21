import { injectGlobal } from 'react-emotion';
import global from './global.css';

injectGlobal`
   .Twilio-Menu.Twilio-UserControls-AccountMenu {
     overflow-y: scroll;
     height: 90vh;
   }
`;

export default () => {
  injectGlobal`
    ${global}
  `;
};
