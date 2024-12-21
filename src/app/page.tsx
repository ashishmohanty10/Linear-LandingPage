import { Clients } from "@/components/sections/clients";
import { Container } from "@/components/container";
import { StarsIllustration } from "@/components/icons/star";
import { cn } from "@/utils/utils";
import { HeroPage } from "@/components/sections/hero-page";
import { UnlikeAnyTool } from "@/components/sections/unlike-any-tool";
import { EnjoyIssueTracking } from "@/components/sections/enjoy-issues-tracking";
import { BuildMomentum } from "@/components/sections/build-momentum";
import { SetDirection } from "@/components/sections/set-direction";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] mb:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <HeroPage />
        </Container>
      </div>

      <Container>
        <Clients />
      </Container>
      <div
        className={cn(
          "h-[60rem] my-[-12.8rem] pointer-events-none z-[-1] overflow-hidden relative mask-radial-faded",
          "before:absolute before:opacity-[0.4] before:bg-radial-faded [--color:#7877C6] before:inset-0",

          "after:absolute after:bg-background after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:top-1/2  after:-left-1/2 after:w-[200%] after:h-[142.8%]"
        )}
      >
        <StarsIllustration />
      </div>
      <UnlikeAnyTool />
      <EnjoyIssueTracking />
      <BuildMomentum />
      <SetDirection />
    </>
  );
}
