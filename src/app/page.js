import Menu from "./components/menu";
import Hero from "./components/hero";
import Titulo from "./components/titulo";
import { MenuContextProvider } from "./context/MenuContext";

export default function Home() {
  return (
    <MenuContextProvider>
      <main>
        <Hero />
        <Titulo texto={"Menu"} estilo="w-[500px]  border-t border-black m-2" />
        <Menu />
      </main>
    </MenuContextProvider>
  );
}
