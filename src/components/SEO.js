// src/components/SEO.js - FIXED
import React from 'react';
import { Helmet } from 'react-helmet-async';

function SEO({ title, description, keywords }) {
  const siteName = 'AURELIA Construction';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Premium construction and engineering solutions'} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || 'Premium construction and engineering solutions'} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || 'Premium construction and engineering solutions'} />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
}

export default SEO;