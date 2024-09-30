import Hero from '../components/Hero';
import Services from '../components/Services';
import Faq from '../components/Faq';
import Newsletter from '../components/Newsletter';
import Testimonial from '../components/Testimonial';



export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Faq />
      <Newsletter />
      {/* <Testimonial /> */}
    </main>
  );
}