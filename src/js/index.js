const $ = (selector) => document.querySelector(selector);

const store = {
  setLocalStorage(menu) {
    localStorage.setItem('menu', JSON.stringify(menu));
  },
  getLocalStorage() {
    return JSON.parse(localStorage.getItem('menu'));
  }
}

function App() {
  // 상태는 변하는 데이터, 이 앱에서 변하는 것이 무엇인가 - 메뉴명
  this.menu = {
    espresso: [],
    frappuccino: [],
    blended: [],
    teavana: [],
    desert: []
  };

  this.currentCategory = 'espresso';

  this.init = () => {
    if (store.getLocalStorage()) {
      this.menu = store.getLocalStorage();
    }
    render();
  };

  const render = () => {
    const template = this.menu[this.currentCategory]
      .map((menuItem, index) => {
        return `<li data-menu-id="${index}" class='menu-list-item d-flex items-center py-2'>
                <span class='w-100 pl-2 menu-name'>${menuItem.name}</span>
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
      }).join('');

    $('#espresso-menu-list').innerHTML = template;

    updateMenuCount();
  }

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
    this.menu[this.currentCategory].push({ name: espressoMenuName });
    store.setLocalStorage(this.menu);
    render();

    $('#espresso-menu-name').value = '';
  }

  const updateMenuName = (e) => {
    const menuId = e.target.closest('li').dataset.menuId;
    const $menuName = e.target.closest('li').querySelector('.menu-name');

    const updatedMenuName = prompt(
      '메뉴명을 수정하세요',
      $menuName.innerText
    );

    this.menu[this.currentCategory][menuId].name = updatedMenuName;
    store.setLocalStorage(this.menu);

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
      const menuId = e.target.closest('li').dataset.menuId;
      this.menu[this.currentCategory].splice(menuId, 1);
      store.setLocalStorage(this.menu);
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

  $('nav').addEventListener('click', (e) => {
    const isCategoryButton = e.target.classList.contains('cafe-category-name');
    if (isCategoryButton) {
      const categoryName = e.target.dataset.categoryName;
      console.log(categoryName);
    }
  });
}

const app = new App();
app.init();