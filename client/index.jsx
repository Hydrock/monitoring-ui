import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
//import './index.css';

window.onerror = () => {
    window.location.reload();
    return false;
};

const targetDiv = document.createElement('div');
targetDiv.id = 'root';
document.body.appendChild(targetDiv);

ReactDOM.render(<App />, document.getElementById('root'));
