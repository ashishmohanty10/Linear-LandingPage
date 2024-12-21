import { AlanLogo } from "./logo/alan";
import { ArcLogo } from "./logo/arc";
import { DescriptLogo } from "./logo/descript";
import { LoomLogo } from "./logo/loom";
import { MercuryLogo } from "./logo/mercury";
import { OpenSeaLogo } from "./logo/opensea";
import { PitchLogo } from "./logo/pitch";
import { RampLogo } from "./logo/ramp";
import { RetoolLogo } from "./logo/retool";
import { VercelLogo } from "./logo/vercel";

export const Clients = () => {
  return (
    <>
      <p className="mb-12 text-center text-lg text-white md:text-xl">
        <span className="text-primary-text">
          Powering the world’s best product teams.
        </span>
        <br className="hidden md:block" /> From next-gen startups to established
        enterprises.
      </p>

      <div className="flex flex-wrap justify-around [&_svg]:max-w-[16rem] gap-x-6 gap-y-8 md:[&_svg]:basis-[calc(16.66% - 20px)] [&_svg]:basis-[calc(50% - 20px)]">
        <RampLogo />
        <LoomLogo className="hidden md:block" />
        <VercelLogo />
        <AlanLogo className="hidden md:block" />
        <ArcLogo className="hidden md:block" />
        <DescriptLogo className="hidden md:block" />
        <MercuryLogo />
        <OpenSeaLogo />
        <PitchLogo className="hidden md:block" />
        <RetoolLogo />
      </div>
    </>
  );
};
