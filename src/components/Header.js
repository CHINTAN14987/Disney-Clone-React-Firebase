import React, { useEffect } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import homeIcon from "../images/home-icon.svg";
import searchIcon from "../images/search-icon.svg";
import watchIcon from "../images/watchlist-icon.svg";
import originalIcon from "../images/original-icon.svg";
import movieIcon from "../images/movie-icon.svg";
import seriesIcon from "../images/series-icon.svg";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Header = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/");
      }
    });
  }, []);
  const handleAuth = () => {
    auth.signInWithPopup(provider).then((result) => {
      console.log(result);
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
    });
    navigate("/");
  };
  const signOut = () => {
    auth.signOut().then((response) => {
      dispatch(setSignOut());
      navigate("/login");
    });
  };

  return (
    <Nav>
      <Logo src={logo} alt="" />
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src={homeIcon} alt="" />
              <span>Home</span>
            </a>
            <a>
              <img src={searchIcon} alt="" />
              <span>Search</span>
            </a>
            <a>
              <img src={watchIcon} alt="" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src={originalIcon} alt="" />
              <span>Originals</span>
            </a>
            <a>
              <img src={movieIcon} alt="" />
              <span>Movies</span>
            </a>
            <a>
              <img src={seriesIcon} alt="" />
              <span>Series</span>
            </a>
          </NavMenu>
          {console.log(userPhoto)}
          <UserImg src={userPhoto} onClick={signOut} />
        </>
      )}
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  width: 100%;
  margin-left: 25px;
  align-items: center;
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        background: white;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms;
        transition-origin: left center;
      }
    }
    &: hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
  }
`;
