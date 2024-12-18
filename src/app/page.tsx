import { Container } from "@/components/container";
import { Hero, HeroSubTitle, HeroTitle } from "@/components/hero";

export default function Home() {
  return (
    <Container>
      <Hero>
        <HeroTitle>
          Linear is better way <br /> to build products
        </HeroTitle>

        <HeroSubTitle>
          Meet the new standard for modern software development.
          <br /> Streamline issues, spirits, and product roadmaps
        </HeroSubTitle>

        <img src="/img/hero.webp" alt="Hero Image" />
      </Hero>
    </Container>
  );
}
