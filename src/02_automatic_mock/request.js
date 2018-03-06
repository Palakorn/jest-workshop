const users = {
  1: 'Cherprang',
  2: 'Orn',
  3: 'Pun'
};

export default {
  getUserName: (memberId) => {
    return users[memberId] ? users[memberId]: 'Unknown';
  }
}
