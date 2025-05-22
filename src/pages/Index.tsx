
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SubstrateCalculator from "@/components/SubstrateCalculator";
import MushroomVarieties from "@/components/MushroomVarieties";
import BlogPreview from "@/components/BlogPreview";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>MycelialFunGuy - Mushroom Cultivation Resources</title>
        <meta name="description" content="Your complete guide to mushroom cultivation, identification, and everything you need to know about these fascinating fungi." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="relative bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="about" className="text-3xl md:text-4xl font-bold text-mushroom-800">About MycelialFunGuy</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Welcome to MycelialFunGuy, your go-to resource for everything mushroom-related. 
                Whether you're a hobbyist grower, a gourmet enthusiast, or just mushroom-curious, 
                we provide expert guidance, tools, and community to help you on your fungal journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-mushroom-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mushroom-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-mushroom-700 mb-2">Expert Knowledge</h3>
                <p className="text-gray-600">Access to comprehensive guides and best practices for successful cultivation.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-forest-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-forest-700 mb-2">Practical Tools</h3>
                <p className="text-gray-600">Calculators and resources designed to optimize your growing process.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-mushroom-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mushroom-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-mushroom-700 mb-2">Growing Community</h3>
                <p className="text-gray-600">Connect with fellow enthusiasts, share experiences, and learn together.</p>
              </div>
            </div>
          </div>
        </div>
        
        <SubstrateCalculator />
        <MushroomVarieties />
        <BlogPreview />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
