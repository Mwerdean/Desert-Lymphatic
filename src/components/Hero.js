import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import styles from 'react-awesome-slider/src/styles.js'
import img1 from '../assets/alexander-mils-684487-unsplash.jpg'



const startupScreen = (
    <div>
        <img src={img1}alt='' className='startup'/>
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
                <div data-src={img1} />
                <div data-src={img1} />
            </AwesomeSlider>
        )
        return (
      <div className='Hero'>
        <h1>Desert Lymphatic Massage</h1>
        <div>
            {slider}
        </div>
      </div>
    )
  }
}