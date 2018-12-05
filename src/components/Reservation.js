import React, { Component } from 'react'

export default class Reservation extends Component {
    constructor(props){
        super(props)
        this.state = {
            pointer: false
        }
    }

    addPointerEvent = () => {
        this.setState({ pointer: !this.state.pointer }, ()=> console.log(this.state.pointer))
    }


  render() {
    return (
        <div className='reservation-background'ref={this.props.scheduleRef}>
            <div className='header2 margin-top' >Make Reservation</div>
            <div className='reservation-container'>
                <div className='pricing' >
                    <div className='h4'>Pricing</div>
                    <div>$135 per 90 minute session</div>
                    <div>$99 per 60 minute session</div>
                    <div className='h4'>
                        Package
                    </div>
                        <div>5 sessions for $550</div>
                </div>
                <div className='embeded-acuity'>
                    <iframe src="https://app.acuityscheduling.com/schedule.php?owner=16780609"  height="1300" frameBorder="0" title='schedule'></iframe>
                </div>
            </div>
            <div ref={this.props.locationRef} />
                <div  className={`contact ${this.state.pointer ? 'addPointer' : ''}`} onClick={this.addPointerEvent}>
                    <div className='header2' >Location</div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.9989547844457!2d-111.81787932975602!3d33.24033079312543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872baad3e0836b5d%3A0x9e9094192c0bfe66!2s1430+E+Horseshoe+Dr%2C+Chandler%2C+AZ+85249!5e0!3m2!1sen!2sus!4v1540314104773" width="100%" height="800" frameBorder="0" style={{border:0}} allowFullScreen title='map'></iframe>            
                </div>
        </div>
    )
  }
}
