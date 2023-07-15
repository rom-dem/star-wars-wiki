import { rest } from "msw";
import { apiEndpoints, apiUrl } from "@/api/apiClient/apiEndpoints";
import { mockItems } from "./itemsMocks";

export const handlers = [
  rest.get(`${apiUrl}${apiEndpoints.people}`, async (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockItems)),
  ),
];

export const errorHandlers = [
  rest.get(`${apiUrl}${apiEndpoints.people}`, async (_req, res, ctx) =>
    res(ctx.status(500)),
  ),
];
