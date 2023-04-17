const Mycomponent = (props) => {
  return <div>안녕하세요, 제 이름은{props.name}입니다.</div>;
};
Mycomponent.defaultProps = {
  name: "정지은",
};

export default Mycomponent;
