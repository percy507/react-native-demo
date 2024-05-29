export const h5_pages = {
  user_protocol: () => ({ title: '用户协议', url: '/h5/legal/userProtocol' }),
  privacy_policy: () => ({ title: '隐私政策', url: '/h5/legal/privacyPolicy' }),
  user_info: (id) => ({ title: '用户信息', url: `/h5/user/detail/${id}` }),
  news_list: () => ({ title: '新闻公告', url: '/h5/news' }),
  news_detail: (id: string) => ({ title: '新闻详情', url: `/h5/news/detail/${id}` }),
};
