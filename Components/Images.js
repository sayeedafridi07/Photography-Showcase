import React from "react";

function Images(props) {
  let { imageUrl } = props;
  return (
    <>
      <div className="card shadow bg-body rounded my-3 mx-3">
        <img
          src={
            !imageUrl ? "https://wallpapercave.com/wp/vF2nYkU.jpg" : imageUrl
          }
          className="card-img-top"
          alt="..."
          width={320}
          height={180}
        />
        <div className="card-footer">
          <small className="text-muted">
            {" "}
            By {!props.author ? "Arij Rahman" : props.author}
          </small>
        </div>
      </div>
    </>
  );
}

export default Images;
