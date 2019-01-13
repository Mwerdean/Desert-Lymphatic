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
            <div ref={this.ref1} className={`header ${this.state.animate ? 'reveal-text1' : ''}`}>What is Manual Lymphatic Massage?</div>
            <div className='center'>
              <div> 
                Manual Lymphatic Massage works by engaging oxygen distribution throughout your body to ward off toxins. The body system’s network of vessels and nodes contains lymph, a mixture of water, immune system components, proteins, waste products, and other remnants of dead cell metabolism. Lymph nodes provide a underappreciated function of filtering out the debris. They are found throughout the body, with especially large groups of them in the neck, armpits, and groin. These major collections of lymph nodes ensure that the lymph passes through as many nodes as possible before it returns to the circulatory system. A lymphatic massage helps push the debris through the nodes and clear your body.
              </div>
            </div>
              <div className={`header ${this.state.animate ? 'reveal-text1' : ''}`}>What do we do?</div>
              <div className='center'>
                <div>
                  During a lymph drainage massage, a specially-trained massage therapist uses a series of compressing, gliding, stretching, and cupping movements over the client’s body. The light rhythmic movements, stimulate the lymphatic system without compressing the vessels – allowing lymph to move easily through the tissues and lymph nodes. The massage follows a specific sequence over the body so lymph isn’t trapped anywhere, making sure every area is treated with care.
                </div>
              </div>

              <div className='home-flex'>
                <ul className='home-list'> Pre/Post Op Surgery
                  <li><FontAwesomeIcon icon="check" size="1x"/> Brazilian Buttlift</li>
                  <li><FontAwesomeIcon icon="check" size="1x"/> Breast Reconstruction</li>
                  <li><FontAwesomeIcon icon="check" size="1x"/> Lumpectomy</li>
                  <li><FontAwesomeIcon icon="check" size="1x"/> Tissue Fibrosis</li>
                  <li><FontAwesomeIcon icon="check" size="1x"/> Liposuction</li>
                  <li><FontAwesomeIcon icon="check" size="1x"/> Face Lift</li>
                  <li><FontAwesomeIcon icon="check" size="1x"/> Tummy Tuck</li>
                  <li><FontAwesomeIcon icon="check" size="1x"/> Mastectomy</li>
                </ul>
                <ul className='home-list'> Benefits
                  <li><FontAwesomeIcon icon="check" size="1x"/> Help reduce pain, swelling, and bruising</li>
                  <li><FontAwesomeIcon icon="check" size="1x"/> Build stronger immune system</li>
                  <li><FontAwesomeIcon icon="check" size="1x"/> Revitalizes energy production</li>
                  <li><FontAwesomeIcon icon="check" size="1x"/> Stress Management</li>
                  <li><FontAwesomeIcon icon="check" size="1x"/> Improves lymph fuild circulation</li>
                  <li><FontAwesomeIcon icon="check" size="1x"/> Improves post-op recovery</li>
                  <li><FontAwesomeIcon icon="check" size="1x"/> Help remove toxins and waste</li>
                  <li><FontAwesomeIcon icon="check" size="1x"/> Increases movement and mobility</li>
                </ul>
              </div>
          </div>
            <Reservation scheduleRef={this.props.scheduleRef} locationRef={this.props.locationRef}/>
            <Footer />
      </div>
    )
  }
}
