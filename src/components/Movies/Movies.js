import React from 'react';
import { useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

export default function Movies (){ 
    let searchResult = useSelector((state)=>state.searchResult);
        if(searchResult.movies) {
        return (
            
            <ul className="movies">
                {searchResult.movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie}/>
                    </li>
                ))}
            </ul>
        );
                }
                else return (<p className='loading'>LOADING...</p>)
    }
