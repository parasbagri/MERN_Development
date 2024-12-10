const Coursel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" id='crousor'>
        <div className="carousel-item active">
          <img
            src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=900"
            className="d-block w-100 h-50"
            style={{ filter: "brightness(30%)" }}
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg"
            className="d-block w-100 h-50"
            style={{ filter: "brightness(30%)" }}
            alt="Pastry"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="d-block w-100 h-50"
            style={{ filter: "brightness(30%)" }}
            alt="Barbeque"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
    </div>
  );
};

export default Coursel;
