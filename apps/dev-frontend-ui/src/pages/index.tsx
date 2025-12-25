
import React, { useState } from 'react';
import JarvisLanding from '@/components/JarvisLanding';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleInitialize = () => {
    // User clicked "Start" / "Initialize" on landing
    // Check if we have a token, if so go to dashboard, else redirect to login (or let Landing handle it)
    const token = localStorage.getItem('dev_token');
    if (token) {
      router.push('/dashboard');
    } else {
      // Determine login URL based on environment or hardcode for now
      window.location.href = 'http://localhost:3001/api/auth/google';
    }
  };

  return (
    <JarvisLanding onInitialize={handleInitialize} />
  );
}
