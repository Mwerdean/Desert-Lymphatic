import React, { Component } from 'react'
import Social from './Social.js'
import logo from '../assets/logo.jpg'

export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minimal: true,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', (event) => {
      if(window.scrollY > 200) {
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
                {/* <div>Features</div>
                <div>|</div>
                <div>Layout</div>
                <div>|</div>
                <div>Blog</div> */}
            </div>
            <Social />
        </div>
        <div className='lower'>
            <div className={`logo ${this.state.minimal ? ``:`logo2`}`}><img src={logo} alt='logo' /><div className={`nav-title ${this.state.minimal ? ``:`nav-title2`}`}>Desert Lymphatic Massage</div></div>
            
            <div className={`nav-all ${this.state.minimal ? `nav-top`:``}`}>
                <div className="menu menu--adsila">
                  <a className="menu__item" onClick={this.props.goTo}>
                    <span className="menu__item-name">Home</span>
                  </a>
                  <a className="menu__item" onClick={() => this.props.goTo(1)}>
                    <span className="menu__item-name">Schedule</span>
                  </a>
                  <a className="menu__item" onClick={() => this.props.goTo(2)}>
                    <span className="menu__item-name">Location</span>
                  </a>
                  <a className="menu__item" href="#">
                    <span className="menu__item-name">About&nbsp;Us</span>
                  </a>
                </div>
                
            </div>
        </div>

      </div>
    )
  }
}
