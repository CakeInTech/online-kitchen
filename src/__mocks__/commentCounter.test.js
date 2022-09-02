import { counter1 } from './commentCounter.js';

test('Shows the number of comments', async () => {
  const API_FETCH = [{ username: 'jane', comment: 'comment' }, { username: 'imer', comment: 'comment' }, { username: 'Cake', comment: 'comment' }, { username: 'Suzana', comment: 'comment' }, { username: 'Tinaye', comment: 'comment' }, { username: 'Andrea', comment: 'comment' }];
  const length = await counter1(API_FETCH);
  expect(length).toEqual(6);
});
