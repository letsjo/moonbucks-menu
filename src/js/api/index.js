const BASE_URL = 'http://localhost:3000/api';

const HTTP_METHOD = {
  POST(data) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  },
  PUT(data) {
    return {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data && JSON.stringify(data),
    };
  },
  DELETE() {
    return {
      method: 'DELETE',
    };
  },
};

const requestWithoutJson = async (
  url,
  option,
) => {
  const response = await fetch(url, option);
  if (!response.ok) {
    alert('에러가 발생했습니다.');
    console.error(response);
  }
  return response;
};

const request = async (url, option) => {
  const response = await fetch(url, option);
  if (!response.ok) {
    alert('에러가 발생했습니다.');
    console.error(response);
  }
  return response.json();
};

const MenuApi = {
  async getAllMenuByCategory(category) {
    return request(
      `${BASE_URL}/category/${category}/menu`,
    );
  },
  async addMenu(category, menuName) {
    return request(
      `${BASE_URL}/category/${category}/menu`,
      HTTP_METHOD.POST({ name: menuName }),
    );
  },
  async updateMenu(category, menuName, menuId) {
    return request(
      `${BASE_URL}/category/${category}/menu/${menuId}`,
      HTTP_METHOD.PUT({ name: menuName }),
    );
  },
  async toggleSoleOutMenu(category, menuId) {
    return request(
      `${BASE_URL}/category/${category}/menu/${menuId}/soldout`,
      HTTP_METHOD.PUT(),
    );
  },
  async deleteMenu(category, menuId) {
    return requestWithoutJson(
      `${BASE_URL}/category/${category}/menu/${menuId}`,
      HTTP_METHOD.DELETE(),
    );
  },
};

export default MenuApi;
