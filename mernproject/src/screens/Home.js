import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
// import Carousal from "../components/Carousal";
function Home() {
  //mapping
  const [search, setSearch]=useState('')
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  // we maker funtion async because fetch (api ) wo hamar async function ha
  const loadData = async () => {
    let response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/foodData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    // console.log(response[0],response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
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

          {/* Search bar overlay like before */}
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
                <form
                  className="d-flex"
                  role="search"
                  style={{ width: "100%" }}
                >
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search Food"
                    aria-label="Search"
                    value={search} 
                    onChange={(e)=>{setSearch(e.target.value)}}
                  />
                  <button className="btn btn-outline-dark" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        {foodCat !== []
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== [] ? (
                    foodItem
                      .filter((item) => (item.CategoryName === data.CategoryName)  && (item.name.toLowerCase().includes(search.toLowerCase()))) 
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card
                              foodItem={filterItems}
                              options={filterItems.options[0]}
                              // imgSrc={filterItems.img}
                            ></Card>
                          </div>
                        );
                      })
                  ) : (
                    <div>no such data found</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
