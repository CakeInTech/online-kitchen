import {counter} from './counter.js';

test('Shows the reservation number', async () => {
  const API_FETCH = [{date_end: '2021-01-20', username: 'jane', date_start: '2021-01-10'},{username: 'imer', date_end: '2021-01-10', date_start: '2020-10-15'}, {username: 'Cake', date_end: '2023-09-23', date_start: '2022-08-01'}, {username: 'Suzana', date_end: '2023-09-23', date_start: '2022-08-01'},{username: 'Tinaye', date_end: '2023-09-20', date_start: '2022-10-01'}, {username: 'Andrea', date_end: '2025-09-23', date_start: '2025-08-02'}];
  const len= await counter(CURRENT_API_FETCH);
  expect(len).toEqual(6);
});
