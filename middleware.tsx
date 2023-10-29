import {NextRequest} from "next/server";

export function middleware(req: NextRequest) {
    console.log("MIDDLEWARE RUNNING");
    /* Here I have configuration that i only need for dev environment */
    return undefined;
}