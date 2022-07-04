import React, { useEffect } from "react";
import styled from "styled-components";
import background from "../images/home-background.png";
import Movies from "./Movies";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("movies").onSnapshot(
      (snapshot) => {
        console.log(snapshot);
        let tempmovies = snapshot.docs.map((doc) => {
          // console.log(doc.data());
          // console.log(doc.id);
          return { id: doc.id, ...doc.data() };
        });

        dispatch(setMovies(tempmovies));
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <Main>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Main>
  );
};

const Main = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:before {
    background: url(${background}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

export default Home;
