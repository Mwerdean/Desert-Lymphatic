import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab)

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