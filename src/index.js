import React from 'react';
import { render } from 'react-dom';

import { App } from './modules/App';
import './assets/styles/styles.css';

const rootDiv = document.createElement('div');
rootDiv.id = 'root';

document.body.appendChild(rootDiv);

render(<App />, document.getElementById('root'));
