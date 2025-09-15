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

  const [item, setItem] = useState<Item>({
    itemName: "",
    itemPrice: null,
  });
  const [cart, setCart] = useState<Cart>([]);

  function addToCart(props: string, props1: number) {
    const newCartItem = {
      itemName: props,
      itemPrice: props1,
      itemCount: 1,
    };
    setCart((prevCart) => {
      const checkindex = prevCart.findIndex(
        (prevItem) => prevItem.itemName === newCartItem.itemName
      );
      if (checkindex >= 0) {
        const newPrevCart = [...prevCart];
        newPrevCart[checkindex].itemCount += 1;
        return newPrevCart;
      }
      return [...prevCart, newCartItem];
    });

    //setcart to newcartitem if itemcount 0, set to +1 if not
  }

  return (
    <div>
      <div>
        <h1>Item 1</h1>
        <button onClick={() => addToCart("Item 1", 50)}>
          Adicionar ao carrinho
        </button>
      </div>

      <div>
        <h1>Item 2</h1>
        <button onClick={() => addToCart("Item 2", 10)}>
          Adicionar ao carrinho
        </button>
      </div>

      <div>
        <h1>Item 3</h1>
        <button onClick={() => addToCart("Item 3", 12)}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

//criar itens iniciais -> clicar em itens -> mandar pro carrinho(mostrar preço e quantidade)
//no carrinho, remover itens
