import React, { useEffect } from "react";

export const Effect = () => {
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes") //fetch  لجلب البيانات
      .then((res) => res.json()) //then ===  ثم حول لي البيانات الى        ثم
      .then((data) => console.log(data));
    // .then((x) => console.log(x.data.memes.map((item) => item.name))); //  ثم ضعه لي في
  }, []); // نضع داخل ارري كم مرة نريد البانات
  return <div>Effect in console log</div>;
};
