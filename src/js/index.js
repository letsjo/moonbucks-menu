// ### ⬜ TODO 메뉴 수정

// - [x] 메뉴의 수정 버튼을 눌러 메뉴 이름 수정할 수 있다.
// - [ ] 메뉴 수정시 브라우저에서 제공하는 `prompt` 인터페이스를 활용한다
//       .
// - [ ] 메뉴 수정시 빈 값이라면 수정되지 않는다.
// - [ ] 메뉴 수정시 취소 버튼을 누르면 수정되지 않는다.

const $ = (selector) => document.querySelector(selector);

function App() {
  $('#espresso-menu-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-edit-button')) {
      console.log(e.target);
    }
  })

  $('#espresso-menu-form').addEventListener('submit', (e) => {
    e.preventDefault();
  })

  const addMenuName = () => {
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

    const menuCount = $('#espresso-menu-list').querySelectorAll('li').length;
    $('.menu-count').innerText = `총 ${menuCount}개`
    $('#espresso-menu-name').value = '';
  }

  $('#espresso-menu-submit-button').addEventListener('click', () => {
    addMenuName();
  })

  $('#espresso-menu-name').addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    addMenuName();
  }
  );
}

App();