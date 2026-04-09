import { GameManager } from "./components/Manager"
import useOrientation from "./hooks/useOrientation"

export default function App() {
  const { portrait, key } = useOrientation();

  if (portrait) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center h-screen bg-slate-900">
        <div className="text-emerald-100 text-2xl">
          Please rotate your phone
        </div>
      </div>
    );
  }

  return (
    <div key={key}>
      <GameManager />
    </div>
  );
}