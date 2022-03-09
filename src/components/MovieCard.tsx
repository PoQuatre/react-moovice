import { FunctionComponent } from "react";
import { Card } from "react-bootstrap";

interface Props {
  poster: string | null;
  title: string;
  releaseDate: string;
  description: string;
}

const DEFAULT_POSTER =
  "https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png";

export const MovieCard: FunctionComponent<Props> = ({
  poster,
  title,
  releaseDate,
  description,
}) => {
  return (
    <Card style={{ height: "100%" }}>
      <Card.Img
        variant="top"
        src={
          poster !== null
            ? `https://image.tmdb.org/t/p/w300${poster}`
            : DEFAULT_POSTER
        }
      />
      <div className="p-2">
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{releaseDate}</Card.Subtitle>
        <Card.Text className="mt-2">{description}</Card.Text>
      </div>
    </Card>
  );
};
