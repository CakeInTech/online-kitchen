import { convert } from "./displayItemsCounter";
const CURRENT_API_FETCH = [{"likes":6,"item_id":"52853"},{"item_id":"52953","likes":8},{"item_id":"52772","likes":7},{"item_id":"52813","likes":6},{"likes":2,"item_id":"52765"},{"likes":25,"item_id":"52870"}];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(CURRENT_API_FETCH),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it("Finds the target length", async () => {
  const rate = await convert();

  expect(rate).toEqual(CURRENT_API_FETCH.length);
  expect(fetch).toHaveBeenCalledTimes(1);
});