import { CountdownClock } from "@/components/countdown-clock";
import { SemesterTimeline } from "@/components/semester-timeline";

export default function Home() {
  return (
    <main className="flex-1">
      <CountdownClock />
      <SemesterTimeline />

      <footer className="text-center text-xs text-slate-600 pb-10">
        Laboratório Deploy PaaS - Vercel · Talita Gabriela
      </footer>
    </main>
  );
}
