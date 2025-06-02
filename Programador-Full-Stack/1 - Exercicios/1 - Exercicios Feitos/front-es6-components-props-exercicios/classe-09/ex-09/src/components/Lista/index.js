export default function Lista(props) {
  const { itens } = props;

  return (
    <ul>
      {itens.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  );
}