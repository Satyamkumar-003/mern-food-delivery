import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [loading, setLoading] = useState(true); // 🔹 New state

  const loadData = async () => {
    try {
      setLoading(true); // 🔹 start loading
      let response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/foodData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setFoodItem(response[0]);
      setFoodCat(response[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // 🔹 stop loading
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // 🔹 Loader UI
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      {/* Carousel */}
      <div className="position-relative">
        <div
          id="foodBanner"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {foodItem.slice(0, 3).map((item, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={item._id}
              >
                <img
                  src={item.img}
                  className="d-block w-100"
                  alt={item.name}
                  style={{ maxHeight: "500px", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#foodBanner"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#foodBanner"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Search bar overlay */}
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <nav className="navbar">
            <div className="container-fluid justify-content-center">
              <form className="d-flex" role="search" style={{ width: "100%" }}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Food"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
            </div>
          </nav>
        </div>
      </div>

      {/* Food cards */}
      <div className="container">
        {foodCat.length > 0 &&
          foodCat.map((data) => (
            <div className="row mb-3" key={data._id}>
              <div className="fs-3 m-3">{data.CategoryName}</div>
              <hr />
              {foodItem
                .filter(
                  (item) =>
                    item.CategoryName === data.CategoryName &&
                    item.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((filterItems) => (
                  <div
                    key={filterItems._id}
                    className="col-12 col-md-6 col-lg-3"
                  >
                    <Card
                      foodItem={filterItems}
                      options={filterItems.options[0]}
                    />
                  </div>
                ))}
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
