import React from "react";
import { Link } from "react-router-dom";

const ArtistsList = (props) => {
  const list = ({ allArtists }) =>
    allArtists
      ? allArtists.map((item) => (
          <Link
            key={item.id}
            to={`/artist/${item.id}`}
            className="artist_item"
            style={{
              background: `url('/images/covers/${item.cover}.jpg') no-repeat`,
            }}
          >
            <div>{item.name}</div>{" "}
          </Link>
        ))
      : null;
  return (
    <div className="artists_list">
      <h4>List of my favorite artists</h4>
      <div className="artist_container">{list(props)}</div>
    </div>
  );
};
export default ArtistsList;
