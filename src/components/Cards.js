export default function Cards(props) {
  return (
    <div>
      <h1> title is {props.title}</h1>
      <h3>my name is {props.name}</h3>
      <h5> age {props.age}</h5>
      <p> desc is {props.desc}</p>
    </div>
  );
}
