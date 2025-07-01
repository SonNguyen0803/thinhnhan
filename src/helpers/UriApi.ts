import { ConfigService } from "../app/pages/service/ConfigService";
import { Constants } from "./constants";

export class UriApi {
    public static api_validToken: string = `${ConfigService.apiUrl}/${Constants.Auth}/${Constants.ValidToken}`;
}