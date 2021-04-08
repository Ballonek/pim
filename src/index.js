import { render } from 'react-dom';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);
