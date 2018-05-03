import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import registerServiceWorker from './registerServiceWorker'
import Stage from './components/Stage'

ReactDOM.render(<Stage />, document.getElementById('root'));
registerServiceWorker();
