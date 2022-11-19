import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ListItem from './sub-components/ListItem';
import Navbar from './sub-components/Navbar';


export default function Favorites() {
    const watchlist = useSelector(state => state.watchlist);
    const dispatch = useDispatch();
    
    return <>
        <Navbar/>
        <div id="favList">
            {
                watchlist.filter((movie) => movie.favorite === true).map((movie) => {
                    return <ListItem movie={movie} key={ movie.title } />
                }).sort()
            }
    </div>
    </>
}
