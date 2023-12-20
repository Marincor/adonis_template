import {customHttpContextContract} from '../../../routes';
import {constants} from '../../../config/constants/constants'

export function midlewareContent ({request, response}: customHttpContextContract, next) {
    const contentType = request.header('Content-Type') ?? '';

    if (!contentType) {
        return response.badRequest({'Error': 'content-type is missing'})
    }

    if (!(constants.allowedContentTypes as unknown as string[]).includes(contentType)) {
        return response.badRequest({'Error': 'content type not allowed'})
    }
    next();
}