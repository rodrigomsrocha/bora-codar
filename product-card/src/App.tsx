import { Info } from "./components/Info";
import { Preview } from "./components/Preview";

function App() {
  return (
    <div className="min-h-screen w-full bg-bg-color flex items-center justify-center">
      <div className="mx-auto px-4 flex items-center gap-3">
        <Preview />
        <Info />
      </div>
    </div>
  );
}

export default App;
