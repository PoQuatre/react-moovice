import { DiscoverMovieResponse, Movie } from "$types";
import { API_KEY, cachedFetch, TMDB_URL } from "$utils";
import { useEffect } from "react";
import { FunctionComponent, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MovieCard } from "$components";

const URL = `${TMDB_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

export const Popular: FunctionComponent = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    cachedFetch<DiscoverMovieResponse>(URL).then((res) => {
      setMovies(res.results);
    });
  }, []);

  return (
    <>
      <h1 className="text-center mt-4 mb-0">Popular</h1>
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4 mb-4 justify-content-center">
          {movies.map((movie) => (
            <Col key={movie.id}>
              <MovieCard
                title={movie.title}
                poster={movie.poster_path}
                releaseDate={movie.release_date}
                description={movie.overview}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
