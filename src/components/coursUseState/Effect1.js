import React, { useEffect, useState } from "react";
import { EffectName } from "./EffectName";

export const Effect1 = () => {
  const [data, setData] = useState([]);

  const showData = data.map((item, index) => (
    <EffectName name={item} key={index} />
  ));
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())

      .then((x) => setData(x.data.memes.map((item) => item.name)));
  }, []);
  return <div>{showData}</div>;
};
