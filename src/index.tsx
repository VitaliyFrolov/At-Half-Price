import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'app/App';
import './features/I18next/lib/i18next';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Suspense fallback={'...loading'}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
