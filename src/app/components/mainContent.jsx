import Menu from "./menu";
import Hero from "./hero";
import Titulo from "./titulo";
import Galeria from "./galeria";

function MainContent() {
  return (
    <main>
      <Hero />
      <Titulo
        texto={"Menú"}
        estilo="w-[500px]  border-t border-dark-brown m-2"
        color="dark-brown"
      />
      <Menu />
      <Galeria />
    </main>
  );
}

export default MainContent;
