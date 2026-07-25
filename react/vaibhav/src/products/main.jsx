const product = [1, 2, 3, 4, 5, 6];

export const Productshow = ({ name }) => {
  return (
    <ul>
      {product.map((item) => (
        <li key={item}>
          {item}
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};