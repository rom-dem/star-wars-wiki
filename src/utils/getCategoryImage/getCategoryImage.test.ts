import { apiCategories } from "@/api/apiClient/apiEndpoints";
import getCategoryImage from "./getCategoryImage";

describe("Given the getCategoryImage function", () => {
  describe("When it is called with the category 'people'", () => {
    test("Then it should return 'people'", () => {
      const peopleCategory = apiCategories.people;

      const result = getCategoryImage(peopleCategory);

      expect(result).toBe(peopleCategory);
    });
  });

  describe("When it is called with the category 'planets'", () => {
    test("Then it should return 'planets'", () => {
      const planetsCategory = apiCategories.planets;

      const result = getCategoryImage(planetsCategory);

      expect(result).toBe(planetsCategory);
    });
  });

  describe("When it is called with the category 'films'", () => {
    test("Then it should return 'films'", () => {
      const filmsCategory = apiCategories.films;

      const result = getCategoryImage(filmsCategory);

      expect(result).toBe(filmsCategory);
    });
  });

  describe("When it is called with the category 'species'", () => {
    test("Then it should return 'species'", () => {
      const speciesCategory = apiCategories.species;

      const result = getCategoryImage(speciesCategory);

      expect(result).toBe(speciesCategory);
    });
  });

  describe("When it is called with the category 'starships'", () => {
    test("Then it should return 'starships'", () => {
      const starhipsCategory = apiCategories.starships;

      const result = getCategoryImage(starhipsCategory);

      expect(result).toBe(starhipsCategory);
    });
  });

  describe("When it is called with the category 'vehicles'", () => {
    test("Then it should return 'vehicles'", () => {
      const vehiclesCategory = apiCategories.vehicles;

      const result = getCategoryImage(vehiclesCategory);

      expect(result).toBe(vehiclesCategory);
    });
  });

  describe("When it is called with a not considered category 'thing'", () => {
    test("Then it should return 'default'", () => {
      const nonConsideredCategory = "thing";

      const result = getCategoryImage(nonConsideredCategory);
      const expectedResult = "default";

      expect(result).toBe(expectedResult);
    });
  });
});
