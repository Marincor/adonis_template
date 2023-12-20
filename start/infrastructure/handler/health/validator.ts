export default class HealthValidator {
    validateCheckHealth(checkErrorHandler: boolean): String | null {
        if (checkErrorHandler) {
            return "mocked error";
        }

        return null;
    }
}