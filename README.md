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
```
class Profile extends React.Component {
  constructor(){
    super();
    this.state = {name : 'Kim' , age : 30}
  }
	
```

  // class안에다가 함수만들어서 핸들러 (onClick ..)에 적용가능 
  //단 state든, 함수든 무조건 앞에 this를 붙여줘야함.  this.changeName
  //setState어쩌구 에러가 뜨면 뒤에 .bind(this)써주면됌
  // 이유는 react가 this에 민감해서 자리를 찾지못하거나 그럴때 에러가 남
  //.bind(this) 함수를 쓰고싶지않다! 그러면 함수 만들때 애초에 에로우펑션으로 만듦,
```
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
	
```
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
	
-------------------------------------------------------------------------------------------------------------------
쇼핑몰 프로젝트
작업하던것이 있다면 컨트롤+C눌러서 종료하고
1. 작업폴더 에디터로 오픈 (여기서 난 react class)
2. 터미널에 npx create-react-app shop
3. shop 이라는 프로젝트 에디터로 오픈

yarn이용하기
구글에 yarn 1.2치고 들어가서 설치. (라이브러리 설치할때 유용한 툴.)
npm run start 혹은 yarn설치후 프로젝트 만들었으면 yarn start 가능

HTML/CSS 디자인 쌩코딩이 싫다면
bootstrap이용하기 (getbootstrap.com)

설치하는 튜토리얼보고 설치하면 됌.
react경우는 reactbootstrap을 이용하는 경우가 많음. 
React-bootstrap 설치하기
터미널에 (윈도우나 맥에 스크립트사용할수없다면 앞에 sudo붙이고)
npm install react-bootstrap bootstrap 

또는 yarn add react-bootstrap bootstarp

글고 css란에 있는 link코드 복사해서 index.html에 복붙하면 사용할 준비 완료.

public에도 자료보관 가능.
src에 넣은 파일은 	파일명 변경 + 압축됨

원하는 UI를 검색해서 복붙하면 디자인 필요없이 개발 끝 (실은 react-bootstrap 사이트를 써야하지만)

내가쓸 컴포넌트들을 import해와야 사용이 가능하다.Getting Start보면 있음
import { 컴포넌트 대문자로 된거 다 쓰기 } from 'react-bootstrap';

📍bootstrap문법에 모바일버전, PC버전에 따라 배치를 다르게 하고픈 경우
<div className="container">
  <div className="row">
    <div className="col-md-4">안녕</div>
    <div className="col-md-4">안녕</div>
    <div className="col-md-4">안녕</div>
  </div>
</div>

----------------------------------------------
데이터가 너무 길경우 
1.src폴더내에 data.js생성
2. export default적고
```

export default [
    {
        id : 0,
        title : "White and Black",
        content : "Born in France",
        price : 120000
    },

    {
        id : 1,
        title : "Red Knit",
        content : "Born in Seoul",
        price : 110000
    },

    {
        id : 2,
        title : "Gray Yordan",
        content : "Born in States",
        price : 130000
    }
]

```
복붙.

📌파일 쪼갤 때 활용하는 import/export

내보내기 : export default 변수명
가져오기 : import 페이지에서 사용하고싶은 변수명 from 경로
-> 그리고 쓰고싶은 곳에  {변수명}

export default 는 보통 페이지 맨 마지막에 씁니다.
export default 는 한번만 사용가능함. 두개 세개 (X)
❓내보낼 변수가 많다면? 예를 들어서
var name = 'Kim' ;
var name2 = 'Park' ;
두개다 유용하게 사용될것같음 . 그러면?
export { 변수1, 변수2 }
대신 import { 변수1,변수2} from 경로라고 해야함. (즉, 여러개 변수를 내보낼 경우
그 변수명을 그대로 다 써줘야함 작명X)
------------------------------------------------------------

아까 import해온 데이터로 상품명 데이터바인딩해보자.
반복적인 HTML요소가 많다면 반복문이나 component화 하기.
1. component로 만들어 첨부하기
2. component에 데이터바인딩 완료하기
3. component를 반복문 돌리기.
--------------------------------------------------
[component 제박법 ]
1. function 컴포넌트 이름(){}
2. return (<div></div>)
3. 필요한 곳에 <컴포넌트이름 />

