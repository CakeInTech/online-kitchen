const url="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi//apps/abc234/reservations?item_id=item1";

export const getSc = async () => {
  const data = await fetch(
    url,
  );
  const res = await data.json();
  return res;
};

const result= getSc();
console.log("result");
