import Card from "../Card";
import { render, screen } from "@testing-library/react";

const mockData = {
  adult: false,
  backdrop_path: "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
  genre_ids: [28, 12, 14],
  id: 572802,
  original_language: "en",
  original_title: "Aquaman and the Lost Kingdom",
  overview:
    "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
  popularity: 3988.165,
  poster_path: "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
  release_date: "2023-12-20",
  title: "Aquaman and the Lost Kingdom",
  video: false,
  vote_average: 7.009,
  vote_count: 1186,
};

describe("Card", () => {
  beforeEach(() => {
    render(<Card data={mockData} />);
  });

  it("should render a movie image", () => {
    const img = screen.getByAltText("Aquaman and the Lost Kingdom");

    expect(img).toBeInTheDocument();
  });

  it("should render a movie title", () => {
    const title = screen.getByText("Aquaman and the Lost Kingdom");

    expect(title).toBeInTheDocument();
  });
});
