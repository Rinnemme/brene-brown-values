import AssessmentIntro from "@/src/components/assessmentIntro";

export default function Home() {
  return (
    <div className="w-full h-fit min-h-dvh fade-in absolute px-2 flex flex-col items-center justify-center pt-28 pb-28 sm:pt-32 sm:pb-32">
      <AssessmentIntro />
    </div>
  );
}
