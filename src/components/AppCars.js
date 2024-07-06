import Cards from "./Cards";
import { data } from "../data";
export default function AppCards() {
  const dataShow = data.map((el, index) => (
    <Cards
      key={index}
      title={el.title}
      name={el.name}
      age={el.age}
      desc={el.desc}
    />
  ));
  return (
    <main>
      <div>
        <h2>
          <u>card by data</u>
        </h2>
        {dataShow}
      </div>
      <hr />
      <div>
        <Cards
          title={"third title"}
          name={"abedZak"}
          age={"22"}
          desc={"desc 3"}
        />

        <Cards
          title={"fourth title"}
          name={"omar Jaafar"}
          age={"23"}
          desc={"desc 4"}
        />

        <Cards
          title={"fifth title"}
          name={"ali zak"}
          age={"44"}
          desc={"desc 5"}
        />
        <hr />
      </div>
    </main>
  );
}
