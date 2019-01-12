import React, { Component } from 'react'

export default class Hero extends Component {
    state = {
        transform: 'translate3s(0,' + (window.pageYOffset / 3) + "px, 0)"
    }

    componentDidMount() {
        window.addEventListener("scroll", this.resetTransform)

        let windowScrollTop = window.PageYOffset / 3
        this.setState({
            transform: "translate(0," + windowScrollTop + "px, 0"
        })
    }

    componentWillMount() {
        window.removeEventListener("scroll", this.restTransform)
    }

    resetTransform = () => {
        let windowScrollTop = window.pageYOffset / 3
        this.setState({
            transform: "translate3d(0," + windowScrollTop + "px, 0"
        })
    }

    render() {
        return(
            <div className='parallax' style={{ ...this.state }}></div>
        )
    }
}