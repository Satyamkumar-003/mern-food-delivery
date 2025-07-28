import React, { useState, useRef, useEffect } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

function Card(props) {
  const dispatch = useDispatchCart();
  const cartData = useCart();
  const options = props.options;
  const priceOptions = Object.keys(options);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const [showAddAnim, setShowAddAnim] = useState(false);
  const priceRef = useRef();

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  const finalPrice = qty * parseInt(options[size]);

  // Count total quantity of the same item (ignoring size for simplicity)
  const getItemCount = () => {
    return cartData
      .filter((item) => item.id === props.foodItem._id)
      .reduce((sum, item) => sum + item.qty, 0);
  };

  const handleAddToCart = async () => {
    const existingItem = cartData.find(
      (item) => item.id === props.foodItem._id && item.size === size
    );

    if (existingItem) {
      await dispatch({
        type: "UPDATE",
        id: props.foodItem._id,
        price: finalPrice,
        qty: qty,
        size: size,
      });
    } else {
      await dispatch({
        type: "ADD",
        id: props.foodItem._id,
        name: props.foodItem.name,
        price: finalPrice,
        qty: qty,
        size: size,
        img: props.foodItem.img,
      });
    }

    triggerAddAnimation();
  };

  const triggerAddAnimation = () => {
    setShowAddAnim(true);
    setTimeout(() => setShowAddAnim(false), 1000);
  };

  const currentItemCount = getItemCount();

  return (
    <div>
      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeUp {
            0% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-20px); }
          }
        `}
      </style>

      <div className="card mt-3" style={{ width: "18rem", maxHeight: "420px" }}>
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt={props.foodItem.name}
          style={{ height: "180px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <p className="card-text">This is some important text</p>

          <div className="container w-100">
            <select
              className="m-2 h-100 bg-success rounded"
              value={qty}
              onChange={(e) => setQty(parseInt(e.target.value))}
            >
              {Array.from({ length: 6 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <select
              className="m-2 h-100 bg-success rounded"
              ref={priceRef}
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <div className="d-inline h-100 fs-5">₹{finalPrice}</div>
          </div>
          <hr />

          <div className="position-relative d-inline-block">
            <button className="btn btn-success ms-2" onClick={handleAddToCart}>
              Add to Cart {currentItemCount > 0 && `(${currentItemCount})`}
            </button>

            {showAddAnim && (
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "10px",
                  color: "green",
                  fontWeight: "bold",
                  animation: "fadeUp 1s ease-out",
                }}
              >
                +{qty}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
