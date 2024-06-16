import { useSelector, useDispatch } from "react-redux";
import { menuImageUrl } from "../utils/mockData";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <>
      <h1>Cart Component</h1>
      <button onClick={() => handleClearCart()} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  mx-auto">
        Clear Cart
      </button>
      {cartItems.map((item) => {
        return (
          <div className="bg-white" key={item.id}>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center w-full gap-y-8 px-4  sm:px-4 sm:py-4 lg:max-w-7xl lg:grid-cols-2 lg:px-6 border-y">
              <div>
                <h4 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {item.name}
                </h4>
                <span>{item.price}</span>
                <p className="mt-4 text-gray-500">{item.description}</p>
              </div>
              <div className="relative">
                <div>
                  <img src={`${menuImageUrl}${item.imageId}`} alt="" />
                </div>
                <div className="absolute top-32 left-64">
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(item)}
                    className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  mx-auto"
                  >
                    -
                  </button>
                  <span className="mr-2">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => handleAddItem(item)}
                    className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  mx-auto"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Cart;
