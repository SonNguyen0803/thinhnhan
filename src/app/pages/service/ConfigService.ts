import { environment } from "../../../environments/environment";

declare const window: any;

export class ConfigService {
  public static apiUrl: string = this.getApiUrl();

  public static getApiUrl() {
    let url = environment.API_BASE_URL;
    // if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    //   url = environment.API_BASE_URL;
    // } else {
    //   url = window.__env?.API_BASE_URL || environment.API_BASE_URL;
    // }
    return url;
  }
}