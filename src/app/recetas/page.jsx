import Titulo from "../components/titulo";
import FTTF from "../components/tfft";

function RecetasPage() {
  return (
    <main>
      <Titulo
        texto={"Recetas"}
        estilo="w-[500px] border-dark-brown border-t m-2"
        color="dark-brown"
      />
      <FTTF
        TF="true"
        imagePath="nosotros-cafe.png"
        titulo="Nuestra Historia"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam."
      />
      <FTTF
        imagePath="nosotros-cafe.png"
        titulo="Nuestra Historia"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam."
      />
      <FTTF
        TF="true"
        imagePath="nosotros-cafe.png"
        titulo="Nuestra Historia"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam."
      />
    </main>
  );
}

export default RecetasPage;
