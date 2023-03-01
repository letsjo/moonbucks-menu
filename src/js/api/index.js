const BASE_URL = 'http://localhost:3000/api';

const MenuApi = {
  async getAllMenuByCategory(category) {
    const response = await fetch(
      `${BASE_URL}/category/${category}/menu`,
    );
    return response.json();
  },
  async addMenu(category, menuName) {
    const response = await fetch(
      `${BASE_URL}/category/${category}/menu`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: menuName }),
      },
    );
    if (!response.ok) {
      console.error('에러가 발생했습니다.');
    }
  },
  async updateMenu(category, menuName, menuId) {
    const response = await fetch(
      `${BASE_URL}/category/${category}/menu/${menuId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: menuName }),
      },
    );
    if (!response.ok) {
      console.error('에러가 발생했습니다.');
    }
    return response.json();
  },
  async toggleSoleOutMenu(category, menuId) {
    const response = await fetch(
      `${BASE_URL}/category/${category}/menu/${menuId}/soldout`,
      {
        method: 'PUT',
      },
    );
    if (!response.ok) {
      console.error('에러가 발생했습니다.');
    }
  },
  async deleteMenu(category, menuId) {
    const response = await fetch(
      `${BASE_URL}/category/${category}/menu/${menuId}`,
      {
        method: 'DELETE',
      },
    );
    if (!response.ok) {
      console.error('에러가 발생했습니다.');
    }
  },
};

export default MenuApi;
