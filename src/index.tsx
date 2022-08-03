import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import { rootStore } from './Logic/rootStore';

import './index.scss';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { Loading } from './Components/Loading/Loading';
library.add(far, fas)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={rootStore}>
    <App />
  </Provider>
);

