import ReactDOM from 'react-dom/client';
import App from './App';

import { rootStore } from './Logic/rootStore';
import { Provider } from 'react-redux';

import './index.scss';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(far, fas)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={rootStore}>
    <App />
  </Provider>
);

