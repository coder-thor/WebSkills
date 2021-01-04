import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// hydrate: 注水
ReactDOM.hydrate(<App />, document.getElementById("#root"));