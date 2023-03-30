import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const Images = props => {
  const [formData, setFormData] = useState({
    imgs: [
      "https://image.board.gameforge.com/uploads/metin2/de/announcement_metin2_de_e9cf463dcf3e27c08474bdc41214f01d.jpg",
      "https://scontent.fopo3-2.fna.fbcdn.net/v/t39.30808-6/326365285_1384111752402089_4102284127587951047_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8631f5&_nc_ohc=bIKE2DPzFp4AX-oz-6O&_nc_ht=scontent.fopo3-2.fna&oh=00_AfALtBWcxEXUtW4ExAbLOvAHZjTuQrvZpm8C27zmYDf89A&oe=6429F25C",
      "https://uptopico.com/upload/blog/cover/604b4e3ea7d69.jpg",
    ],
    current: 0,
  });
  const { imgs, current } = formData;
  const onClick = type => {
    let c = current;
    if (type === "right") {
      if (c === imgs.length - 1) c = 0;
      else c++;
    } else {
      if (c === 0) c = imgs.length - 1;
      else c--;
    }
    setFormData({ ...formData, current: c });
  };
  return (
    <Fragment>
      <div className="box-one wrapper">
        <img src={imgs[current]} alt="image"></img>
        <i
          onClick={e => onClick("right")}
          className="bi bi-chevron-right arrow-right"></i>
        <i
          onClick={e => onClick("left")}
          className="bi bi-chevron-left arrow-left"></i>
      </div>
    </Fragment>
  );
};

Images.propTypes = {};

export default Images;
