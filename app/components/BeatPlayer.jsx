"use client";
import React, { Component } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

export default class BeatPlayer extends Component {
  state = {
    playing: false,
  };

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
    this.setState({ played });
  };

  render() {
    const { playing } = this.state;

    return (
      <div className="BeatPlayer">
        <div className="beatContainer">
          <div className="flex justify-center">
            <Image
              className="beatImg"
              src={"/img/y2k.jpg"}
              width={300}
              height={300}
              alt="album art for the selected beat"
            ></Image>
          </div>
          <div className="flex justify-center">
            <ReactPlayer playing={playing} height={5} url="/test2.mp3" />
          </div>
          <button className="ml-4" onClick={this.handlePlayPause}>
            <Image
              src={"/img/playPause.svg"}
              width={30}
              height={30}
              alt="play and pause button"
            ></Image>
          </button>
        </div>
      </div>
    );
  }
}
