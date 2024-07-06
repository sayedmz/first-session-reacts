import logo from "../Untitled.jpg"; // استيراد صورة
function Header() {
  return (
    <>
      <div className="content">
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Contact</li>
          <li>sayed</li>
        </ul>
        <div>
          <h4>1ere method create image</h4>
          <img
            id="image"
            src={logo}
            alt="react"
            style={{ width: "200px", height: "200", marginTop: "0px" }}
          />
        </div>
        <br />
        <div>
          <h4>2th method create image</h4>
          <img
            id="image"
            src={require("../reactJS_logo.jpeg")}
            alt="react"
            width="100px"
          />
        </div>
      </div>
    </>
  );
}
export default Header;
