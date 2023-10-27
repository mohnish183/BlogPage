import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../CompoUI/BollyWood.css";
import { StoreData } from "../Store/Store";
const BollyWood = () => {
  const bollyWoodData = useContext(StoreData);

  return (
    <div className="container">
      <h3 className="category-title">BollyWood</h3>

      {bollyWoodData.newsData
        .filter((item, index) => item.category === "Bollybood" && index < 10)
        .map((item, index) => {
          return (
            <div key={index} className="container-1">
              <div className="flex_container box1">
                <Link to={`/detail/${item.id}`}>
                  <div className="image-box">
                    <img src={item.image} alt="" />
                  </div>
                </Link>
                <div className="content">
                  <Link to={`/detail/${item.id}`}>
                    <h1 className="title">
                      {item.title.split(/(\s+)/).slice(0, 20)}...
                    </h1>
                  </Link>

                  <p>{item.description.split(/(\s+)/).slice(0, 40)}...</p>
                </div>
              </div>

              <hr
                style={{ width: "80%", textAlign: "left", marginLeft: "0" }}
              ></hr>
            </div>
          );
        })}
      {/* ........................................ */}
      <div className="container2">
        <h4>TOP headLine</h4>
        {bollyWoodData.newsData
          .filter(
            (item, index) =>
              item.category === "Bollybood" && index > 10 && index < 15
          )
          .map((item, index) => {
            return (
              <div key={index}>
                <div className="flex_container2">
                  <Link to={`/detail/${item.id}`}>
                    <div className="image-box-1">
                      <img src={item.image} alt="" />
                    </div>
                  </Link>
                  <div className="content">
                    <Link to={`/detail/${item.id}`}>
                      <h1 className="title-1">
                        {item.title.split(/(\s+)/).slice(0, 20)}...
                      </h1>
                    </Link>

                    <p>{item.description.split(/(\s+)/).slice(0, 40)}...</p>
                  </div>
                </div>

                <hr
                  style={{ width: "50%", textAlign: "left", marginLeft: "0" }}
                ></hr>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BollyWood;