shoes라는 state는 부모 컴포넌트가 가지고 있음
그걸 자식 컴포넌트가 사용하고싶으면
props로 전송해줘야함.
🌟<Product shoes={shoes}/>      //shoes라는 이름으로 {shoes}를 자식에게 보내줌

function Product(props) {
return( ~~~ )
}

---------------------------------------
📌[props 전송법]
1. <자식컴포넌트 보낼이름={전송할state} />
2. function 자식컴포넌트(props){}
3. props.보낼이름사용

<Product />마다 다른 상품데이터 전달하기.
   <Product shoes={ shoes[0] }/>
   <Product shoes={ shoes[1] }/>
   <Product shoes={ shoes[2] }/>

 props.shoes[0].title 대신  props.shoes.title라고 쓰면 됨.

-----------------------------------------------------------------
반복문 사용! map( )활용!
항상 괄호를 사용!

    {
      shoes.map((a,i) =>{
        return <Product shoes = {shoes[i]} /> // {shoes[i]} 나 {a}나 똑같음. a는 하나하나의 데이터를 의미 , i는 데이터갯수 
      })
    }

-----------------------------------------------------------------
src=""에다가 데이터바인딩하려면?
src={ } 이렇게하면 변수명 함수명 넣기 가능.
텍스트 중간에 변수를 넣고싶으면
'문자' +변수 +'문자'    //링크를 쪼개기!
<img src={'https://codingapple1.github.io/shop/shoes'+ 변수+'.jpg'} width="100%" />
=>      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i + 1) +'.jpg'} width="100%" /> 
i는 부모컴포넌트에서 <Product shoes = {shoes[i]} i={i} /> 로 i를 쓸수있도록 보내기

반복시킨 HTML에는 key={ } 이게 꼭 필요합니다.

{
      shoes.map((a,i) =>{
        return <Product shoes = {shoes[i]} i={i} key={i}/> // {shoes[i]} 나 {a}나 똑같음. a는 하나하나의 데이터를 의미 , i는 데이터갯수 i={i}로 자식컴포넌트에 i전달
      })
    }
------------------------------------------------------------------------
📌페이지 나누기 (라우팅)
= react-router-dom 라이브러리 이용
터미널에 라이브러리 설치.
yarn add react-router-dom@5 
또는 npm install react-router-dom@5

그리고 react-router-dom 초기셋팅법
1. index.js에다가 import { BrowserRouter } from 'react-router-dom'; 를 씀
2. <BrowserRouter>를 써써<App />을 감싸주기.

    <BrowserRouter>
    <App />
    </BrowserRouter>
이렇게 하면 라우터 셋팅 끝!
/abc로 접속하면 이런페이지 보여주세요~
/def로 접속하면 저런페이지 보여주세요~
--> 라우터 라이브러리 기능임
❓ <BrowserRouter> 대신 <HashRouter>를 쓸수 있는데,
HashRouter를 쓰는 순간 url에 /#/이 추가가 됨.
HashRouter : 라우팅 안전하게 할 수 있게 도와줌.
BrowserRouter :라우팅을 리액트가 아니라 서버에게 요청할 수도 있어서 위험

서버 : "어 그런페이지 없는데요?"할 수 있음
서버에서 서버 라우팅 방지하는 API를 작성해둬야함
💙Route를 만들어보자 (페이지를 나누자)
1. 일단 import해옵니다.
import { Link, Route, Switch } from 'react-router-dom'

2. 
/로 접속하면 메인페이지
/detail로 접속하면 상품상세페이지 보이게

<Route path="/">
  <div>메인페이지예요</div>
</Route>
<Route path="/detail">
  <div>디테일페이지에요</div>
</Route>

❤️ Route쓰는 다른 방법
: HTML이 아니라 컴포넌트 하나를 그냥 깔끔하게 보여주고싶다면?
<Route path="/어쩌구" component={Modal}></Route>

	
