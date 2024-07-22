import Titulo from "../components/titulo";
import FTTF from "../components/imageTextComponent";
import CafeReceta from "./cafeReceta";

function RecetasPage() {
  return (
    <main>
      <Titulo
        texto={"Recetas"}
        estilo="w-[500px] border-dark-brown border-t m-2"
        color="dark-brown"
      />
      <FTTF
        textFirst="true"
        imagePath="post Facebook (7).png"
        titulo="Cheesecake Frutilla"
        texto="Deléitate con nuestro Cheesecake de Frutilla, una exquisita combinación de cremoso queso y frescas frutillas. Con una base crujiente de galleta y una capa superior de jugosas frutillas, este postre es un verdadero placer para el paladar. Cada porción está hecha con ingredientes de alta calidad, asegurando un sabor inigualable que se funde en la boca. Perfecto para disfrutar en cualquier ocasión especial o simplemente para consentirte."
        imageLink="https://www.youtube.com/watch?v=JkrYkFxL29A"
      />
      <FTTF
        imagePath="20210605_091834_Original.jpg"
        titulo="Lemmon Pie"
        texto="Sumérgete en el delicioso sabor de nuestro Lemon Pie, un clásico que combina la acidez refrescante del limón con una base de masa crujiente con un merengue suave y esponjoso. Preparado con limones frescos y una receta tradicional, este postre es el acompañamiento ideal para cualquier momento del día. Es perfecta para aquellos que disfrutan de un equilibrio entre dulce y ácido, ofreciendo una experiencia de sabor vibrante y refrescante en cada bocado. Ideal para acompañar tu café o té favorito."
        imageLink="https://www.youtube.com/watch?v=MJ_mNQz0aeU"
      />
      <FTTF
        textFirst="true"
        imagePath="0f8e6437-2810-49f9-a5d6-4b39dd293a38.JPG"
        titulo="Chocotorta"
        texto="Disfruta de la clásica Chocotorta, un postre argentino que combina lo mejor del chocolate y el dulce de leche. Capas alternadas de galletas de chocolate y una mezcla cremosa de dulce de leche y queso crema se unen para crear una textura suave y deliciosa. Perfecta para los amantes del chocolate y dulce de leche. No te la pierdas con un Americano!"
        imageLink="https://www.youtube.com/watch?v=ahskzhRtzjY"
      />
      <CafeReceta />
    </main>
  );
}

export default RecetasPage;
