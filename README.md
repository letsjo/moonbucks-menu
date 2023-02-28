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

## 🎯 step1 요구사항 구현을 위한 전략

### ✅ TODO 메뉴 추가

- [x] 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
- [x] 메뉴의 이름을 입력 받고 확인 버튼을 클릭하면 메뉴를 추가한다.
- [x] 추가되는 메뉴의 아래 마크업은
      `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 안에 삽입
      해야 한다.
- [x] 총 메뉴 갯수를 count하여 상단에 보여준다.
- [x] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
- [x] 사용자 입력값이 빈 값이라면 추가되지 않는다.

### ✅ TODO 메뉴 수정

- [x] 메뉴의 수정 버튼을 눌러 메뉴 이름 수정할 수 있다.
- [x] 메뉴 수정시 브라우저에서 제공하는 `prompt` 인터페이스를 활용한다
      .
- [x] 메뉴 수정시 빈 값이라면 수정되지 않는다.
- [x] 메뉴 수정시 취소 버튼을 누르면 수정되지 않는다.

### ⬜ TODO 메뉴 삭제

- [ ] 메뉴 삭제 버튼을 이용하여 메뉴 삭제할 수 있다.
- [ ] 메뉴 삭제시 브라우저에서 제공하는 `confirm` 인터페이스를 활용한
      다.
