import heroimg from "../../assets/hero-img.png";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="container-box">
        <div className="hero-content-row">
          <div className="hero-col-1">
            <h1 className="main-heading">Collections</h1>
            <p>
              you can explore ans shop many different collection from various
              brands here.
            </p>
            <a href="" className="btn-shop">
              <i className="bi bi-bag-fill"></i>
              <span>Shop Now</span>
            </a>
          </div>
          <div className="hero-col-2">
            <div className="hero-image">
              <img src={heroimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
