interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementsProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroElementsProps) => {
  return <h1 className="text-5xl text-center my-6">{children}</h1>;
};

export const HeroSubTitle = ({ children }: HeroElementsProps) => {
  return <p className="text-lg text-center my-12">{children}</p>;
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};
