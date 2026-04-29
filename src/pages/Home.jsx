import { Hero } from '@/components/sections/Hero';
import { Benefits } from '@/components/sections/Benefits';
import { Staff } from '@/components/sections/Staff';
import { Pricing } from '@/components/sections/Pricing';
import { Gallery } from '@/components/sections/Gallery';
import { Contact } from '@/components/sections/Contact';
export const Home = () => {
  return (
    <div className="flex w-full flex-col">
      <Hero />
      <Benefits />
      <Staff />
      <Gallery />
      <Pricing />
      <Contact />
    </div>
  );
};