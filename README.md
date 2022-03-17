📍react 개발환경 설치!
1. node.js 검색후 설치 ㄱ(최신버전 맥이나 윈도우버전 다똑같음) *이미설치되어있다해도 최신버전으로 설치 ㄱㄱ
(주의) 현재 Node.js설치시 14버전이나 16버전 찾아서 설치하면됩니다. 17버전 금지
2. 에디터 (visual studio code설치)
3. 작업할 공간을 만들어줌! 문서어디든..  react class라는 이름
4. 폴더를 에디터로 오픈해줌 작업폴더 Open Folder하기
5. 리액트생성은 터미널을 열고 npx create-react-app 프로젝트명 입력
6. 프로젝트명의 하위폴더를 다시 Open Folder해서 코딩 ( 왼쪽에 아까만든 프로젝트 명 확인)
7. 코드짠걸 미리보기 띄우기 : 터미널열어서 npm start

(과정 설명)
nodejs 왜 설치했는가? create-react-app 라이브러리를 사용해야하기 때문
nodejs를 깔면 npm이라는 툴 같은게 딸려옴 (라이브러리 설치를 쉽게쉽게 도와주는 아이임. 부트스트랩이라던지 제이쿼리등등)
npm으로 create-react-app이라는 라이브러리도 쉽게 설치가능하게 됨

메인페이지는 app.js임.

App.js는 메인페이지에 들어갈 html을 짜는곳! 실제 메인페이지는 어디있느냐 -> public에 index.html페이지가 하나있는데 그거임.


App.js -------------> index.html
            index.js


*📍 index.js가 app.js 내용을 index.html에 박아주는 역할을 하고,
index.js에 보면 document.getElementById('root')가 그 역할을 함

node_modules : 라이브러리 모은 폴더
public : static파일 보관함
src : 소스코드 보관함 -> 실질적 코드 작성부분

*📍 JSX문법? HTML처럼생긴 JSX.
리액트에서는 html대신 jsx문법을 사용( 대용이라고 생각)

class (x) className (o)


📍리액트를 쓰는 이유
1. 데이터 바인딩 쉽게할수 있음 (react, Vue, Angular 도 가능)
let posts = '강남 고기 맛집';
document.getElementById().innerHTML = ' '?

-->전통적인 자바스트립트 데이터 바인딩인데 , 리액트나 뷰 앵귤러의 JSX문법을 사용할 경우 괄호만 사용해주면 쉽게 바인딩할수 있음
-->{변수명,함수 등}

 let posts ='강남 고기맛집';

return (
<h4>{ posts }</h4>

)

이미지를 넣고싶을 경우?
같은폴더에 이미지를 넣고 import로 가져온후 (ex. import logo from './logo.svg';)
<img src={logo}/>해줌

2. src,id, href등의 속성에도 { 변수명, 함수 등}
---------------------------------------------------------------
3. JSX에서 style속성 집어넣을 때
style ={object 자료형으로 만든 스타일}

ex. <div style={ {color : ' blue'} }> 개발 blog </div>
camelCase 작명관습에 따라 속성명을 바꿔줘야함. font-size (x) fontSize (o)
(하지만 귀찮으니 className 쓰셈)
-----------------------------------------------------------------
📍데이터는 
1. 변수에 넣거나
2. state에 넣거나

리액트안에있는 내장함수를 쓰겠다. import React, { useState } from 'react';

----------------------------------------------------------------
📌(참고) ES6 destructuring 문법
var [a,b] = [10,100]; // array, object에 있던 자료를 변수에 쉽게 담고 싶을 때
let [a,b] = useState('남자코트 추천')
여기서 b는 a의 상태가 변할때마다 리렌더링되어 업데이트됨. useState( )안에는 초기값.
[state데이터, state데이터변경함수]
ex.
let [ 글제목, 글제목변경 ] = useState('남자 코트 추천');
return ( <h3> { 글제목 } </h3> )
--------------------------------------------------------------------
📍 state는
1. 변수 대신 쓰는 데이터 저장공간
2. useState( )를 이용해 만들어야함.
3. 문자, 숫자,array,object 다 저장가능

📍 state에 데이터 저장해놓는 이유: 웹이 App처럼 동작하게 만들고싶어서 ㅇㅇ
자주바뀌는,중요한 데이터를 변수말고 state로 저장해서 쓰세요
-----------------------------------------------------------------------------
📍 터미널에 뜨는 warning 에 eslint를 보기싫으면 
상단에 /* eslint-disable */ 작성!
------------------------------------------------------------------------

