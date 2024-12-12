interface ButtonProps {
  children: string;
  buttonclicked: () => void;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const Button = ({ children, buttonclicked, color }: ButtonProps) => {
  return (
    //When I click the button, the function "buttonclicked is called. Move to App.tsx"
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={buttonclicked}
    >
      {children}
    </button>
  );
};

export default Button;
