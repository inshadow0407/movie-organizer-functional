import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Favorites.css';
import {saveList} from "../../store/store"


export function Favorites (){
    let favorites = useSelector((state)=>state.favorites);
    let dispatch = useDispatch();
    let clickHandler=(event)=>{
        dispatch(saveList());
        document.querySelector(".favorites__name").disabled=true;
        event.target.remove()
    }
        console.log(favorites)
        return (
            <div className="favorites">
                <input value={favorites.Title} className="favorites__name" onChange={(event)=>{
                   dispatch({type:"ADD_TITLE", payload:event.target.value})
                }}/>
                <ul className="favorites__list">
                    {favorites.movies.map((item) => {
                        if(item.imdbID){
                        return <li key={item.imdbID}>{item.Title} ({item.Year})
                                    <button className="remove" 
                                        onClick={()=>{dispatch({type:"REMOVE", payload:item.Title})}}>
                                         X
                                    </button>
                                </li>}
                                else return null;
                    })}
                </ul>
                <button type="button" className="favorites__save" onClick={clickHandler}>Сохранить список</button>
                {(favorites.list.id===undefined)? null: <Link to={"/list/"+favorites.list.id}>{favorites.list.title}</Link>}
            </div>
        );
    }
