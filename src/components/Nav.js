import React, { Component } from 'react'
import Social from './Social.js'

export default class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <div className='upper'>
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
            <div className='logo'>Logo</div>
            <div className='nav-links'>
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
