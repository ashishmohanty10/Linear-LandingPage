import { Button, Highlight } from "@/components/button";
import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { Hero, HeroSubTitle, HeroTitle } from "@/components/hero";
import { HeroImage } from "@/components/heroImage";
import { ChevronIcon } from "@/components/icons/chevron";
import { StarsIllustration } from "@/components/icons/star";
import { cn } from "@/utils/utils";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] mb:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
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
      </div>

      <Container>
        <Clients />
      </Container>
      <div
        className={cn(
          "h-[60rem] my-[-12.8rem] overflow-hidden relative mask-radial-faded",
          "before:absolute before:opacity-[0.4] before:bg-radial-faded [--color:#7877C6] before:inset-0",

          "after:absolute after:bg-background after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:top-1/2  after:-left-1/2 after:w-[200%] after:h-[142.8%]"
        )}
      >
        <StarsIllustration />
      </div>
    </>
  );
}
