import React from "react";

import classes from "./Card.module.css";

const Card: React.FC<{ pointerOnHover?: boolean }> = (props) => {
  let classNames: string = classes.card;
  if (props.pointerOnHover) {
    classNames += " " + classes.pointer_on_hover;
  }
  return <div className={classNames}>{props.children}</div>;
};

Card.defaultProps = {
  pointerOnHover: false,
};

export default Card;
