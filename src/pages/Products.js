import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "product 1" },
  { id: "p2", title: "product 2" },
  { id: "p3", title: "product 3" },
];

function ProductPage() {
  return (
    <>
      <h1>The Product Page</h1>
      <ul>
        <li>
          {PRODUCTS.map((prod) => (
            <li key={prod.id}>
              <Link to={prod.id} relative="">
                {prod.title}
              </Link>
            </li>
          ))}
        </li>
      </ul>
    </>
  );
}

export default ProductPage;
