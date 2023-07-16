import { rest } from "msw";
import { apiEndpoints, apiUrl } from "@/api/apiClient/apiEndpoints";
import { mockPeopleItems } from "./itemsMocks";

export const handlers = [
  rest.get(`${apiUrl}${apiEndpoints.people}`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockPeopleItems)),
  ),
];
