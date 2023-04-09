import {
  AxiosInstance,
  AxiosResponse,
} from "./../../node_modules/axios/index.d";
import axios from "axios";
import config from "../utils/config";

class Api {
  #abortController: AbortController;
  #api: AxiosInstance;

  constructor() {
    const { BASE_URL } = config;
    this.#abortController = new AbortController();

    this.#api = axios.create({
      withCredentials: true,
      baseURL: BASE_URL,
    });
  }

  #onError(err: Error, callback?: (err: Error) => void) {
    if (callback) callback(err);

    return err;
  }

  #onComplete<R>(res: AxiosResponse<R>, callback?: (data: R) => void) {
    if (callback) callback(res.data);

    return res;
  }

  parseApiFilter(filter?: ApiFilter) {
    let filterParams: string | null = null;

    if (filter) {
      filterParams = "?";
      Object.entries(filter).map(
        (fEntry) => (filterParams += `${fEntry[0]}=${fEntry[1]}`)
      );
    }

    return filterParams;
  }

  async create<T, R>({
    path,
    body,
    onComplete,
    onError,
  }: ApiCreatePropperties<T, R>): ApiResponse<R> {
    try {
      const res = await this.#api.post(path, body);
      return this.#onComplete(res, onComplete);
    } catch (err) {
      return this.#onError(err as Error, onError);
    }
  }

  async read<R>({
    path,
    onComplete,
    onError,
  }: ApiPropperties<R>): ApiResponse<R> {
    try {
      const res = await this.#api.get<R>(path, {
        signal: this.#abortController.signal,
      });
      return this.#onComplete(res, onComplete);
    } catch (err) {
      return this.#onError(err as Error, onError);
    }
  }

  async cancelRequests() {
    if (this.#abortController) this.#abortController.abort();
    this.#abortController = new AbortController();
  }
}

export interface ApiCreatePropperties<T, R>
  extends Omit<ApiPropperties<R>, "filter"> {
  body: T;
}

export interface ApiPropperties<T> extends ApiResultCallbacks<T> {
  path: string;
  filter?: ApiFilter;
}

export interface ApiResultCallbacks<T> {
  onComplete?: ApiCompleteCallback<T>;
  onError?: ApiErrorCallback;
}

export type ApiCompleteCallback<T> = (res: T) => void;
export type ApiErrorCallback = (err: Error) => void;

export type ApiResponse<T> = Promise<AxiosResponse<T> | Error>;

export type ApiWithoutPath<T> = Omit<T, "path">;

type ApiFilter = { [key: string]: string | number };

export { Api };
