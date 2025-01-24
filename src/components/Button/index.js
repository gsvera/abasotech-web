export const Button = ({ nameClass, text, handleClick }) => {
  const onHandleClick = () => {
    handleClick?.();
  };
  return (
    <button className={nameClass} onClick={() => onHandleClick()}>
      {text}
    </button>
  );
};

export default Button;
