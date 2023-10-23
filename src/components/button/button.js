import "./button.css"

const Button = ({ props }) => {
  return (
    <button type="button" className="btn">
      <img src={props.src} alt={props.title} />
    </button>
  );
};

export default Button;