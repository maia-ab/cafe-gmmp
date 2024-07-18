import Galeria from "./components/galeria";
import Hero from "./components/hero";
import Titulo from "./components/titulo";

export default function Home() {
  return (
    <main>
      <Hero />
      <Titulo texto={"Menu"} estilo="w-[500px]  border-t border-black m-2"/>
      <Galeria />
    </main>
  );
}
