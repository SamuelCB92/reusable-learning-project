import { useState } from "react";

export default function CartApp() {
  interface Item {
    itemName: string;
    itemPrice: number;
  }

  interface CartItem extends Item {
    itemCount: number;
  }
  type Cart = CartItem[];

  const [cart, setCart] = useState<Cart>([]);

  function addToCart(props: string, props1: number) {
    const newCartItem = {
      itemName: props,
      itemPrice: props1,
      itemCount: 1,
    };
    setCart((prevCart) => {
      const checkindex = prevCart.findIndex(
        (prevItem) => prevItem.itemName === props
      );
      if (checkindex >= 0) {
        const newPrevCart = [...prevCart];
        newPrevCart[checkindex].itemCount += 1;
        return newPrevCart;
      }
      return [...prevCart, newCartItem];
    });
  }

  function removeFromCart(props: string, props1: number) {
    setCart((prevCart) => {
      const checkindex = prevCart.findIndex(
        (prevItem) => prevItem.itemName === props
      );
      if (prevCart[checkindex]?.itemCount > 0) {
        const newPrevCart = [...prevCart];
        newPrevCart[checkindex].itemCount -= 1;
        setCart((prev) => prev.filter((it) => it.itemCount > 0));
        return newPrevCart;
      }
      return prevCart;
    });
  }

  return (
    <div>
      <div>
        <div>
          <h1>Item A</h1>
          <button className="mr-4" onClick={() => addToCart("Item A", 50)}>
            Adicionar ao carrinho
          </button>
          <button className="mr-4" onClick={() => removeFromCart("Item A", 50)}>
            Remover do carrinho
          </button>
        </div>

        <div>
          <h1>Item B</h1>
          <button className="mr-4" onClick={() => addToCart("Item B", 10)}>
            Adicionar ao carrinho
          </button>
          <button className="mr-4" onClick={() => removeFromCart("Item B", 10)}>
            Remover do carrinho
          </button>
        </div>

        <div>
          <h1>Item C</h1>
          <button className="mr-4" onClick={() => addToCart("Item C", 12)}>
            Adicionar ao carrinho
          </button>
          <button className="mr-4" onClick={() => removeFromCart("Item C", 12)}>
            Remover do carrinho
          </button>
        </div>
      </div>
      <div className="">
        <span className="fixed top-0 right-0 z-50 p-2 flex items-center gap-3 bg-green-200">
          {cart.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-center font-medium">{item.itemName}</span>
              <span className="mt-1 text-sm">{`x ${item.itemCount} - $${
                item.itemPrice * item.itemCount
              }`}</span>
            </div>
          ))}
        </span>
      </div>
    </div>
  );
}

//criar itens iniciais -> clicar em itens -> mandar pro carrinho(mostrar preço e quantidade)
//Mostrar carrinho -> no carrinho, remover itens ou adicionar
