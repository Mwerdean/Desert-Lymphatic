import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider'
// eslint-disable-next-line
import styles from 'react-awesome-slider/src/styles.js'
import img1 from '../assets/alexander-mils-684487-unsplash.jpg'
import massage from '../assets/massage.jpg'
import massage2 from '../assets/massage2.jpg'
import logo from '../assets/logo.jpg'


const startupScreen = (
    <div>
        <img src={logo} alt='' className='startup'/>
    </div>
)

export default class Hero extends Component {
    state = {
        selected: 0
    }

    componentDidMount() {
        this.nextPage()
    }

    nextPage = () => {
        setInterval(() => {
            this.setState({ selected: this.state.selected + 1 })
          }, 10000)   
    }

    render() {
        const slider = (
            <AwesomeSlider 
                startupScreen={startupScreen}
                className='aws-btn'
                selected={this.state.selected}
                >
                <div data-src={img1} />
                <div data-src={massage2} />
                <div data-src={massage} />
            </AwesomeSlider>
        )
        return (
      <div className='Hero'>
        <article>
            <div className='Nav-Text'>EXPERIENCE A BRIGHTER HEALTHIER COMPLEXION DURING THE DLM SALE</div>
            {slider}
        </article>
      </div>
    )
  }
}
