'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Automatically trigger download when page loads
    const link = document.createElement('a');
    link.href = '/lvds.apk';
    link.download = 'LVDS.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return null;
}
