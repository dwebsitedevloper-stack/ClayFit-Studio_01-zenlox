import Navbar from '@/react-app/components/Navbar';
import Hero from '@/react-app/components/Hero';
import GymAreas from '@/react-app/components/GymAreas';
import Equipment from '@/react-app/components/Equipment';
import Trainers from '@/react-app/components/Trainers';
import Programs from '@/react-app/components/Programs';
import Membership from '@/react-app/components/Membership';
import Gallery from '@/react-app/components/Gallery';
import Transformations from '@/react-app/components/Transformations';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <GymAreas />
      <Equipment />
      <Trainers />
      <Programs />
      <Membership />
      <Gallery />
      <Transformations />
      <Contact />
      <Footer />
    </div>
  );
}
