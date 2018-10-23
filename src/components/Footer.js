import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Social from './Social.js'
library.add(fab)

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <Social />
        <div>© 2018 Desert, LLC. All rights reserved.</div>
      </div>
    )
  }
}
