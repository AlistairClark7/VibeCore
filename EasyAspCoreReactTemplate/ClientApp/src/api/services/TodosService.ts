/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TodoItem } from "../models/TodoItem";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class TodosService {
  /**
   * @returns TodoItem OK
   * @throws ApiError
   */
  public static getApiTodos(): CancelablePromise<Array<TodoItem>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Todos",
    });
  }
  /**
   * @returns TodoItem OK
   * @throws ApiError
   */
  public static postApiTodos({
    requestBody,
  }: {
    requestBody?: TodoItem;
  }): CancelablePromise<TodoItem> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Todos",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns TodoItem OK
   * @throws ApiError
   */
  public static getApiTodos1({
    id,
  }: {
    id: number;
  }): CancelablePromise<TodoItem> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Todos/{id}",
      path: {
        id: id,
      },
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static putApiTodos({
    id,
    requestBody,
  }: {
    id: number;
    requestBody?: TodoItem;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/Todos/{id}",
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static deleteApiTodos({ id }: { id: number }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/Todos/{id}",
      path: {
        id: id,
      },
    });
  }
  /**
   * @returns any OK
   * @throws ApiError
   */
  public static patchApiTodosComplete({
    id,
  }: {
    id: number;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/api/Todos/{id}/complete",
      path: {
        id: id,
      },
    });
  }
}
