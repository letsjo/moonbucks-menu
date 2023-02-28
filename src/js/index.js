const $ = (selector) => document.querySelector(selector);

const store = {
  setLocalStorage(menu) {
    localStorage.setItem('menu', JSON.stringify(menu));
  },
  getLocalStorage() {
    localStorage.getItem('menu');
  }
}

function App() {
  // 상태는 변하는 데이터, 이 앱에서 변하는 것이 무엇인가 - 메뉴명
  this.menu;

  const updateMenuCount = () => {
    const menuCount = $('#espresso-menu-list').querySelectorAll('li').length;
    $('.menu-count').innerText = `총 ${menuCount}개`
  }

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

    updateMenuCount();

    $('#espresso-menu-name').value = '';
  }

  const updateMenuName = (e) => {

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

  const removeMenuName = (e) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      e.target.closest('li').remove();

      updateMenuCount();
    }
  }

  $('#espresso-menu-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-edit-button')) {
      updateMenuName(e);
    }

    if (e.target.classList.contains('menu-remove-button')) {
      removeMenuName(e);
    }
  });

  $('#espresso-menu-form').addEventListener('submit', (e) => {
    e.preventDefault();
  });

  $('#espresso-menu-submit-button').addEventListener('click', addMenuName);

  $('#espresso-menu-name').addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    addMenuName();
  }
  );
}

const a = new App();