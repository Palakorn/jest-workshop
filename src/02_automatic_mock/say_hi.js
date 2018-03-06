import request from './request';

export default (memberId) => {
  let name = request.getUserName(memberId);

  return `Say Hi to ${name}`;
}
