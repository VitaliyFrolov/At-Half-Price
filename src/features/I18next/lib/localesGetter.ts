import { HTTP } from "shared/lib/http";

export function localesGetter(lang: string, ns: string) {
    return HTTP.get(`http://localhost:3005/locales-${lang}-${ns}`);
};