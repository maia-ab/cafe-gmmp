import { IoIosAddCircleOutline } from "react-icons/io";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { useState } from "react";

function SumarRestar() {
    function sumar() {
        setCount(count + 1)
    }

    function restar() {
        if(count > 0)
        setCount(count - 1)
    }

  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-2 items-center">
        
      <IoIosAddCircleOutline onClick={sumar}  size={50} color="beige" />
      <div>
      <p className="text-xl">{count}</p>
      </div>
      <IoRemoveCircleOutline onClick={restar} size={50} color="beige" />
    </div>
  );
}

export default SumarRestar;
