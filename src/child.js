function ChildComponent(props) {
  const { name, age } = props;
  return (
    <div>
      <p>
        이름은 {name} , 나이는 {age}
      </p>
    </div>
  );
}

export default ChildComponent;
