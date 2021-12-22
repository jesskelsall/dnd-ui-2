interface GreetingProps {
  name: string;
}

const Greeting = ({ name }: GreetingProps): JSX.Element => <p>Hello {name}!</p>;

export default Greeting;
