import request from '@/utils/request';

export function requestGetQuote() {
  return new Promise<any>((resolve, reject) => {
    // 模拟弱网环境
    setTimeout(() => {
      request.get('/api/ian?type=json').then(resolve).catch(reject);
    }, Math.ceil(Math.random() * 3000 + 1000));
  });
}

export function request404() {
  return request.get('/api/ian22222?type=json');
}
