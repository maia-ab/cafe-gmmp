import Newsletter from "./newsletter";
import FTTF from "../components/imageTextComponent";
import NuestroEquipo from "./nuestroEquipo";

function ConocenosPage() {
  return (
    <main>
      <div className="py-14">
        <FTTF
          TF="true"
          imagePath="nosotros-cafe.png"
          titulo="Nuestra Historia"
          texto="Desde nuestra apertura, nuestra cafetería se ha convertido en un rincón acogedor para los amantes del buen café y la repostería artesanal. Inspirados en las tradicionales cafeterías europeas y coreanas. Cada taza de café como tortas se preparan con dedicación y pasión, utilizando ingredientes frescos y recetas auténticas. Ven a descubrir nuestro espacio, donde cada visita se convierte en una experiencia memorable."
        />
      </div>
      <NuestroEquipo />
      <Newsletter />
    </main>
  );
}

export default ConocenosPage;
