import React from 'react';

function Carousal() {
  const getRandomImage = (seed) =>
    `https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/04/fresh-vibrant-vegetables-and-fruits-on-a-green-background.png`;

  const overlayStyle = {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    width: '100%',
    maxWidth: '600px',
  };

  const imageStyle = {
    maxHeight: '500px',
    objectFit: 'cover',
    width: '100%',
  };

  return (
    <div className="position-relative">
      {/* Carousel */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="7000">
            <img
              src={getRandomImage('pizza')}
              style={imageStyle}
              className="d-block"
              alt="Pizza"
            />
          </div>
          <div className="carousel-item" data-bs-interval="7000">
            <img
              src={getRandomImage('burger')}
              style={imageStyle}
              className="d-block"
              alt="Burger"
            />
          </div>
          <div className="carousel-item" data-bs-interval="7000">
            <img
              src={getRandomImage('noodles')}
              style={imageStyle}
              className="d-block"
              alt="Noodles"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Search Bar Overlay */}
      <div style={overlayStyle}>
        <nav className="navbar">
          <div className="container-fluid justify-content-center">
            <form className="d-flex" role="search" style={{ width: '100%' }}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Food"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Carousal;
