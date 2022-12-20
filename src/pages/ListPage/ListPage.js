import React from 'react';
import './ListPage.css';
import { useSelector } from 'react-redux';

export default function ListPage (){
    let favorites = useSelector((state)=>state.favorites);
        return (
            <div className="list-page">
                <h1 className="list-page__title">{favorites.list.title}</h1>
                <ul>
                    {favorites.list.mymovies.map((item) => {
                        console.log(item[0]);
                        console.log(item.Title);
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}`}>{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
