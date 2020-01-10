import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './Components/App';
import reducers from './Reducers';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Provider store={createStore(reducers)}>
    <App />
</Provider>, 
document.getElementById('root')
);

serviceWorker.unregister();
