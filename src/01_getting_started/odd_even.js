import cal from './cal';

export default (x, y) => {
  let sum = cal(x, y);
  if((sum % 2) === 0){
    return 'even';
  }
  return 'odd';
}
