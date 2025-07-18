import React from 'react';

const SkipToContent = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-slate-900 focus:text-white focus:px-4 focus:py-2 focus:rounded focus:ring-2 focus:ring-cyan-400"
  >
    Skip to content
  </a>
);

export default SkipToContent;