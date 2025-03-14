import React, { Component } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

export default class BeatPlayer extends Component {
  state = {
    playing: false,
  };

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
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
            <ReactPlayer
              playing={playing}
              className="BeatPlayer"
              height={30}
              url="/test.mp3"
            />
          </div>
          <button className="text-white" onClick={this.handlePlayPause}>
            Play
          </button>
        </div>
      </div>
    );
  }
}
