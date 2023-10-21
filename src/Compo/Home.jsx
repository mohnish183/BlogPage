import React from "react";
import { StoreData } from "../Store/Store";
import { useContext } from "react";
import "../CompoUI/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  let homeData = useContext(StoreData);
  return (
    <>
      <div className="header-img-section">
        <div className="img-item-1"></div>
        <img
          src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg?width=500&height=300"
          alt=""
          height={"600vh"}
          width={"780vw"}
        />
        <div className="img-item-2">
          <img
            src="https://staticimg.amarujala.com/assets/images/2019/12/29/travel_1577616562.jpeg?w=414&dpr=1.0"
            alt=""
            height={"300vh"}
            width={"740vw"}
          />
          <img
            src="https://media.timeout.com/images/105903326/750/422/image.jpg"
            alt=""
            height={"300vh"}
            width={"740vw"}
          />
        </div>
      </div>
      <div className="bollywood-section">
        <h3
          style={{
            position: "relative",
            left: "5vw",
            padding: "5vh",
            width: "85vw",
          }}
        >
          The Latest
        </h3>
        <div className="flexContainer">
          {homeData.newsData.map((item, index) => {
            if (index >= 0 && index <= 2)
              return (
                <div className="item">
                  <Link to={`/detail/${item.id}`}>
                    <img src={item.image} alt="not found" />
                    <h3>{item.title}</h3>
                  </Link>

                  <p>
                    {item.description.split(" ").splice(0, 20).join(" ")}...
                  </p>
                </div>
              );
          })}
        </div>
      </div>

      <div className="latest-article-section">
        <img
          src="https://newspaperads.ads2publish.com/wp-content/uploads/2018/08/giordano-time-wear-upto-50-off-ad-times-of-india-mumbai-21-08-2018-568x945.png"
          alt=""
        />
        <div className="latest-article">
          <h3 className="latest">Latest</h3>
          {homeData.newsData.map((item, index) => {
            if (item.category === "Tech" && index > 48 && index < 54)
              return (
                <>
                  <div className="item-2">
                    <Link to={`/detail/${item.id}`}>
                      {" "}
                      <img src={item.image} alt="" />
                    </Link>

                    <div className="content-section">
                      <Link to={`/detail/${item.id}`}>
                        <h4>{item.title}</h4>
                      </Link>

                      <p>
                        {" "}
                        <p>
                          {item.description.split(" ").splice(0, 20).join(" ")}
                          ...
                        </p>
                      </p>
                    </div>
                  </div>
                </>
              );
          })}
        </div>
      </div>

      <div className="top-post-section">
        <div className="img-section-2">
          <img
            src={homeData.newsData[60].image}
            alt="not found"
            height={"800vh"}
            width={"800vw"}
          />
        </div>
        <div className="top-post">
          <h3 className="latest">Latest</h3>
          {homeData.newsData.map((item, index) => {
            if (item.category === "Food" && index > 60 && index < 65)
              return (
                <>
                  <div className="item-2 toppost-item">
                    <Link to={`/detail/${item.id}`}>
                      <img src={item.image} alt="" />
                    </Link>

                    <div className="content-section">
                      <Link to={`/detail/${item.id}`}>
                        <h4>{item.title}</h4>
                      </Link>

                      <p>
                        {" "}
                        <p>
                          {item.description.split(" ").splice(0, 20).join(" ")}
                          ...
                        </p>
                      </p>
                    </div>
                  </div>
                </>
              );
          })}
        </div>
      </div>

      <div className="latest-stories-section">
        <h3 className="latest-stories">Latest Stories</h3>
        <div className="story-flex">
          {homeData.newsData.map((item, index) => {
            if (item.category == "Fitness" && index > 38 && index < 42)
              return (
                <>
                  <div className="item-3">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </>
              );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
