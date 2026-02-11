import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemStatement } from "@/components/ProblemStatement";
import { CustomerJourney } from "@/components/CustomerJourney";
import { Transformation } from "@/components/Transformation";
import { SolutionShowcase } from "@/components/SolutionShowcase";
import { FeatureScroll } from "@/components/FeatureScroll";
import { SocialProof } from "@/components/SocialProof";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 scroll-smooth">
      <Header />
      <Hero />
      <ProblemStatement />
      <CustomerJourney />
      <Transformation />
      <SolutionShowcase />
      <FeatureScroll />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
