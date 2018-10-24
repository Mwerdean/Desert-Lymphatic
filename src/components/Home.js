import React, { Component } from 'react'
import Hero from './Hero.js'
import Reservation from './Reservation.js'
import Footer from './Footer.js'

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        {/* <Hero /> */}
        <div className='home-body'>
          <h2>General Benefits of Massage</h2>
          <div className='center'>
            <div>
              The massage we offer at Rebound is designed for the therapeutic environment. Our goal is to enhance your body's ability to heal and maintain healthy tissue. Our physical and massage therapists are dedicated to listening to our clients, targeting their problem area, and educating the client about their condition. Our massage therapist is educated in all of the therapeutic massage techniques, and may employ several types of massage in each session including deep tissue massage, reflexology and Reiki. Your experience is individually designed for your body to make a lasting difference in how you feel and perform. We offer 30-minute, 60-minute and 90-minute sessions.
              Appointments are required. Call our Pinnacle Peak office for more information: (480) 502-4324.
              Therapeutic massage has an impressive range of health benefits:
            </div>
          </div>
          <Reservation />
          <Footer />
        </div>
      </div>
    )
  }
}
