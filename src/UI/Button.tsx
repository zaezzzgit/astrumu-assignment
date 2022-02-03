import classes from "./Button.module.css";

const Button: React.FC<{
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
}> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={
        props.disabled
          ? classes.button + " " + classes.button__disabled
          : classes.button
      }
      style={{ backgroundColor: props.color }}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  color: "#5da4f1",
  onClick: () => {},
  disabled: false,
};

export default Button;
