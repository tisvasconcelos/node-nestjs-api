import { NestMiddleware, Injectable } from "@nestjs/common";

@Injectable()
export class VersionMiddleware implements NestMiddleware {

    use(req: any, res: any, next: () => void) {
        // res.setHeader('X-Force-Update', true);
        next();
    }
   
}