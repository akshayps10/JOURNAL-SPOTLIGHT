import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Image } from "react-bootstrap";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="card border-0 shadow-sm p-4">
      <div className="card-body text-center">
        <div className="fs-1 mb-3">{icon}</div>
        <h5 className="card-title fw-bold mb-3">{title}</h5>
        <p className="card-text text-muted">{description}</p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
     
      <div className="d-flex flex-column gap-3 py-5 px-4 mx-auto" style={{ maxWidth: "960px" }}>
        <h1 className="display-4 fw-bold text-primary">
          Welcome to <span className="text-danger">JOURNAL SPOTLIGHT</span>
        </h1>

        <p className="text-secondary fs-5">
        In today's fast-paced world, staying informed is not just a luxury; it's a necessity. Your trusted source for the latest headlines, in-depth analysis, and breaking news every morning empowers you to navigate the complexities of our global landscape with confidence.  we bring clarity to the chaos, helping you connect the dots and grasp the implications of current events. So, embrace the power of knowledge—stay informed, stay ahead, and transform your morning routine into a gateway for insight and understanding.
        </p>

        <p className="text-muted fst-italic">Stay informed, stay ahead.</p>

        <Link to={"/News"}>
          <Button
            className="bg-warning border-0 text-dark py-2 px-4 rounded-pill fw-semibold shadow d-flex align-items-center gap-2"
            style={{ width: "fit-content" }}
          >
            EXPLORE OUR ARTICLES <i className="text-danger bi-arrow-right fs-5"></i>
          </Button>
        </Link>
      </div>

     
      <section className="py-5 bg-primary text-white p-3 ">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-5 text-dark">
            Why You'll Love JOURNAL SPOTLIGHT
          </h2>

          <div className="row g-4">
            <div className="col-md-4">
              <FeatureCard
                title="Diverse Content"
                description="Explore news on a variety of topics, from technology to lifestyle."
                icon="📚"
              />
            </div>

            <div className="col-md-4">
              <FeatureCard
                title="Community Driven"
                description="Connect with writers and readers who share your interests."
                icon="🌐"
              />
            </div>

            <div className="col-md-4">
              <FeatureCard
                title="Easy to Use"
                description="A seamless platform for sharing and discovering great content."
                icon="🚀"
              />
            </div>
          </div>
        </div>
        </section>
        <div className="my-5 border-4 border-info rounded">
  <Row className="align-items-center py-5 justify-content-center">
   
    <Col md={6} className="text-center mb-4 mb-md-4 text-md-start">
      <h2 className="fw-bold">
        Want to know more about today's <span className="text-danger">TOP 10 news</span>?
      </h2>
      <p className="text-">Checkout these top news articles!</p>
      <Button variant="warning" size="lg" className="mt-3">
        Stay Updated with Daily News: Your Go-To Resources
      </Button>
    </Col>

    <Col className="d-flex justify-content-center w-100">
      <Row className="text-center w-100">
      
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Image
            src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-165436,resizemode-75,msid-112671669/news/india/heavy-rains-winds-lash-parts-of-kerala-uprooting-trees-causing-traffic-snarls-power-cuts.jpg"
            alt="News Preview"
            className="img-fluid rounded"
            width={450}
          />
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Image
            src="https://st2.depositphotos.com/3591429/6010/i/950/depositphotos_60104597-stock-photo-man-with-laptop-reading-news.jpg"
            alt="News Preview"
            className="img-fluid rounded"
            width={450}
          />
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8thwYqHKCnwpNh7rqhVHh7Jh7n5pVdGGiWzFrtKQx4Lspa4k-QM_EzC-Z8pR3cf6LjtA&usqp=CAU"
            alt="News Preview"
            className="img-fluid rounded"
            width={450}
          />
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcwNdsBBMniy34kK4RXC9t3Z8F4e79a11RmNpY60HOhO1p916D2Ws5m5zYyLi1SymJBcM&usqp=CAU"
            alt="News Preview"
            className="img-fluid rounded"
            width={450}
          />
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7Vud_6GaUbSXX7wDcmes0yJtSd3PQgn-uA&s"
            alt="News Preview"
            className="img-fluid rounded"
            width={450}
          />
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Image
            src="https://i.pinimg.com/236x/d9/dc/42/d9dc424faeefce479965215416095aa7.jpg"
            alt="News Preview"
            className="img-fluid rounded"
            width={250}
          />
        </Col>
      </Row>
    </Col>
  </Row>
</div>

         
      
    </div>
  );
};

export default Home;
