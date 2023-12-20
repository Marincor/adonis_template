import { HealthHandler } from "./health/health";

class RouteHandlers {
    public readonly healthHandler = new HealthHandler();
}

const handlers = new RouteHandlers();

export default handlers;