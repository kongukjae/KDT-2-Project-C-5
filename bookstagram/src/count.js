import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    //state의 초기값 설정하기
    this.state = {
      number: 0,
      fixdNumber: 0,
    };
  }
  render() {
    const { number, fixdNumber } = this.state; //state조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값:{fixdNumber}</h2>
        <button
          //onClick을 통해 버튼이 클릭될 때 호출할 함수 지정
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;
