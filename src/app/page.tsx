import BasicsOfMotion from "../components/BasicsOfMotion";
import AnimationControl from "../components/AnimationControl";
import Gestures from "../components/Gestures"

export default function Home() {
  return (
    <main className="flex flex-col gap-1 justify-center items-center h-[100vh]">
      <BasicsOfMotion />
      <AnimationControl />
      <Gestures />
    </main>
  );
}
