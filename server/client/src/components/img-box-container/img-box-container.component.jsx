import React from "react";
import { connect } from "react-redux";
import { selectImages } from "../../redux/user-reducer/user-selectors";
import ImgBox from "../img-box/img-box.component";

import "./img-box-container.styles.css";

const ImgBoxContainer = ({ images, searchTxt, ...props }) => {
  const filteredImgs = images[0]
    ? images.filter((img) =>
        img.title.toLowerCase().startsWith(searchTxt.toLowerCase())
      )
    : images;
  return (
    <div
      className="img-box-container"
      // style={{ columns: props.columnCount, columnGap: 0 }}
    >
      {filteredImgs[0] ? (
        filteredImgs.map((img) => (
          <ImgBox key={img._id} img={img} gap={props.gap / 1} />
        ))
      ) : (
        <div className="tip">Add images using the 'Add a photo' button</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    images: selectImages(state),
    searchTxt: state.searchTxt,
  };
};

export default connect(mapStateToProps)(ImgBoxContainer);
