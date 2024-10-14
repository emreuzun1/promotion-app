import { useState } from 'react';
import Input from '../Input';

const LoginForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form
      className="flex flex-col items-center space-y-4 md:space-y-6"
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="Username"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </form>
  );
};

export default LoginForm;
