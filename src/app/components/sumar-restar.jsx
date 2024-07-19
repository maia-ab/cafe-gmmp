import { IoIosAddCircleOutline } from "react-icons/io";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { useState } from "react";

function SumarRestar({ item }) {
  function sumar() {
    setcantidadItem(cantidadItem + 1);

  }

  function restar() {
    if (cantidadItem > 0) setcantidadItem(cantidadItem - 1);
  }

  const [cantidadItem, setcantidadItem] = useState(item.cantidad);

  return (
    <div className="flex gap-2 items-center">
      <IoIosAddCircleOutline onClick={sumar} size={50} color="beige" />
      <div>
        <p className="text-xl">{cantidadItem}</p>
      </div>
      <IoRemoveCircleOutline onClick={restar} size={50} color="beige" />
    </div>
  );
}

export default SumarRestar;
