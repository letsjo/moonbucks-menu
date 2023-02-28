// ### ⬜ TODO 메뉴 추가

// - [x] 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
// - [x] 추가되는 메뉴의 아래 마크업은
//       `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 안에 삽입
//       해야 한다.
// - [x] 총 메뉴 갯수를 count하여 상단에 보여준다.
// - [x] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
// - [x] 사용자 입력값이 빈 값이라면 추가되지 않는다.
// - [ ] 메뉴의 이름을 입력 받고 확인 버튼을 클릭하면 메뉴를 추가한다.

const $ = (selector) => document.querySelector(selector);

function App() {
  // form태그가 자동으로 전송되는 것을 막아준다
  $('#espresso-menu-form').addEventListener('submit', (e) => {
    e.preventDefault();
  })

  // 메뉴의 이름을 입력 받는건
  $('#espresso-menu-name').addEventListener('keypress', (e) => {
    // 엔터키를 누르지 않으면 return 해준다.
    if (e.key !== 'Enter') {
      return;
    }
    // 엔터키를 누르면, 입력값을 받아온다.
    if ($('#espresso-menu-name').value === '') {
      alert('값을 입력해주세요');
      return;
    }
    const espressoMenuName = $('#espresso-menu-name').value;
    const menuItemTemplate = (espressoMenuName) => {
      return `<li class='menu-list-item d-flex items-center py-2'>
                <span class='w-100 pl-2 menu-name'>${espressoMenuName}</span>
                <button
                  type='button'
                  class='bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button'
                >
                  수정
                </button>
                <button
                  type='button'
                  class='bg-gray-50 text-gray-500 text-sm menu-remove-button'
                >
                  삭제
                </button>
              </li>`
    }
    $('#espresso-menu-list').insertAdjacentHTML(
      'beforeend',
      menuItemTemplate(espressoMenuName)
    );

    //const 변수 = li 갯수를 카운팅
    const menuCount = $('#espresso-menu-list').querySelectorAll('li').length;
    $('.menu-count').innerText = `총 ${menuCount}개`

    // 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
    $('#espresso-menu-name').value = '';
  }
  );
}

App();