import React, { Component } from 'react'
// import api from '../services/api'
/* 
import './Feed.css'

import more from '../assets/more.png'
import like from '../assets/like.png'
import comment from '../assets/comment.png'
import send from '../assets/send.png' */


class Store extends Component {
    state = {
        store: [],
    }
    
    /* async componentDidMount() {
        const response = await api.get('books')

        this.setState({ books: response.data })
    } */

    render() {
        return (
            <section >
                <h1>Store</h1>
            </section>
        )
    }
}

export default Store