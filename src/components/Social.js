import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Social extends Component {
    render() {
        return(
            <div className='social'>
            <a href='https://twitter.com/JuliePoletti' className='social-animate'>
                <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
            </a>
            <a href='https://www.facebook.com/sunangelspraytanning' className='social-animate'>
                <FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/>
            </a>
            <a href='https://www.instagram.com/sunangelspraytanning/' className='social-animate'>
                <FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/>
            </a>
        </div>
        )
    }
}