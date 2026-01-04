const API_BASE_URL = 'https://panda-market-api.vercel.app';

export const getProducts = async ({ page, pageSize, orderBy } = {}) => {
  const params = new URLSearchParams();

  if (page) params.append('page', page);
  if (pageSize) params.append('pageSize', pageSize);
  if (orderBy) params.append('orderBy', orderBy);

  const response = await fetch(`${API_BASE_URL}/products?${params.toString()}`);

  if (!response.ok) {
    throw new Error('데이터를 불러오는 데 실패했습니다.');
  }

  const json = await response.json();

  return {
    products: json.list,
    totalCount: json.totalCount,
  };
};
