// ### ⬜ TODO 메뉴 추가

// - [x] 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
// - [ ] 메뉴의 이름을 입력 받고 확인 버튼을 클릭하면 메뉴를 추가한다.
// - [ ] 메뉴의 이름 입력값이 빈 값이라면 추가되지 않는다.
// - [ ] 추가되는 메뉴의 아래 마크업은
//       `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 안에 삽입
//       해야 한다.
// - [ ] 총 메뉴 갯수를 count하여 상단에 보여준다.
// - [ ] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
// - [ ] 사용자 입력값이 빈 값이라면 추가되지 않는다.

const $ = (selector) => document.querySelector(selector);

function App() {
  // form태그가 자동으로 전송되는 것을 막아준다
  $('#espresso-menu-form').addEventListener('submit', (e) => {
    e.preventDefault();
  })

  // 메뉴의 이름을 입력 받는건
  $('#espresso-menu-name').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      console.log(document.querySelector('#espresso-menu-name').value);
    }
  });
}

App();