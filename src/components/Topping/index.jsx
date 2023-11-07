import Check from '../Check';
import './style.css';

const Topping = ({ topping, onToppingStateChange }) => {
  return (
    <div className="topping">
      <Check
        state={topping.selected}
        onChange={onToppingStateChange}
        isVeg={topping.vegan}
      />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
