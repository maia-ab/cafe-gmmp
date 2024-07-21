import OrderItem from "./orderItem";
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

function OrderBox() {
  const {menu} = useContext(MenuContext);
  const orden = menu.filter((item) => item.cantidad > 0);
  return (
    <div className="w-[500px] bg-dark-brown rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md px-8 py-24 text-beige flex flex-col items-center gap-8">
      <h2 className="text-5xl">Tu Orden</h2>
      <div>
        {orden.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>
      <p className="text-3xl">Total:</p>
      <button className="bg-coconut h-[50px] w-[300px] rounded-2xl text-2xl">
        Ordenar
      </button>
    </div>
  );
}

export default OrderBox;
