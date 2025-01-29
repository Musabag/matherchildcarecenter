import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css'; // ✅ Importing the newly created index.css
import '@fortawesome/fontawesome-free/css/all.min.css'; // ✅ FontAwesome for icons

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
