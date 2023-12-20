import { Health } from "../../models/health";

export class HealthRepository {

    check(): Health  {
        let health = {"sync": new Date().toISOString()} satisfies Health;
        return health;
    }
}