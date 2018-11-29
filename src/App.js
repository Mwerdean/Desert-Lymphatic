import React, { Component } from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
library.add(fab)
library.add(faCheck)

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
