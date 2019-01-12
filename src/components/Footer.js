import React, { Component } from 'react'
import Social from './Social.js'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <Social />
        <div>Website created by - Matthew Werdean</div>
        <div>© 2018 Desert, LLC. All rights reserved.</div>
        <div>Logo made with <a href="https://www.designevo.com/en/" title="Free Online Logo Maker">DesignEvo</a></div>
      </div>
    )
  }
}
