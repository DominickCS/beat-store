"use client";
import BeatPlayer from "./components/BeatPlayer";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-3 gap-8">
        <BeatPlayer />
        <BeatPlayer />
        <BeatPlayer />
      </div>
    </>
  );
}
