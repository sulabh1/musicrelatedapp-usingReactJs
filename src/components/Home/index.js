import React, { Component } from "react";
import axios from "axios";

import Banner from "../Home/banner";
import ArtistList from "./artistList";
const URL_ARTIST = "http://localhost:3004/artists";
class Home extends Component {
  state = {
    artists: "",
  };
  componentDidMount() {
    axios.get(URL_ARTIST).then((res) => {
      this.setState({ artists: res.data });
    });
  }
  render() {
    console.log(this);
    return (
      <>
        <Banner />
        <ArtistList allArtists={this.state.artists} />
      </>
    );
  }
}
export default Home;
