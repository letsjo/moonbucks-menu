<br/>
<p align="middle">
  <img width="200px;" src="./src/images/moonbucks.png"/>
</p>
<h2 align="middle">JS 문벅스 카페메뉴 앱</h2>
<p align="middle">Vanilla JS로 구현 하는 상태관리가 가능한 카페메뉴 앱</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <a href="https://github.com/blackcoffee-study/js-lv1-book-manual/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/github/license/blackcoffee-study/moonbucks-menu.svg?style=flat-square&label=license&color=08CE5D"/>
  </a>
</p>

<br/>

## ☕ [MOONBUCKS 문제](./docs/)

---

## **🎯 step1 요구사항 구현을 위한 전략**

### ✅ TODO 메뉴 추가

- [x] 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
- [x] 메뉴의 이름을 입력 받고 확인 버튼을 클릭하면 메뉴를 추가한다.
- [x] 추가되는 메뉴의 아래 마크업은
      `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 
      안에 삽입해야 한다.
- [x] 총 메뉴 갯수를 count하여 상단에 보여준다.
- [x] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
- [x] 사용자 입력값이 빈 값이라면 추가되지 않는다.

### ✅ TODO 메뉴 수정

- [x] 메뉴의 수정 버튼을 눌러 메뉴 이름 수정할 수 있다.
- [x] 메뉴 수정시 브라우저에서 제공하는 `prompt` 인터페이스를 활용한다.
- [x] 메뉴 수정시 빈 값이라면 수정되지 않는다.
- [x] 메뉴 수정시 취소 버튼을 누르면 수정되지 않는다.

### ✅ TODO 메뉴 삭제

- [x] 메뉴 삭제 버튼을 이용하여 메뉴 삭제할 수 있다.
- [x] 메뉴 삭제시 브라우저에서 제공하는 `confirm` 인터페이스를 활용한
      다.
- [x] 총 메뉴 갯수를 count하여 상단에 보여준다.

## ✒️ Step 1 회고

- 리펙터링 처리하는 방법을 배울 수 있었습니다.
  - 역할이 비슷한 함수들 끼리 묶어 놓기
  - 메서드 `remove` 와 같은 것을 쓰면 `delete` 동사를 쓰지말고
    `remove`로 통일시켜라.
  - 사용하지 않는 props 들은 정리해 놓아라.
  - 리펙터링 할 때마다 정상 작동하는지 테스트를 해야한다.
- 이벤트를 위임할 수 있다.
- 요구 전략을 꼼꼼하게 잘 짜야 실수도 하지 않고, 시간을 줄일 수 있다.
- DOM 요소를 가져올때는 `$`를 사용하여 변수처럼 사용할 수 있다.
- 알게된 새로운 메서드
  - innerText: 내부 태그의 text 값을 가져온다.
  - closest: 가까운 태그로 이동
  - insertAdjacentHTML: 코드 내부에 삽입한다.
    ```js
      document
        .querySelector(selector)
        .insertAdjacentHTML(option, 삽입할 HTML);
      <!-- beforebegin -->
      <p>
      <!-- afterbegin -->
      foo
      <!-- beforeend -->
      </p>
      <!-- afterend -->
    ```

---

## **🎯 step2 요구사항 - 상태 관리로 메뉴 관리하기**

### ✅ TODO 데이터 Read & Write

- [x] localStorage에 데이터를 저장한다.
  - [x] 메뉴를 추가할 때 저장
  - [x] 메뉴를 수정할 때 저장
  - [x] 메뉴를 삭제할 때 저장
- [x] localStorage의 데이터를 읽어온다.

### ✅ TODO 카테고리별 메뉴판 관리

- [x] 카테고리별 메뉴판 관리
  - 에스프레소
  - 프라푸치노
  - 블렌디드
  - 티바나
  - 디저트

### ✅ TODO 페이지 접근시 최초 데이터 Read & Rendering

- [x] 페이지에 최초로 로딩될 때, localStorage 에스프레소 메뉴를 읽어온다.
- [x] 에스프레소 메뉴를 페이지에 그려준다.

### ✅ 품절 상태 관리

- [x] 품절 버튼을 추가한다.
- [x] 품절 버튼을 클릭하면, localStorage에 상태값이 저장된다.
- [x] 클릭 이벤트에서 class속성 값에 sold-out을 추가한다.

## ✒️ Step 2 회고

- `this`를 사용해서 상태 값을 저장 및 관리 하는 방법을 배울 수 있었습니다.
- `init` 메서드를 만들어 class의 생성자 역할을 할 수 있는 점을 배울 수 있었습니다.
- Vanilla JS에서도 각 함수들을 모듈화 하여, import 해서 사용할 수 있다는 점을 알 수 있었습니다.
- `new` 를 사용하여, 각 카테고리 별 App을 만들어서 메뉴를 관리 해볼 수 있지 않을까 생각했습니다.

---

## 🎯 step3 요구사항 - 서버와의 통신을 통해 메뉴 관리하기

### ✅ TODO 웹 서버 요청하기

- [x] 서버에 새로운 메뉴가 추가 될 수 있도록 요청한다.
- [x] 카테고리별 메뉴 리스트를 불러온다.
- [x] 서버에 수정된 메뉴명으로 변경될 수 있도록 요청한다.
- [x] 서버에 메뉴가 품절 처리될 수 있도록 요청한다.
- [x] 서버에 메뉴가 삭제될 수 있도록 요청한다.

### ⬜ TODO 리펙터링 하기

- [ ] localStorage에 저장하는 로직은 지운다.
- [x] fetch 비동기 api를 사용하는 부분을 async await을 사용하여 구현한다. 

### ⬜ TODO 사용자 경험

- [ ] API 통신이 실패하는 경우 alert으로 피드백 해준다.
- [ ] 중복되는 메뉴는 추가 할 수 없다.
