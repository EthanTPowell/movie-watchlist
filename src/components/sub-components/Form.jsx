// import React from 'react';
import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../../actions';


export default function Form() {

    const [title, setTitle] = useState('')
    const [watched, setWatched] = useState(false)
    const [year, setYear] = useState('')

    const watchlist = useSelector(state => state.watchlist);
    const dispatch = useDispatch();

    class MovieClass{
        constructor(_title, _watched, _year) {
            this.title = _title;
            this.watched = _watched;
            this.year = _year;
    }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, watched, year);

        dispatch((addToWatchlist({
                title,
                watched,
                year,
                favorite: false
            })));
            setTitle('');
            setWatched(false);
            setYear('');
        

        
        // const title = new MovieClass(title, watched, year)
        // dispatch((addToWatchlist(new MovieClass(title, watched, year)))) 

}


    return <>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <div><h2>{watched }</h2></div>
            <h3>Movie Title</h3><input type="text" value={title} required onChange={(e)=>{setTitle(e.target.value)}} name='titleInput' id='titleInput' />
            <h3>Already watched?</h3><input type="checkbox" checked={watched} onChange={(e) => { setWatched(!watched); }} name="watched" id="watched" />
            <h3>Release year</h3><input type="text" value={year} required onChange={(e)=>{setYear(e.target.value)}} name='yearInput' id='yearInput' />
            <button type='submit' >Submit</button>
    </form>
    </>
}
