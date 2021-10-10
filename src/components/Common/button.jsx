const Button = ({ name, className }) => {
  return (
    <button className={`pri-btn ` + className} type="submit">
      {" "}
      {name}
    </button>
  );
};

export default Button;
