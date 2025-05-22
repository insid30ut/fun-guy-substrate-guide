
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-pattern py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mushroom-800 leading-tight">
              Discover the Amazing World of <span className="text-forest-600">Mushrooms</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl">
              Your complete guide to mushroom cultivation, identification, 
              and everything you need to know about these fascinating fungi.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-mushroom-500 hover:bg-mushroom-600 text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-mushroom-500 text-mushroom-700 hover:bg-mushroom-50 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="mt-12 md:mt-0 md:w-1/2 relative">
            <div className="bg-gradient-to-br from-mushroom-100 to-forest-100 rounded-full w-80 h-80 md:w-96 md:h-96 mx-auto flex items-center justify-center shadow-2xl animate-float overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-white/20 backdrop-blur-sm rounded-full"></div>
                <span className="text-7xl md:text-8xl relative z-10">🍄</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
