import { rest } from "msw";
import { apiCategories, apiUrl } from "@/api/apiClient/apiEndpoints";
import { mockPeopleItems } from "./itemsMocks";

export const handlers = [
  rest.get(`${apiUrl}${apiCategories.people}`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockPeopleItems)),
  ),
];
