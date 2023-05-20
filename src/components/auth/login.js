import React from 'react';
import { loginEndpoint } from '../../spotify';
import './login.css';

export default function Login() {
  return (
    <div className="login-page">
      <div>
        <img
          src="./soundcore.png"
          alt="logo-soundcore"
          className="logo-sound"
        />
        
      </div>

      <div className="Spotify">
      <p>powered by </p>
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="logo-spotify"
          className="logo"
        />
      </div>
      <div>
        <a href={loginEndpoint}>
          <div className="login-btn">Log In With Spotify</div>
        </a>
      </div>
    </div>
  );
}
