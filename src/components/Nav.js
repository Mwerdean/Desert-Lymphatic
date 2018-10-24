import React, { Component } from 'react'
import Social from './Social.js'
import logo from '../assets/logo.jpg'

export default class Nav extends Component {
  state = {
    minimal: true,
  }

  componentDidMount() {
    window.addEventListener('scroll', (event) => {
      if(window.scrollY > 0) {
        this.setState({minimal: false})
      } else {
        this.setState({minimal: true})
      }
    })
  }

  render() {
    return (
      <div className='Nav'>
        <div className={`upper ${this.state.minimal ? ``:`upper2`}`}>
            <div>
                <div>Features</div>
                <div>|</div>
                <div>Layout</div>
                <div>|</div>
                <div>Blog</div>
            </div>
            <Social />
        </div>
        <div className='lower'>
            <div className={`logo ${this.state.minimal ? ``:`logo2`}`}><img src={logo} alt='logo' /></div>
            <div className={`nav-title ${this.state.minimal ? ``:`nav-title2`}`}>Desert Lymphatic Massage</div>
            <div className={`nav-all ${this.state.minimal ? `nav-top`:``}`}>
                <div>Home</div>
                <div>About</div>
                <div>Reserve</div>
                <div>Location</div>
                <div>Contact</div>
            </div>
        </div>
      </div>
    )
  }
}
