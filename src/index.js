import React from 'react'
import {render} from 'react-dom'

import data from './product-data'

import App from './App'

render(<App product={data}/>, document.querySelector('#app'))
