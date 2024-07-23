import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './style.css'
import '../index.css'
import { BrowserRouter as Router} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain="dev-vcujy8hpx2rawtkt.us.auth0.com"
        clientId="ilc1618vkopw4TGLPtBBkqn8eIJL5cwC"
        authorizationParams={{
          // redirect_uri: window.location.origin
          redirect_uri: "http://localhost:5173/home"
        }}
      >
        <App />
      </Auth0Provider>
    </Router>
  </React.StrictMode>
)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}