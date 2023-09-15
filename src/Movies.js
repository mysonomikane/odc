import React, { useState } from 'react'
import Movie from './Movie';

export default function Movies(props) {
    const [movies, setMovies] = useState([
        {
            "id":1,
            "title": "Harry Potter à l'école des sorciers",
            "year": "2001",
            "poster": "./image-1.jpg"
        },
        {
            "id":2,
            "title": "Harry Potter et la Chambre des secrets",
            "year": "2002",
            "poster": "./image-2.jpg"
        },
        {
            "id":3,
            "title": "Harry Potter et le Prisonnier d'Azkaban",
            "year": "2004",
            "poster": "./image-3.jpg"
        },
        {
            "id":4,
            "title": "Harry Potter et la Coupe de feu",
            "year": "2005",
            "poster": "./image-4.jpg"
        },
        {
            "id":5,
            "title": "Harry Potter et l'Ordre du Phénix",
            "year": "2007",
            "poster": "./image-5.jpg"
        },
        {
            "id":6,
            "title": "Harry Potter et le Prince de sang-mêlé",
            "year": "2009",
            "poster": "./image-6.jpg"
        },
        {
            "id":7,
            "title": "Harry Potter et les Reliques de la Mort, partie 1",
            "year": "2010",
            "poster": "./image-7.jpg"
        },
        {
            "id":8,
            "title": "Harry Potter et les Reliques de la Mort, partie 2",
            "year": "2011",
            "poster": "./image-8.jpg"
        },
    ]);
    return (
        <div className='m-10'>
            <div className="container">
                <div class="flex flex-wrap justify-center">
                    {movies.map((movie)=>(
                        <Movie title={movie.title} year={movie.year} poster={movie.poster} />
                    ))}
                </div>
            </div>
        </div>

    )
}
