/*
import React, { Component } from "react";

class Payment extends Component {
    render(){
        return(
            <div>
                <br />
                감사합니다! 결제금액은 <b>{this.props.amount}</b> 입니다.
            </div>
        );
    }
}

*/

/* 위 클래스형 컴포넌트를 함수형 컴포넌트로 변경 */
/*
import React from "react";

const Payment = ({amount}) => {
    return (
        <div>
            <br />
            감사합니다! 결제금액은 <b>{amount}</b> 입니다.
        </div>
    );
}
*/

/*
import React from "react";

function Payment(props){
    return(
        <div>
            <br />
            <div style={{color:props.color}}>감사합니다! 결제금액은 <b>{props.amount}</b> 입니다.</div>
        </div>
    );
}
//stype={{}} 
//밖의 중괄호: jsx의 중괄호, 안에 중괄호: style의 중괄호
export default Payment; //다른 곳에서 사용할 수 있게
*/

/* 위 소스를 구조 분해 할당으로 구현 */
import React from "react";

function Payment({color, amount, isSpecial}){
    return(
        <div>
            <br />
            { isSpecial ? <b>*</b>: null }
            <div style={{color}}>감사합니다! 결제금액은 <b>{amount}</b> 입니다.</div>
        </div>
    );
}

export default Payment; 