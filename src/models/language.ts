export class language {
    lang: string;
    lang_UP: string;
    constructor(_lang: string) {
        this.lang = _lang;
        this.lang_UP = _lang?.toUpperCase()
    }
}