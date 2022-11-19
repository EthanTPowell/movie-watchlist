import React from 'react'
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites, removeFromWatchlist, toggleWatched } from '../../actions';

export default function ListItem(props) {
    const watchlist = useSelector(state => state.watchlist);

    const [boxChecked, setBoxChecked] = useState(props.movie.favorite)
    const [watchedChecked, setWatchedChecked] = useState(props.movie.watched)

    const dispatch = useDispatch();

    const handleFavorites = (movie) => {

        dispatch(toggleFavorites({
            title: movie.title,
            year: movie.year,
            watched: movie.watched,
            favorite: !movie.favorite
        }))
    };
    
    const handleWatched = (movie) => {

        dispatch(toggleWatched({
            title: movie.title,
            year: movie.year,
            watched: !movie.watched,
            favorite: movie.favorite
        }))
    };

    const handleRemoveButton = (movie) => {
        dispatch(removeFromWatchlist(movie))
    }



    // const currentMovie = useRef(() => {
    //     watchlist.filter((movie) => movie.title === props.movie.title)
    // });




    return <>
                        <div className="movieElement" style={{border: '3px dashed black'}} key={props.movie.title}>
                        <h3 > Movie title: {props.movie.title}</h3>
                        {/* <h3 > Already Watched: {props.movie.watched.toString()}</h3> */}
                        <h3 >Released: {props.movie.year}</h3>
                        {/* <button id={props.movie.title} onClick={(e) => { handleFavorites( props.movie) }}>Toggle favorite</button> */}
                        <button id={props.movie.title} onClick={(e) => { handleRemoveButton( props.movie) }}>Remove from watchlist</button>
                        <h3>Watched:</h3><input type="checkbox" checked={watchedChecked} onChange={(e) => { handleWatched(props.movie); setWatchedChecked(!watchedChecked) }} name="favorite" />
                        <h3>Favorite:</h3><input type="checkbox" checked={boxChecked} onChange={(e) => { handleFavorites(props.movie); setBoxChecked(!boxChecked) }} name="favorite" />


                    </div>
    </>
}
