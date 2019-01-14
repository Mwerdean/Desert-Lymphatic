import React, { Component } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
library.add(fab)
library.add(faCheck)

class App extends Component {
  constructor(props) {
    super(props)
    this.scheduleRef = React.createRef()
    this.locationRef = React.createRef()
  }

  scrollToContent = (content) => {
    switch(content) {
      default: 
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        break;
      case 1:
        this.scheduleRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
        break;
      case 2:
        this.locationRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }

  render() {
    return (
      <div>
        <div className='App'>
          <Nav goTo={this.scrollToContent} />
          <Home scheduleRef={this.scheduleRef} locationRef={this.locationRef} />
        </div>
        <div className='Mobile'>
          Mobile version coming soon! Please use you're laptop/desktop to view this page.
        </div>
      </div>
    );
  }
}

export default App;
