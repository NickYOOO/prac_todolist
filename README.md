Redux: 리덕스 이용순서 정리해보기

리덕스 흐름 순서

1. 가장 처음 저는 리덕스 패키지를 쓰기위해 , yarn add react-redux 두개의 패키지를 설치해 줬습니다.

  2. 그리고 폴더 구조를 만들어 주는데, 저는 리덕스 파일안에 config 와 modules 폴더를 구조화 했고, 그안에 스토어와, 투두 리스트에 필요한 스테이트가 모여있는 todos.js 를 만들어 주었습니다.

 3. 스토어 안에는 create Store 와  combineReducers을 import 시켜주었고, 스토어 안에는 리듀서 집합들과 연결해 주었습다.

 4. 디렉토리 최상단에 있는 index.js에 들어가, store와 Provider 패키지를 import 해주고 Provider 컴포넌트로 App을 감싸주고, 스토어 속성 값에 생성한 Redux store를 넣어 줍니다.
 
 ```
Provider

	Provider 는 react-redux 라이브러리에 내장되어있는, 리액트 앱에 	store 를 손쉽게 연동 할 수 있도록 도와주는 컴포넌트입니다.
 ```


5. 스토어를 생성하고나서, 모듈을 만들어 줍니다. 모듈이란 우리가 필요한 State들이 모여있는 State 그룹입니다. 

6.먼저 Action 값들을 선언해 주고,
  initialState 초기 상태 값을 2개 만들어 주었습니다.
 

7.그리고 action Creator 들을 만들어 줍니다.

각각 createList 함수와 Remove list 함수, update list 액션 크리에이터 함수들을 만들어 주었습니다.

Create 함수에는 페이로드를 id, titlte, body 값을 담았고

Remove와 업데이트는 id 값만 담았습니다.

생성할땐 3가지 데이터가 모두 필요하기에 3개를 다 담았고, !isdone값은 처음 생성할때 디폴트 값으로 주어지겠죠, 
변경과, 삭제 할때는 id 값을 통해 변경과 삭제를 하기 때문에 payload에 id 값을 담았습니다.

```
pay load는 전송되는 데이터를 뜻한다.
```

8.그 다음 리듀서를 만들어 줍니다. (리듀서 = 변화를 일으키는 함수)


> switch / case 조건문

```jsx
1. switch (action.type 검사할변수가 일치하냐){} 

2.이게 일치하면 case : 밑에 있는 코드를 실행해줍니다.

3. default : 는 그냥 맨 마지막에 쓰는 else문과 동일합니다.
```






> ...얕은 복사, spread 연산자

![](https://velog.velcdn.com/images/yjw0517/post/cba7437d-8850-43ff-8852-01231c6a93f6/image.png)

```jsx
let data1 = [1,2,3];
let data2 = data1;  //복사
data2[0] = 1000;  //data2 내부 변경
console.log(data2 === data1)   //true 나올듯 
```
![](https://velog.velcdn.com/images/yjw0517/post/cf31f042-9cba-4078-8cf7-3ef9ef3ae5a2/image.png)
1. 자바스크립트는 array/object 자료를 하나 만들면
예를 들어서 let arr = [1,2,3] 이렇게 만들면 
[1,2,3] 자료는 램이라는 가상공간에 몰래 저장이 되고
let arr 변수엔 그 자료가 어디있는지 가리키는 화살표만 담겨있습니다.

2.그래서 array/object 자료를 복사하면 이상한 일이 일어나는데  
예를 들면 

```jsx
let data1 = [1,2,3];
let data2 = data1;   //복사문법임 
```
이런 식으로 사용하면 복사가 됩니다.
data1에 있던 자료를 data2에 복사한다는 뜻임 
그럼 data2 출력해보면 [1,2,3] 이게 잘 나옵니다. 
근데 data1과 data2는 각각 [1,2,3]을 별개로 저장하는게 아니라
data1과 data2는 똑같은 값을 공유합니다.
data1을 변경하면 data2도 자동으로 변경되고 그렇습니다. (충격)
왜냐면 변수에는 화살표만 저장된다니까요
그래서 방금 님들 화살표를 복사한 것임 
그래서 data1, data2는 똑같은 화살표를 가지게 됩니다. 같은 자료를 가리킴 

3. 그래서 같은 화살표를 가지고 있는 변수끼리는 
등호로 비교해도 똑같다고 나옵니다. 


> filter 함수

filter() 함수는 주어진 함수의 조건에 맞는 모든 요소를 모아 새로운 배열로 반환하는 함수이다.


```jsx
return {
                ...state,
                list: state.list.filter((todo) => todo.id !== payload.id)
  //list배열에서 todo.id 가 payload.id와 일치하지 않는 원소만 추출해서 새로운 todo배열을 만듬 이게 곧 todo.id =payload.id 인 것을 제거 }
```

> map() 함수

- 파라미터(매개변수)로 전달된 함수를 사용하여 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 새로운 배열 생성 한다.

>  useRef() 리액트 훅  ref=reference(참조)

state가 변화 -> 랜더링 -> 컴포넌트 내부 변수들 초기화 됨
Ref가 변화 -> no 랜더링 -> 변수들의 값이 유지됨
state가 변화 -> 랜더링 -> 그래도 Ref 값들은 유지됨




9. Form 컴퍼넌트에서 title과 body 타이틀에 스테이트 값을 변경 시켜주고
그 값을 추가하기 버튼을 눌렀을때 onsubmitHandler 함수를 통해, createlist에 id, title, body 값에 액션을 dispatch 해서 
리듀서에 전달이 되고, 값이 변형이 되어 스토어에 저장되어 집니다.


10.Todo	컴포넌트에 들어가 보면
삭제하기 버튼 액션이 발생되면 dispatch되어 removelist 함수에 REMOVE 타입값과 아이디 값을 가지고 리듀서에서 변환이 되고 변환된 값이 스토어에 저장되어 집니다.

11. 3항연산자로 이루어진 취소와 완료 버튼은 조건에 맞는 버튼으로 적용 되고, 버튼에 액션이 일어나면 디스패치 되어 updatelist 함수에 UPDATE 타입값과 아이디 값을 가지고 리듀서에서 변환이 되고 변환괸 값이 스토어에 저장되어 집니다.


12.list 컴퍼넌트로 들어가, useSelector을 통해 조회를 하고 스토어에 저장된 state.todo.list 들을 todos로 선언해준 뒤 
맵함수에 조건을 돌려 , todo의 아이디 데이터 값과, todo 데이터 값을 가져옵니다.


