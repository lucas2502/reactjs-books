import React, { Component } from 'react'
import api from '../service/api'
/* 
import './Feed.css'

import more from '../assets/more.png'
import like from '../assets/like.png'
import comment from '../assets/comment.png'
import send from '../assets/send.png' */


class Home extends Component {
    state = {
        books: [],
    }
    
    async componentDidMount() {
        const response = await api.get('books')

        this.setState({ books: response.data })
    }

    render() {
        return (
            <section>
                <h1>Home</h1>
                {
                    this.state.books.map( item => (
                        <article key={item._id}>
                            <h2>
                                {item.author}
                               
                            </h2>
                            <p>Titulo: {item.title}</p>
                            <p>Descrição: {item.description}</p>
                            <p>R$ {item.price}</p>
                            <p>Stars: {item.stars}</p>
                            <p>Visualizações: {item.review}</p>
                            
                        </article>
                    ))
                }
            </section>
        )
    }
}

export default Home