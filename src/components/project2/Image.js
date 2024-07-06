import star from "../../Assets/star_half_FILL0_wght400_GRAD0_opsz24.png";
export default function (props) {
  return (
    <div id="childImg">
      <img id="proImg" src={props.img} alt="img" />
      <div id="title">
        <h3 style={{ marginButton: "0" }}>{props.title}</h3>

        <div
          style={{
            color: "gray",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <img src={star} style={{ width: "15px" }} />
          {props.review}
        </div>
      </div>
      <h4 style={{ color: "gray", marginTop: "0" }}>{props.desc}</h4>
      <h6>The price : {props.price} night</h6>
    </div>
  );
}
