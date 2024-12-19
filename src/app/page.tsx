import { Button, Highlight } from "@/components/button";
import { Container } from "@/components/container";
import { Hero, HeroSubTitle, HeroTitle } from "@/components/hero";
import { HeroImage } from "@/components/heroImage";
import { ChevronIcon } from "@/components/icons/chevron";

export default function Home() {
  return (
    <Container className="overflow-hidden py-[6.4rem]">
      <Hero>
        <Button
          href="/"
          variant="secondary"
          size="small"
          className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]"
        >
          Linear 2024 Release - Built for scale
          <Highlight>→</Highlight>
        </Button>
        <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
          Linear is better way <br className="hidden md:block" /> to build
          products
        </HeroTitle>

        <HeroSubTitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]">
          Meet the new standard for modern software development.
          <br className="hidden md:block" /> Streamline issues, spirits, and
          product roadmaps
        </HeroSubTitle>

        <Button
          href="/"
          variant="primary"
          size="large"
          className="animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]"
        >
          Get Started
          <ChevronIcon />
        </Button>
        <HeroImage />
      </Hero>
    </Container>
  );
}
