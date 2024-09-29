const Greet = ({ name }: { name?: string }) => {
  if (name) return <h1>hello {name}</h1>;

  return <button>Login</button>;
};

export default Greet;
