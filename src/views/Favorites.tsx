import { Movie, MovieResponse } from "$types";
import { API_KEY, cachedFetch, TMDB_URL } from "$utils";
import { FunctionComponent, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MovieCard } from "$components";

export const Favorites: FunctionComponent = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const ids: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");

    Promise.all(
      ids
        .map((id) => `${TMDB_URL}/movie/${id}?api_key=${API_KEY}`)
        .map((url) => {
          return cachedFetch<MovieResponse>(url).then((res) => {
            return {
              ...res,
              overview: res.overview || "",
              genre_ids: res.genres.map((genre) => genre.id),
            };
          });
        })
    ).then((res) => setMovies(res));
  }, []);

  return (
    <>
      <h1 className="text-center mt-4 mb-0">Favorites</h1>;
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4 mb-4 justify-content-center">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Col key={movie.id}>
                <MovieCard
                  title={movie.title}
                  poster={movie.poster_path}
                  releaseDate={movie.release_date}
                  description={movie.overview}
                />
              </Col>
            ))
          ) : (
            <Col>
              <p className="h3 text-center">
                Vous n'avez pas encore de films favoris !
              </p>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};
