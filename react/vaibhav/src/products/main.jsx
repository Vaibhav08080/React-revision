const product = [1, 2, 3, 4, 5, 6];

export const Productshow = () => {
  return (
    <ul>
      {product.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};