/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserInfoDto } from "../models/UserInfoDto";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class UserService {
  /**
   * @returns UserInfoDto OK
   * @throws ApiError
   */
  public static getApiUserCurrent(): CancelablePromise<UserInfoDto> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/User/current",
    });
  }
}
