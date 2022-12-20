import React from 'react';
import { useDispatch } from 'react-redux';
import './MovieItem.css';

export default function MovieItem (props){
        let dispatch = useDispatch();
        console.log(props);
        const { Title, Year, Poster, imdbID} = props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button type="button" 
                            className="movie-item__add-button" 
                            onClick={()=>{dispatch({type:"ADD", payload:{ Title, Year, imdbID} })}}>
                            Добавить в список
                    </button>
                </div>
            </article>
        );
        }