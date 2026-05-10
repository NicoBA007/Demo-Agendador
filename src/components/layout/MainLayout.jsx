import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { WhatsAppBtn } from '@/components/common/WhatsAppBtn';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';

export const MainLayout = () => {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">

      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppBtn />
    </div>
  );
};