import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoBar from "@/components/InfoBar";
import CTAButtons from "@/components/CTAButtons";
import WhatsIncluded from "@/components/WhatsIncluded";
import InPersonSection from "@/components/InPersonSection";
import TestimonialVideo from "@/components/TestimonialVideo";
import SocialProofPosts from "@/components/SocialProofPosts";
import Curriculum from "@/components/Curriculum";
import JoinTopPercent from "@/components/JoinTopPercent";
import ECSSection from "@/components/ECSSection";
import CompanyLogos from "@/components/CompanyLogos";
import WhoIsItFor from "@/components/WhoIsItFor";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import WhyFacilitation from "@/components/WhyFacilitation";
import TheFix from "@/components/TheFix";
import EduTainment from "@/components/EduTainment";
import TestimonialQuote from "@/components/TestimonialQuote";
import TrainersSection from "@/components/TrainersSection";
import UpcomingDates from "@/components/UpcomingDates";
import PastDates from "@/components/PastDates";
import ContactAndWaitlist from "@/components/ContactAndWaitlist";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <InfoBar />
      <CTAButtons />
      <WhatsIncluded />
      <InPersonSection />
      <TestimonialVideo />
      <SocialProofPosts />
      <Curriculum />
      <JoinTopPercent />
      <ECSSection />
      <CompanyLogos />
      <WhoIsItFor />
      <TestimonialCarousel />
      <WhyFacilitation />
      <TheFix />
      <EduTainment />
      <TestimonialQuote />
      <TrainersSection />
      <UpcomingDates />
      <PastDates />
      <ContactAndWaitlist />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  );
}
