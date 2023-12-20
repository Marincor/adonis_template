import { customHttpContextContract } from 'start/routes';
import HealthUsecase from '../../usecases/health';
import HealthValidator from './validator'

export class HealthHandler {
    check (ctx: customHttpContextContract) {
        const error = new HealthValidator().validateCheckHealth(false);
        if (error !== null) {
            return {error: "erro"}
        }

        const health = new HealthUsecase().check();
        return health;
    }

}