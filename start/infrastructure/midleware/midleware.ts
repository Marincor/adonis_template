import { customMidleware } from "../../routes"
import { midlewareContent } from "./content/content"

export const midlewares: customMidleware = (ctx, next) => {
    midlewareContent(ctx, next);
    
    next()
}

