"use client";
import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

export default function BeatPlayer() {
  return (
    <>
      <div className="beatContainer">
        <div className="flex justify-center">
          <Image
            className="beatImg"
            src={"/img/y2k.jpg"}
            width={300}
            height={300}
          ></Image>
        </div>
        <div className="flex justify-center">
          <ReactPlayer height={30} url="/test.mp3" controls={true} />
        </div>
      </div>
    </>
  );
}
