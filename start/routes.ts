import Route from '@ioc:Adonis/Core/Route'
import handlers from './infrastructure/handler/routeHandlers'
import { RouteMiddlewareHandler } from '@ioc:Adonis/Core/Route';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import {midlewares} from './infrastructure/midleware/midleware'

export type customMidleware =  RouteMiddlewareHandler;
export type customHttpContextContract = HttpContextContract;

function main() {
  // V1 GROUP
  Route.group(() => {
    Route.get('health', handlers.healthHandler.check);
  }).prefix("/api/v1").middleware(midlewares);
}

main();
