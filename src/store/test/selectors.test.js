import { getAdvert } from "../selectors";

describe("getAdvert", () => {
  const advertId = "1";
  const adverts = [{ id: advertId }];
  const state = {
    adverts: {
      advertsData: adverts,
    },
  };
  test("Should return an advert", () => {
    expect(getAdvert(advertId)(state)).toBe(adverts[0]);
  });
  test("Should not return any advert", () => {
    expect(getAdvert("2")(state)).toBeUndefined();
  });
});
