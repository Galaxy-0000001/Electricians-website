import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import config from './config/businessConfig';
import { applyTheme } from './utils/theme';
import './styles/global.css';
import './styles/animations.css';
import './styles/responsive.css';

// Apply the client's brand colours before the first paint (no colour flash).
applyTheme(config.theme);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
