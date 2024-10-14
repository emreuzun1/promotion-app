const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { name, ...restProps } = props;

  return (
    <input
      name={name}
      className="p-2 font-semibold placeholder-gray-500 text-black rounded-2xl  border-none ring-gray-300 ring-2 focus:ring-gray-500 focus:ring-2"
      {...restProps}
    />
  );
};

export default Input;
