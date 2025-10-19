"use client";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Laptop",
    quantity: 1,
  },
  {
    id: 2,
    name: "Mouse",
    quantity: 2,
  },
  {
    id: 3,
    name: "Keyboard",
    quantity: 1,
  },
  {
    id: 4,
    name: "Monitor",
    quantity: 1,
  },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState(products);

  const handleDecrease = (id: number) => {
    const product = cart.find((item) => item.id === id);
    console.log(product?.quantity);

    if (product?.quantity === 0) {
      alert("Quantity is already 0!");
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };
  return (
    <div>
      <div className="bg-gray-50 flex flex-col space-y-2 p-2 w-[400px]">
        {cart.map((product) => (
          <div
            key={product.id}
            className="border p-2 rounded-md bg-green-200 flex flex-row items-center justify-between"
          >
            <div>
              <h3>{product.name}</h3>
              <p>Quantity: {product.quantity}</p>
            </div>
            <div className="flex gap-2">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded"
                onClick={() =>
                  setCart((prev) =>
                    prev.map((item) =>
                      item.id === product.id
                        ? { ...item, quantity: Math.max(0, item.quantity + 1) }
                        : item
                    )
                  )
                }
              >
                +
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => handleDecrease(product.id)}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
