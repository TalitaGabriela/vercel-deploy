"use client";

import { useEffect, useState } from "react";

const SEMESTER_END = new Date("2026-12-19T23:59:00-04:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  finished: boolean;
};

const calculateTimeLeft = (): TimeLeft => {
  const diff = SEMESTER_END.getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, finished: false };
};

const UNITS: Array<{ key: keyof TimeLeft; label: string }> = [
  { key: "days", label: "dias" },
  { key: "hours", label: "horas" },
  { key: "minutes", label: "minutos" },
  { key: "seconds", label: "segundos" },
];

export function CountdownClock() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center gap-6 py-16 px-4 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
        Contagem regressiva
      </p>
      <h1 className="text-2xl sm:text-4xl font-bold">
        Faltam para o fim do semestre
      </h1>

      {!timeLeft ? (
        <p className="text-slate-400">Carregando...</p>
      ) : timeLeft.finished ? (
        <p className="text-xl font-semibold text-emerald-400">
          O semestre já terminou! 🎉
        </p>
      ) : (
        <div className="grid grid-cols-4 gap-3 sm:gap-6">
          {UNITS.map((unit) => (
            <div
              key={unit.key}
              className="flex flex-col items-center justify-center rounded-xl bg-slate-900 border border-slate-800 px-3 py-4 sm:px-6 sm:py-6 shadow-lg shadow-sky-500/10"
            >
              <span className="font-mono text-2xl sm:text-5xl font-bold text-sky-400 tabular-nums">
                {String(timeLeft[unit.key]).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-slate-400">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-slate-500">
        Meta: {SEMESTER_END.toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}{" "}
        às {SEMESTER_END.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
      </p>
    </section>
  );
}
