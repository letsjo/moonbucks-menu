// ### ⬜ TODO 메뉴 삭제

// - [x] 메뉴 삭제 버튼을 이용하여 메뉴 삭제할 수 있다.
// - [x] 메뉴 삭제시 브라우저에서 제공하는 `confirm` 인터페이스를 활용한
//       다.
// - [ ] 총 메뉴 갯수를 count하여 상단에 보여준다.

const $ = (selector) => document.querySelector(selector);

function App() {
  $('#espresso-menu-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-edit-button')) {
      const $menuName = e.target.closest('li').querySelector('.menu-name');
      const updatedMenuName = prompt(
        '메뉴명을 수정하세요',
        $menuName.innerText
      );
      if (updatedMenuName === null) {
        return;
      }
      if (updatedMenuName === '') {
        alert('값을 입력해주세요');
        return;
      }
      $menuName.innerText = updatedMenuName;
    }

    if (e.target.classList.contains('menu-remove-button')) {
      if (confirm('정말 삭제하시겠습니까?')) {
        e.target.closest('li').remove();
      }
    }
  });

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