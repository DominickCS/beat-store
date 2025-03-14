import BeatPlayer from "./components/BeatPlayer";

export default function Home() {
  return (
    <>
      <div className="p-8">
        <h1 className="mb-8 text-3xl text-center">Welcome to domsw0rld</h1>
        <div className="grid grid-cols-3 gap-8">
          <BeatPlayer />
          <BeatPlayer />
          <BeatPlayer />
        </div>
      </div>
    </>
  );
}
