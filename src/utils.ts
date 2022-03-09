const cache: { [key: string]: any } = {};

export const cachedFetch = <T>(
  input: RequestInfo,
  init?: RequestInit,
  force: boolean = false
): Promise<T> => {
  if (!force && cache[input.toString()] !== undefined) {
    return Promise.resolve(cache[input.toString()]);
  } else {
    return fetch(input, init).then(
      (res) => (cache[input.toString()] = res.json())
    );
  }
};

export const TMDB_URL = "https://api.themoviedb.org/3";
export const API_KEY = process.env.REACT_APP_API_KEY;
