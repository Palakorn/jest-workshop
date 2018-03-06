import $ from 'jquery';
jest.mock('../../05_jquery/fetchUser');
import fetchUser from '../../05_jquery/fetchUser';
import initFn from '../../05_jquery/displayUserInfo';

// Tell the fetchUser mock function to automatically invoke
fetchUser.default = jest.fn();

afterEach(() => {
  //fetchUser.mockReset();
});

it('displays a user after a click', () => {
  // Set up our document body
  document.body.innerHTML =
    '<div>' +
    '  <span id="username" />' +
    '  <button id="button" />' +
    '</div>';

  fetchUser.mockImplementation(cb => {
    cb({
      fullName: 'Pun',
      loggedIn: true,
    });
  });

  // Use jquery to emulate a click on our button
  initFn();
  $("#button").trigger('click');

  // Assert that the fetchUser function was called, and that the
  // #username span's inner text was updated as we'd expect it to.
  expect(fetchUser).toBeCalled();
  expect($('#username').text()).toEqual('Pun - Logged In');
});

it('displays hover txt after hover', () => {
  // Set up our document body
  document.body.innerHTML =
    '<div>' +
    '  <span id="username" />' +
    '  <button id="button" />' +
    '</div>';

  // Use jquery to emulate a click on our button
  initFn();
  $("#button").trigger('mouseenter');
  // Assert that the fetchUser function was called, and that the
  // #username span's inner text was updated as we'd expect it to.
  expect(fetchUser).toBeCalled();
  expect($('#username').text()).toEqual('Hover Pun');
});