// app/page.jsx
import Navbar from './components/Navbar';
import EligibilityBox from './components/Eligibility';
import Footer from './footer/page';
import PartnersSection from './components/PartnersSection';
import DifferenceSection from './components/DifferenceSection';
import ServicesSection from './components/ServicesSection';
import JobsSection from './components/JobsSection';
import TestimonialsSection from './components/Testimonial';
import FaqSection from './components/FaqSection';
import HelpSection from './components/HelpSection';


export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <Navbar isScrolled={true} />
      <main className="pt-20 pb-10">
        <EligibilityBox />
        <PartnersSection/>
        <DifferenceSection/>
        <ServicesSection/>
        <JobsSection/>
        <TestimonialsSection/>
        <FaqSection/>
        <HelpSection/> 
        {/* 
        */}
        
      </main>
      <Footer />
    </div>
  );
}