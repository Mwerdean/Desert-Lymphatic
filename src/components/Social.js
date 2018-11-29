import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Social extends Component {
    render() {
        return(
            <div className='social'>
            <div className='social-animate'>
                <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
            </div>
            <div className='social-animate'>
                <FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/>
            </div>
            <div className='social-animate'>
                <FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/>
            </div>
        </div>
        )
    }
}