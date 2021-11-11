import React, { useState } from "react";

function InputSample() {
    //변수는 특별한 경우가 아니면 const변수를 사용한다.
    //상태 값 변화를 위해 text변수를 사용
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    }); 

    const { name, nickname } = inputs; //구조분해 할당

    const onChange = (e) => {
        const { value, name } = e.target; //우선 e.targer에서 name과 value를 추출한다.
        setInputs({
            ...inputs, [name]:value
        });
    };

    const onreset = (e) => {
        setInputs({
            name:'',
            nickname:''
        });
    };

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onreset}>초기화</button>
            <div>
                <b>값: </b>
                {name}({nickname})
            </div>
        </div>
    );
}

export default InputSample;