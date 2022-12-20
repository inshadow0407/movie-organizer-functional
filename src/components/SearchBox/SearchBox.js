import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SearchBox.css';
import {findMovies} from "../../store/store"

export default function SearchBox (){
    let dispatch= useDispatch()
    let[searchLine,setState] =useState();
    let searchLineChangeHandler = (e) => {
        setState(e.target.value );
    }
    let searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        let data = new FormData(e.target)
        dispatch(findMovies(data.get("searchLine")));
    }

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            name="searchLine"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }

