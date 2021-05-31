import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCake, buyCake } from "../redux";

function CakeContainer(props) {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      Number of cakes: {numOfCakes}
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      <button onClick={() => dispatch(addCake())}>Add Cake</button>
    </div>
  );
}

export default CakeContainer;
