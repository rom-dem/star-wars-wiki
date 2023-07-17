import { apiCategories } from "@/api/apiClient/apiEndpoints";

const getCategoryImage = (category: string) => {
  switch (category) {
    case apiCategories.people:
      return apiCategories.people;
    case apiCategories.planets:
      return apiCategories.planets;
    case apiCategories.films:
      return apiCategories.films;
    case apiCategories.species:
      return apiCategories.species;
    case apiCategories.starships:
      return apiCategories.starships;
    case apiCategories.vehicles:
      return apiCategories.vehicles;
    default:
      return "default";
  }
};

export default getCategoryImage;
