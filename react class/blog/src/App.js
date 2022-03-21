/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','올리브영 세일템 추천']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목 , 누른제목변경] = useState(0); //내가 방금 누른 제목넘버

  let [입력값, 입력값변경] = useState('');

 function 반복된UI(){
   var 어레이 = [];

   for(var i=0; i < 3; i++){
     어레이.push(<div>안녕</div>)
   }
   return 어레이
 }



  let posts = '강남 고기 맛집';

  // function 제목바꾸기(){
  //   var newArray= [ ...글제목 ];
  //   newArray[0]= '여자코트 추천'
  //   글제목변경( newArray );

  // }
  // function 가나다정렬(){
  //   var newArray2 = [ ...글제목 ];
  //   글제목변경(newArray2.sort());
  // }


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <button onClick={ 가나다정렬 } >버튼</button> */}
      { 

      //글 제목의 갯수만큼 return 반환됌
      글제목.map(function(a,i){  // 여기서 a는 array안에 있던 하나하나의 데이터
        return    (   
        <div className="list" key={i}>
        <h3 onClick={ () => {누른제목변경(i)}}> { a } <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> {따봉} </h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>
        )
      })
      }

      <div className="publish">
        <input onChange={ (e)=>{입력값변경(e.target.value)}} />
        <button onClick={()=>{ 
          var arrayCopy = [...글제목];
          arrayCopy.unshift(입력값); // array 맨앞에 자료 추가하는 문법 (=)[ 입력값 , '남자 코트 추천','강남 우동 맛집','올리브영 세일템 추천' ]
          글제목변경(arrayCopy);
          }}>저장</button>
      </div>
      <Profile />

     <button onClick={() => {  modal변경( !modal ) }}>열고닫기</button>
    {
      modal === true
      ? <Modal 글제목={글제목} 누른제목 ={누른제목}/> // props로 자식에게 state전해주는 법 <자식컴포넌트 작명 = {state명} />
      : null
    }
    </div>
  );
}




function Modal(props){ //자식 컴포넌트에서 props파라미터 입력후 사용
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>  
      <p>날짜</p>
      <p>상세내용</p>
  </div>
  )
}

//리액트 예전 문법

class Profile extends React.Component {
  constructor(){
    super();
    this.state = {name : 'Kim' , age : 30}
  }

  // class안에다가 함수만들어서 핸들러 (onClick ..)에 적용가능 
  //단 state든, 함수든 무조건 앞에 this를 붙여줘야함.  this.changeName
  //setState어쩌구 에러가 뜨면 뒤에 .bind(this)써주면됌
  // 이유는 react가 this에 민감해서 자리를 찾지못하거나 그럴때 에러가 남
  //.bind(this) 함수를 쓰고싶지않다! 그러면 함수 만들때 애초에 에로우펑션으로 만듦,
  changeName = () =>{
    this.setState( {name: 'Lee'} )
  }

  render(){
    return (
      <div>
        <h3>프로필입니다.</h3>
        <p>저는 {this.state.name}입니다.</p>
        <button onClick={this.changeName}>버튼</button>
      </div>
    )
  }

}













export default App;
