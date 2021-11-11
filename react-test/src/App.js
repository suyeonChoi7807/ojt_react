/*
//클래스형 컴포넌트 생성
import React, { Component } from "react";

class App extends Component { 
  //component 를 상속받아서 App를 구현
  render(){
    const summary = '사용자 UI를 효과적으로 구축하기 위해서 사용하는 자바스크립트 기반의 라이브러리이다.';
    
    //summary에 저장된 것을 출력
    return(
      <form>
        <h2>리액트란?</h2>
        <div>{summary}</div> 
      </form>
    );
    
  }

}


//함수형 컴포넌트
import React from "react";

function App(){
  const summary = '사용자 UI를 효과적으로 구축하기 위해서 사용하는 자바스크립트 기반의 라이브러리이다.';
    //summary에 저장된 것을 출력
    return(
      <form>
        <h2>리액트란?</h2>
        <div>{summary}</div> 
      </form>
    );
}


import React from "react";
//자바스크립트 - 구조분해할당 
class App extends React.Component{
  //state: component 내의 상태 값(객체) 정의-> 렌더링 함수로 값을 변화시키며 사용
  state = {number:0};

  render(){
    //return 내에는 JSX 코드
    return (
      <div style={{textAlign : "center"}}>
        <div style={{fontSize:"100px"}}>{this.state.number}</div>
        <button onClick={this.handleClickIncrement}>증가</button>
        <button onClick={this.handleClickDecrement}>감소</button>
      </div>
    );
  }

  //자바스크립트- 화살표 함수
  handleClickIncrement= () => {
    this.setState(state => ({
      number: state.number+1
    }));
  }

  handleClickDecrement= () => {
    this.setState(state => ({
      number: state.number-1
    }));
  }
}
*/

/* 위 클래스형 컴포넌트 소스를 함수형 컴포넌트로 변경하기 */
/*
import React, { useState } from "react";
//useState: react에서 지원해주는 함수
const App = () => {
  const [number, setNumber] = useState(0); 
  //첫번째 원소: 상태값(number) =0, 두번째 원소:상태값 update함수
  //update함수를 개발자가 따로 만들어 줄 필요 없다.

  return (
    <div style={{textAlign:"center"}}>
      <div style={{fontSize:"100px"}}>{number}</div>
      <button onClick={()=> setNumber(number+1)}>증가</button>
      <button onClick={()=> setNumber(number-1)}>감소</button>
    </div>
  );
}

//export default App;
*/

/*
import React from "react";
//클래스형 컴포넌트
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        name:'오수철',
        age:28,
        job:'프로그래머'
    }
  }
  
  render(){
    const { name, age, job } = this.state;

    return (
        <div>
          <div>이름:{name}</div>
          <div>나이:{age}</div>
          <div>직업:{job}</div>
        </div>
    );
  }
}
*/

/* 함수형 컴포넌트 생성*/

// import React from "react";
// import './App.css';
// import ImportComponent from "./ImportComponent";  /*추가*/

// function App(){
//   return (
//     <div>
//       <h1>React는 자바스크립트 라이브러리의 하나</h1>
//       <p>함수형 컴포넌트 생성하기</p>
//       <ImportComponent></ImportComponent> { /*추가*/ }
//     </div>
//   );
// }


/* props 실습 */
/* <자식 컴포넌트 props_name="props_value"> */
/*
import React, {Component} from "react";
import Payment from "./payment"; //자식component 사용
import Wrapper from './Wrapper';

//부모 component
class App extends Component {
  render(){
    return(
      <Wrapper>
        <Payment amount="560000원" color="red" isSpecial={true} /> 
      </Wrapper>
    );
  }
}
*/

/* input 상태 관리하기 */
import { render } from "@testing-library/react";
import React from "react";
import InputSample from "./InputSample";

function App(){
    return(
      <InputSample />
    );
}

export default App;