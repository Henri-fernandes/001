import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Intersection Observer for section animations
const observerCallback: IntersectionObserverCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
};

const observer = new IntersectionObserver(observerCallback, {
  threshold: 0.1
});

// Observe all sections after the app mounts
setTimeout(() => {
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
}, 100);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);