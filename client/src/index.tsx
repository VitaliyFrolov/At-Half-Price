import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'app/App';
import './shared/i18n/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Suspense fallback='...loading'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
