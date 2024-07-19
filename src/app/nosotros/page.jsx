import FTTF from "../components/tfft";
import NuestroEquipo from "./nuestroEquipo";

function ConocenosPage() {
  return (
    <main>
      <FTTF
        TF="true"
        imagePath="nosotros-cafe.png"
        titulo="Nuestra Historia"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam."
      />
      <NuestroEquipo />
    </main>
  );
}

export default ConocenosPage;
