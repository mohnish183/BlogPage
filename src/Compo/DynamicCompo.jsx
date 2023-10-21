import React, { useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { StoreData } from "../Store/Store";
import "../CompoUI/DynamicCompo.css";
export default function DynamicCompo() {
  const id = useParams().id;
  const Navigate = useNavigate();
  const contextData = useContext(StoreData);
  let titleName;
  return (
    <div>
      {contextData.newsData.map((item, index) => {
        // console.log(typeof parseInt(id));
        // console.log(id);
        // console.log(typeof item.id);
        // console.log(item.id);
        // console.log(parseInt(id) === item.id);
        if (parseInt(id) === item.id) {
          titleName = item.category;
          console.log(titleName);
          return (
            <div className="container">
              <h2 className="heading">{item.title}</h2>
              <div className="img">
                <img src={item.image} alt="not found" />
              </div>
              <div className="discription">
                <p>{item.description}</p>
              </div>

              <button onClick={() => Navigate(-1)}>Back</button>
            </div>
          );
        }
      })}
      {contextData.newsData.map((item, index) => {
        console.log(
          `${index} ${item.category} ${titleName} ${item.category == titleName}`
        );
        if (
          index >= parseInt(id) &&
          index < parseInt(id) + 3 &&
          item.category == titleName
        ) {
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
  );
}
