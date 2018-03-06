const request = jest.genMockFromModule('../requestAsync');

const users = {
  1: 'Cherprang',
  2: 'Orn',
  3: 'Pun'
};

request.getUserName =  (memberId) => {
  return new Promise((resolve, reject) => {
    users[memberId]
      ? resolve(users[memberId])
      : reject(`User with ${memberId} not found.`)
  });
};

export default request
