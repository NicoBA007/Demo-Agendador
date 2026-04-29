import { Outlet } from 'react-router-dom';
import { WhatsAppBtn } from '@/components/common/WhatsAppBtn';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';

export const MainLayout = () => {
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