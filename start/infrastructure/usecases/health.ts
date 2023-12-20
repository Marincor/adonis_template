import { Health } from "../../models/health";
import { HealthRepository } from "../repository/health";

export default class HealthUsecase {
    check(): Health {
        return new HealthRepository().check();
    }
}