const Button = ({ name, className }) => {
  return <button className={`pri-btn ` + className}>{name}</button>;
};

export default Button;
