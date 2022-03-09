import { DiscoverMovieResponse, Movie } from "$types";
import { API_KEY, cachedFetch, TMDB_URL } from "$utils";
import { useEffect } from "react";
import { FunctionComponent, useState } from "react";

const URL = `${TMDB_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

export const Popular: FunctionComponent = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    cachedFetch<DiscoverMovieResponse>(URL).then((res) => {
      setMovies(res.results);
    });
  }, []);

  return <h1 className="text-center my-4">Popular</h1>;
};
