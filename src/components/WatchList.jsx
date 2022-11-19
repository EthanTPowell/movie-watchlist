import React from "react";
import Form from "./sub-components/Form";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "./sub-components/ListItem";
import Navbar from "./sub-components/Navbar";


export default function WatchList() {


  const watchlist = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();

  function logger() {
    // console.log(watchlistArr);
    console.log(watchlist);
    console.log(JSON.stringify(watchlist[0].title));
  }

  return (
      <>
          <Navbar/>

      <h1 >Add something to your watchlist!!!</h1>
      <Form />
      <div id="test"></div>
      <div id="watchlistDiv">
        {watchlist.map((movie) => {
          console.log(movie.title);
          return <ListItem movie={movie} key={movie.title} />;
        }).sort()}
      </div>
    </>
  );
}
