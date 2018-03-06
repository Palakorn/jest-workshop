import $ from 'jquery';
import fetchUser from './fetchUser.js';

const initFn = function () {
  let btnSelector = '#button';

  $(btnSelector).click(() => {
    console.log('trigger click');
    fetchUser(user => {
      const loggedText = 'Logged ' + (user.loggedIn ? 'In' : 'Out');
      $('#username').text(user.fullName + ' - ' + loggedText);
    });
  });

  $(btnSelector).hover(() => {
    console.log('trigger hover');
    fetchUser(user => {
      $('#username').text('Hover '+ user.fullName);
    });
  });
};

export default initFn;
