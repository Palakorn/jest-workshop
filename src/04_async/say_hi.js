import request from './requestAsync';

export default (userId) => {
  return request.getUserName(userId);
}