onClick={ 클릭될 때 실행할 함수이름 }
onClick={ ( ) => {실행할 내용} }      // 콜백함수를 써도됌. 
------------------------------------------------------------------------

수정된 [데이터]를 만듦 
근데 state를 deep copy해서 수정하세요.
📍object나 array경우 deep copy사용!!
📍deep copy : 값공유 X ,서로 독립적인 값을 가지는 복사 
📍 ... : 스프레드 오퍼레이터 라는 ES6문법(중괄호 대괄호 다 제거해주고 값을 복사한후 다시 중괄호에 담는거임 )
	따라서, 별개의 array가 되는거임.
@💬버튼클릭시  '남자코트 추천' -> '여자코트 추천'으로 변경되게 하시오.

let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','올리브영 세일템 추천']);

/*  
function 제목바꾸기(){
    var newArray= 글제목;  // 값복사가 아니라 값공유임. 이렇게 하면 안됌. reference data type특징임.
    newArray[0]= '여자코트 추천'
    글제목변경(newArray);

  }

*/

function 제목바꾸기(){
    var newArray= [ ...글제목 ]; // 🌟deep copy
    newArray[0]= '여자코트 추천'
    글제목변경(newArray);

  }

return(
<div className="list">
        <h3> { 글제목[0] } <span onClick={() => {따봉변경(따봉+1)}}>👍</span> {따봉} </h3>
        <button onClick={ () => {제목바꾸기} }>버튼</button>
        <p>2월 17일 발행</p>
        <hr/>
      </div>


)

-------------------------------------------------------------------------
📍리액트의 대원칙 : immutable data (직접 데이터를 수정하면 안된다.)
📍 <Array,Object state데이터 수정 방법>
- 일단 변경함수를 써야함
- 변경함수( 대체할 데이터 )
- state는 직접 건들지 말기. deep copy해서 그걸 건드세요.

@ 버튼을 누르면 제목들을 글자순 정렬?
-> 힌트) state순서만 정렬하면 div순서는 알아서 정렬 + 재렌더링 됨. 그러니 버튼을 눌렀을 때 글목록 array가 담긴 state를 한번 정렬해보시길. 
-> array 내의 아이템을 가나다 순으로 정렬하는 법을 모를땐 구글 검색 ㄱ
1.수정하고 싶은 state의 deep/shallow 카피본을 하나 생성합니다.
2. 카피본을 입맛에 맞게 수정합니다.
3. 카피본을 state변경함수( )에 집어넣습니다.

let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','올리브영 세일템 추천']);

function 가나다정렬(){
    var newArray2 = [ ...글제목 ];
    글제목변경(newArray2.sort());
  }

 <button onClick={ 가나다정렬 } >버튼</button>

--------------------------------------------
HTML을 한단어로 줄여서 쓸 수 있는 방법: 리액트의 Component 문법
📍Component 유의사항
1. 이름은 대문자로 시작
return의 소괄호( )에다가 html을 쭉 담아주면 됌
2. return( )안에 있는 건 태그하나로 묶어야함. <div></div> <div></div> ..(x) 연속된태그 사용못함.
<> </> fregment문법 사용하면 쉬움
* App( ) 도 하나의 component임.
컴포넌트만들면 관리하기가 편하다.

❓어떤걸 Component로 만들면 좋을까?
- 반복출현하는 HTML 덩어리들
- 자주 변경되는 HTML UI들
- 다른 페이지 만들 때도 컴포넌트로 만듦.

많이 만들면 단점:
- state 쓸 때 복잡해짐
(상위 component에서 만든 state쓰려면 props 문법 이용해야함)

-------------------------------------------------------------------
@ 모달창을 클릭하면 등장하도록 만드려면?
JSX문법에 {변수명}쓰듯 사용할수 있는데,
중괄호 안에 if문은 사용할수 없음.
📌if 대신 사용가능한것이 삼항연산자!!
{ 1 < 3 ? console.log('맞아요') : console.log('틀려요') }
----------------------------------------------------------
{ 조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드 }

 {
        1 < 3 
        ? <Modal></Modal>
        : null                       // 텅빈 HTML이라는 뜻
 }

