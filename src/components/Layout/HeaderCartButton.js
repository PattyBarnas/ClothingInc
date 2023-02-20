import classes from "../Layout/HeaderCardButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) return;

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    setBtnIsHighlighted(true);
    return () => {
      clearTimeout(timer);
    };
    // setTimeout();
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      {console.log(props.onClick)}
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
