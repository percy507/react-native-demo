// import request from '@/utils/request';

export function requestSendSMSCode(phone) {
  console.log('获取验证码', phone);
  return new Promise<void>((r) => setTimeout(r, 1200));
}

export function requestSMSLogin(params) {
  console.log('login params', params);
  return new Promise<any>((r) => setTimeout(() => r({ data: 'tokennnnnnnnnn' }), 1200));
}

export function requestLogout() {
  return new Promise<void>((r) => setTimeout(r, 1200));
}
