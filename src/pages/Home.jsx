import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import Services from '../components/Services';
import FeaturedSplit from '../components/FeaturedSplit';
import PromoBand from '../components/PromoBand';
import Paket from '../components/Paket';
import Process from '../components/Process';
import Gallery from '../components/Gallery';
import Brands from '../components/Brands';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import FAQ from '../components/FAQ';
import CTAFinal from '../components/CTAFinal';

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Services />
      <FeaturedSplit />
      <PromoBand />
      <Paket />
      <Process />
      <Gallery />
      <Brands />
      <Testimonials />
      <Location />
      <FAQ />
      <CTAFinal />
    </>
  );
}
