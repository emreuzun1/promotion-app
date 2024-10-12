interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = (props: InputProps) => {
  const { label, name, ...restProps } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input name={name} {...restProps} />
    </div>
  );
};

export default Input;
