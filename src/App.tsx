import Header from "./components/header";
import Importar from "./components/importar";
import Individual from "./components/individual";



function App() {
  return (
    <div className="w-full h-screen">
      <Header />

      <div className="px-8 py-4 w-full border mt-4 flex items-center gap-4">
        <Individual />

        <Importar />
      </div>
   

    </div>
  );
}

export default App;
