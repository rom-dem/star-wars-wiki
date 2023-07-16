import "@testing-library/jest-dom";
import {server} from "./src/mocks/server"
import { handlers } from "./src/mocks/handlers";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers(...handlers));

afterAll(() => server.close());
