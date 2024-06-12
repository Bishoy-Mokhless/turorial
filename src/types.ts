import { HttpHeaders, HttpContext, HttpParams } from "@angular/common/http";

export interface Options {
    options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'events';
        context?: HttpContext;
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
        transferCache?: {
            includeHeaders?: string[];
        } | boolean;
    }
}