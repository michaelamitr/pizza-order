import { usePrefs } from '../../PrefsContext ';
import './style.css';

const Check = ({ state, onChange, isVeg }) => {
  const { veganOnly } = usePrefs();

  const handleClick = () => {
    onChange(!state);
  };

  return (
    <button
      className={veganOnly && !isVeg ? 'check check--disabled' : 'check'}
      disabled={veganOnly && !isVeg}
      onClick={handleClick}
    >
      {state ? '✓' : ''}
    </button>
  );
};

export default Check;
