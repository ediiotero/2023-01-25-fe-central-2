import React, { Component } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

import moviePosters from '../images/movies.jpg'

const data = [
    {
        id: 1,
        title: 'The Batman',
        post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 2,
        title: 'Top Gun',
        post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 3,
        title: 'Lightyear',
        post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 4,
        title: 'Grease',
        post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 5,
        title: 'Jaws',
        post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
]

export default class Home extends Component {
  render() {
    return (
        <>
            <Navbar />
            <main className='container'>
                <img 
                    src={moviePosters} 
                    alt="movie posters image"
                    style={{minWidth: '100%', height: '15rem'}} 
                />
                <p className='post-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid consequuntur velit quidem itaque sit nostrum, quod dolorem veritatis quaerat, repellat, expedita odio officiis ex asperiores ipsum culpa aperiam dolor.
                </p>
                <div className='mt-4'>
                    {data.map(movie => <Card title={movie.title} text={movie.post}/>)}
                </div>
            </main>
            <Footer copy="React Demo" />
        </>
    )
  }
}
