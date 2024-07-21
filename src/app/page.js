import Menu from "./components/menu";
import Hero from "./components/hero";
import Titulo from "./components/titulo";
import { MenuContextProvider } from "./context/MenuContext";
import Galeria from "./components/galeria";

export default function Home() {
  return (
    <MenuContextProvider>
      <main>
        <Hero />
        <Titulo texto={"Menu"} estilo="w-[500px]  border-t border-dark-brown m-2" />
        <Menu />
        <Galeria />
      </main>
    </MenuContextProvider>
  );
}
