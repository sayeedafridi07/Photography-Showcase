import React from "react";
import Images from "./Images";
import { useState, useEffect } from "react";

function Gallery() {
  const [articles, setArticles] = useState([]);

  const fetchImages = async () => {
    const url =
      "https://newsapi.org/v2/everything?q=tesla&from=2022-06-06&sortBy=publishedAt&apiKey=4b583a00cbea4f22bc40af6d6b42d737";
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
  };
  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        Photographer's Showcase
      </h1>
      <div className="container">
        <div className="row">
          {articles.map((content) => {
            return (
              <div
                className="col-sm-4"
                key={content.url}
              >
                <Images imageUrl={content.urlToImage} author={content.author} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Gallery;
