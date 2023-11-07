import Topping from "../Topping";
import './style.css';
import { useState } from "react";

const ToppingsSelect = ({ toppings }) => {
const [newToppings, setNewToppings] = useState(toppings)


const handleToppings = (index, newState) => {
const newToppignsArray = [...newToppings]
newToppignsArray[index].selected = newState
setNewToppings(newToppignsArray)
}

const toppingsNumberFn = () => {
  return newToppings.filter((topping) => topping.selected)
}

const toppingsSelected = toppingsNumberFn()

const totalPrice = () => {
  const total = toppingsSelected.reduce((sum, topping) => {
    return sum + topping.price;
  }, 0);
  return total.toFixed(2);
};

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {toppingsSelected.length}, total price: {totalPrice()} Euro</p>

      <div className="toppings">
        {newToppings.map((topping, index) => (
          <Topping topping={topping} key={topping.name} onToppingStateChange={(selected)=>{handleToppings(index, selected)}}/>
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
