import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../CompoUI/BollyWood.css";
import { StoreData } from "../Store/Store";
const Tech = () => {
  // const techData = useContext(StoreData);

  {
    /* {props.foodData.map((item, index) => {
        <h1>{item.id}</h1>;
      })} */
  }
  const bollyWoodData = useContext(StoreData);
  let count_1 = 0,
    count_2 = 0;
  return (
    <div className="container">
      <h3 className="category-title">Tech</h3>
      {bollyWoodData.newsData.map((item, index) => {
        count_1++;
        if (item.category === "Tech" && count_1 > 44 && count_1 < 55) {
          return (
            <div key={index}>
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
                style={{
                  width: "50%",
                  textAlign: "left",
                  marginLeft: "0",
                }}
              ></hr>
            </div>
          );
        }
      })}
      {/* ........................................ */}
      <div className="container2">
        <h4>TOP headLine</h4>
        {bollyWoodData.newsData.map((item, index) => {
          count_2++;
          if (item.category === "Tech" && count_2 > 54 && count_2 < 59) {
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
          }
        })}
      </div>
    </div>
  );
};

export default Tech;
