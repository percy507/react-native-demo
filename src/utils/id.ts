export function uuid(digits: number) {
  let str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
  let chars: string[] = [];
  for (let i = 0; i < digits; i++) {
    chars.push(str[Math.floor(Math.random() * str.length)]);
  }
  return chars.join('');
}

export const generateErrId = () => uuid(10);
