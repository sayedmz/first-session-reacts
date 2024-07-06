import { project1 } from "../../data";
import Image from "./Image";
export default function () {
  const showImage = project1.map((item, index) => (
    <Image
      key={index}
      img={item.image}
      title={item.title}
      desc={item.desc}
      review={item.review}
      price={item.price}
    />
  ));
  return <div id="AppImg">{showImage}</div>;
}
