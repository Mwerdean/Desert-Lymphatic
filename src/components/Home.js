import React, { Component } from 'react'
import Hero from './Hero.js'
import Reservation from './Reservation.js'
import Footer from './Footer.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animate: false
    }
    this.ref1 = React.createRef()
  }

  componentDidMount() {
    window.addEventListener('scroll', (event) => {
      let scrollTop = event.srcElement.scrollingElement.scrollTop
      if(scrollTop > this.ref1.current.scrollHeight + 100) {
        this.setState({ animate: true})
      }
      if(scrollTop > this.props.scheduleRef.current.offsetTop - 300) {
        console.log('Passed scheduleRef')
      }
      if(scrollTop > this.props.locationRef.current.offsetTop - 300) {
        console.log('Passed locationRef')
      }
    })
  }

  render() {
    return (
        <div className='Home'>
        <Hero />
          <div className='home-body'>
            <div ref={this.ref1} className={`header ${this.state.animate ? 'reveal-text1' : ''}`}>General Advantages of Massage</div>
            <div className='center'>
              <div>
                The massage we offer at Rebound is designed for the therapeutic environment. Our goal is to enhance your body's ability to heal and maintain healthy tissue. Our physical and massage therapists are dedicated to listening to our clients, targeting their problem area, and educating the client about their condition. Our massage therapist is educated in all of the therapeutic massage techniques, and may employ several types of massage in each session including deep tissue massage, reflexology and Reiki. Your experience is individually designed for your body to make a lasting difference in how you feel and perform. We offer 30-minute, 60-minute and 90-minute sessions.
                Appointments are required. Call our Pinnacle Peak office for more information: (480) 502-4324.
                Therapeutic massage has an impressive range of health benefits:
              </div>
            </div>
              <ul className='home-list'> Benefits
                <li><FontAwesomeIcon icon="check" size="1x"/> Cleanses impurities from immune system</li>
                <li><FontAwesomeIcon icon="check" size="1x"/> Revitalizes energy production</li>
                <li><FontAwesomeIcon icon="check" size="1x"/> Stress Management</li>
                <li><FontAwesomeIcon icon="check" size="1x"/> Improves lymph fuild circulation</li>
                <li><FontAwesomeIcon icon="check" size="1x"/> Improves post-op recovery</li>
                <li><FontAwesomeIcon icon="check" size="1x"/> Clear waste and swelling</li>
              </ul>
          </div>
            <Reservation scheduleRef={this.props.scheduleRef} locationRef={this.props.locationRef}/>
            <Footer />
      </div>
    )
  }
}
