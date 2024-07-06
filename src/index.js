import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Header from "./components/Header"; //  دائما اول حرف كبير بالكومبونيت
import "./style.css";
import Footer from "./components/Footer";
import AppCards from "./components/AppCars";
import AppImage from "./components/project2/AppImage";
import { CoursState } from "./components/coursUseState/CoursState";
import { FormsState } from "./components/coursUseState/FormsState";
import { Effect } from "./components/coursUseState/Effect";
import { Effect1 } from "./components/coursUseState/Effect1";
import { MergeUse } from "./MergeUseState/MergeUse";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Header />
    <Footer />
    <br />
    <br />
    <hr />
    <br />
    <h2 id="props">
      <u> props </u>
    </h2>
    <AppCards />
    <h1 id="props">2th project props</h1>
    <AppImage />
    <hr />
    <h2 style={{ fontSize: "40px", textAlign: "center" }}>
      <u> useState</u>
    </h2>
    <CoursState />

    <br />
    <hr />
    <FormsState />
    <br />
    <hr />
    <p>
      api : عبارة عن رابط يستقبل او يرسل البيانات او يسمح لنا بانشاء بيانات
      وارسالها يقوم بانشائه الباك إند ويستعملها فرونت اند هي واجهة تطبيق <br />
      It is a link that receives or sends data, or allows us to create and send
      data. It is created by the backend and used by the frontend. It is an
      application interface.
    </p>
    <hr />
    <Effect />
    <br />
    <hr />
    <p style={{ fontSize: "40px", color: "red" }}>
      fetch information from the internet
    </p>
    <Effect1 />
    <br />
    <hr />
    <MergeUse />
  </>
);
