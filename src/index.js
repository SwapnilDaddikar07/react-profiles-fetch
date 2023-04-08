import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProfileFeed from "./profile_feed";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ProfileFeed/>
    </React.StrictMode>
);
