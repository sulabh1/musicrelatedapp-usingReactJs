import React from "react";

const Albumlist = ({ albumList }) => {
  const showList = (albumList) =>
    albumList
      ? albumList.map((item, index) => (
          <img key={index} alt="" src={`/images/albums/${item.cover}.jpg`} />
        ))
      : null;

  return <div className="albums_list">{showList(albumList)}</div>;
};

export default Albumlist;
