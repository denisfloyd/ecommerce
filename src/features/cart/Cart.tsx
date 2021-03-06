import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";

import {
  addProduct,
  addProductAsync,
  calculateTotal,
  calculateTotalWithShippingValue,
  setShipping,
} from "./cartSlice";

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state);

  const total = useSelector(calculateTotal);
  const totalWithShipping = useSelector(calculateTotalWithShippingValue);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Carrinho</h1>

      <p id="productsLength">
        Items: <strong>{cart.items.length}</strong>
      </p>

      <p id="shippingValue">
        Frete: <strong>{cart.shipping_value}</strong>
      </p>

      <p>
        Total: <strong>{total}</strong>
      </p>

      <p>
        Total + Frete: <strong>{totalWithShipping}</strong>
      </p>

      <button onClick={() => dispatch(addProduct())} id="addProduct">
        Adicionar produto
      </button>
      <button
        onClick={() => dispatch<any>(addProductAsync())}
        id="addProductAsync"
      >
        Adicionar produto async
      </button>
      <button onClick={() => dispatch(setShipping())} id="setShipping">
        Calcular frete
      </button>
    </div>
  );
};

export default Cart;
