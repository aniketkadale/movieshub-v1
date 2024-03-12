import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserLikedMovies } from "../store";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const UserLiked = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();
  const [email, setEmail]  = useState(undefined);
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email) 
    else navigate("/login");
  });

  useEffect(() => {
    if(email) {
        dispatch(getUserLikedMovies(email));
    }
  }, [email]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {});

  return (
    <Container isScrolled={isScrolled}>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="content flex column">
        <h1>My List</h1>
        <div className="grid flex">
          {movies.map((movie, index) => {
            return (
              <Card
                movieData={movie}
                index={index}
                key={movie.id}
                isLiked={true}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default UserLiked;


const Container = styled.div`
    .content {
        margin: 2.3rem;
        margin-top: 8rem;
        gap: 3rem;
        h1 {
            margin-left: 3rem;
        }

        .grid {
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
`