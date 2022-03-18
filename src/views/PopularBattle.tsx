import { DiscoverMovieResponse, Movie } from "$types";
import { API_KEY, cachedFetch, TMDB_URL } from "$utils";
import { useEffect } from "react";
import { FunctionComponent, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MovieCard } from "$components";

const URL = `${TMDB_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

export const PopularBattle: FunctionComponent = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentBattle, setCurrentBattle] = useState(0);
  const [currentMovies, setCurrentMovies] = useState<Movie[]>([]);

  useEffect(() => {
    cachedFetch<DiscoverMovieResponse>(URL).then((res) => {
      setMovies(res.results);
    });
  }, []);

  useEffect(() => {
    if (currentBattle * 2 > movies.length - 2) {
      setCurrentMovies([]);
    } else {
      setCurrentMovies([
        movies[currentBattle * 2],
        movies[currentBattle * 2 + 1],
      ]);
    }
  }, [currentBattle, movies]);

  const chooseMovie = (id: number) => {
    setCurrentBattle((i) => i + 1);
    const favorites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    if (!favorites.includes(id)) favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <>
      <h1 className="text-center mt-4 mb-0">Popular Battle</h1>;
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4 mb-4 justify-content-center">
          {currentMovies.length > 0 ? (
            currentMovies.map((movie) => (
              <Col key={movie.id}>
                <MovieCard
                  title={movie.title}
                  poster={movie.poster_path}
                  releaseDate={movie.release_date}
                  description={movie.overview}
                  onClick={() => chooseMovie(movie.id)}
                />
              </Col>
            ))
          ) : (
            <Col>
              <p className="h3 text-center">
                Vous avez parcouru tout les films !
              </p>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};
