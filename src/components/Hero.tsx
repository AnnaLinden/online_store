import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import HeroCarousel from "./HeroCarousel";
const Hero = () => {
  return (
    <section className=' grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl '>
          Take Your Workouts to the Next Level
        </h1>

        <p className='mt-8 max-w-xl text-lg leading-8'>
          Whether you’re just starting out or you’re an experienced athlete, our
          top-of-the-line fitness equipment is here to help you crush your
          goals. From free weights and resistance bands to specialized machines,
          we’ve curated the best gear to empower your workout. Start your
          fitness journey with confidence.
        </p>

        <Button asChild size='lg' className='mt-10'>
          <Link to='/products'>Our Products</Link>
        </Button>
      </div>
      {/* hero carousel */}
      <HeroCarousel />
    </section>
  );
};
export default Hero;
