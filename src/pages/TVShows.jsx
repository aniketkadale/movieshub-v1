import React from 'react'
import styled from "styled-components";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import NotAvailable from '../components/NotAvailable';
import Slider from '../components/Slider';
import Navbar from '../components/Navbar';
import SelectGenre from "../components/SelectGenre";

const TVShows = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const genres = useSelector((state) => state.netflix.genres);

     const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
     const movies = useSelector((state) => state.netflix.movies);
     const dispatch = useDispatch();

     useEffect(() => {
       dispatch(getGenres());
     }, []);

     useEffect(() => {
       if (genresLoaded) dispatch(fetchMovies({ type: "tv" }));
     }, [genresLoaded]);

     window.onscroll = () => {
       setIsScrolled(window.pageYOffset === 0 ? false : true);
       return () => (window.onscroll = null);
     };

     onAuthStateChanged(firebaseAuth, (currentUser) => {

     })

  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
  
      <div className="data">
        <SelectGenre genres={genres} type="tv" />
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </div>
    </Container>
  );
}

export default TVShows;

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;