클릭시 모달창을 보이게끔 하려면?
 let [modal, modal변경] = useState(flase); 로  state에 UI보임/안보임 스위치를 넣음
return( 
<h3 onClick={ ()=>{ modal변경(true) } }> { 글제목[2] }</h3>
{
        modal === true
        ? <Modal></Modal>
        : null                       // 텅빈 HTML이라는 뜻 (아무것도 안보여줌!)
 }
)
----------------------------------------버튼 누를때마다 보이고 안보이는 방법?
 function App() {

let [ modal, modal변경 ] = useState(false);
return (
	<div>

	  <button onclick={( ) => { modal변경{ !modal } } }>버튼 </button>
	  {
		modal === true
		? < Modal />
		: null
	  }
	</div>
	)
}

function Modal( ) {
return (
<div className="modal">
<h2>제목</h2>
<p>날짜</p>
<p>상세내용</p>
</div>
)
}


--------------------------------------------------------------------------------
💙map : 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때

JSX 중괄호 내에 for 못넣습니다.

반복문 쓰는 법
{ map( ) }

📍array내에 모든 데이터에 똑같은 작업을 시켜주고 싶을 때 .map()

var 어레이 = [2,3,4];

var 뉴어레이 = 어레이.map(function(a){
	return a * 2
});

📍반복문 쓰는 법
{반복할데이터.map( ( ) => { return<HTML> } ) }
--------------------------------------------------------------------
props : 자식이 부모의 stste를 가져다 쓰고 싶을 땐 말하고 쓰셔야합니다.
! 전송해줘야 자식컴포넌트는 부모 컴포넌트가 가진 state사용가능
🌟 props로 자식에게 stste전해주는 법
1. <자식컴포넌트 작명={전송할 state명} />
----------------------------------------------------------------------
Q. 제목을 누를 때 각각 다른 모달창이 뜨게?
UI만드는 법 :
1. UI 와 관련된 중요 정보들을 state로 저장해놀고
2. state에따라서 UI가 수정되게 만들면 됩니다.

행복사 단축키 : Alt ++ Shift + ↓
----------------------------------------------------------------------
input다루기 : 사용자가 입력한 글을 변수에 저장하는 법
📍사용자가 입력한 값은? e.target.value
<input onChange={ (e) => { console.log(e.target.value) } } />
콘솔에 보고싶다면?
<input onChange={ (e) => { 입력값변경(e.target.value) , console.log(입력값) } }/> 
👉 파라미터값(e)를 넣어줘야함.
🌟 map반복문으로 돌린 HTML에는 key={ i }가 필요합니다. (그래야 경고가 안뜸)
-----------------------------------------------------------------------
실전! 글발행기능 만들기
- 사용자가 입력한 글 state로 저장하기
-(실전) 서버로 먼저 보내서 영구저장하고,.
- 버튼누르면 입력한 글 state를 글제목 state에 추가

-----------------------------------------------------------------------
리액트 예전문법!

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
📍
class : 변수/함수 보관하는 덩어리
extends :오른쪽에 있는 놈의 성질을 물려받겠습니다.
state는 constructor안에 작성
state 꺼내쓰려면 this.state.state명
-이전문법은 setState( 변경할 state )
버튼을 누르면 state를 변경해보자.

되도록 function만들때는 신문법을 사용하자.

💙약간의 문법 용어 정리💙

class는 데이터/함수를 보관하는덩어리.
extends는 덩어리를 만들 때 오른쪽에 있는 놈 성질을 물려받아서 덩어리를 만들겠다는 소리입니다.
React.Component는 컴포넌트 성질을 갖고있는 덩어리입니다.
이것을 extends해서 class를 만들면 우리가 계속 사용해왔던 컴포넌트를 만들어낼 수 있습니다.
(리액트 라이브러리 사용법일 뿐입니다.)

왜 class라는 문법이 존재하냐면 
class는 여러개의 데이터나 함수를 한 곳에 보관하고 싶을 때 쓰는 문법입니다.
class 어쩌구 { }하시고 중괄호 안에 담고 싶은 데이터나 함수 담으시면 됩니다

class를 만들어두시면 class가 가지고 있는 데이터를 그대로 복사해서 사용할 수 있는 object를 쉽게 만들 수 있습니다.
혹은 class가 가지고 있는 데이터를 그대로 복사해서 사용할 수 있는 class도 쉽게 만들 수 있고요. (extends문법을 씁니다)
