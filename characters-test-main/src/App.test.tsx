import {
  render,
  fireEvent,
  screen,
  cleanup,
  waitFor,
} from "@testing-library/react";
import App from "./App";
import mockCharactersSet1 from "./testing/mock/characters";
import mockCharactersSet2 from "./testing/mock/characters-2";

import { describe, expect, test, afterEach, beforeEach } from "vitest";

describe("<App />", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  describe("initial character loading", () => {
    test('displays the title "Characters"', async () => {
      const headingElement = screen.getByRole("heading");
      expect(headingElement).toBeInTheDocument();
      expect(headingElement).toHaveTextContent("Characters");
    });

    test("renders a list of 10 characters initially", async () => {
      // Implementation for initial characters count check, if needed
      const characters = await screen.findAllByText("name");
      expect(characters.length).toBe(10);
    });
  });

  describe("loading additional characters", () => {
    test('includes a "Load More Characters" button', async () => {
      const loadMoreButton = screen.getByRole("button");
      expect(loadMoreButton).toBeInTheDocument();
      expect(loadMoreButton).toHaveTextContent("Load More Characters");
    });

    test("clicking the button loads 10 more characters", async () => {
      const initialCharacters = await screen.findAllByText("name");
      const loadMoreButton = screen.getByRole("button");

      expect(initialCharacters.length).toBe(10);

      initialCharacters.forEach((character, index) => {
        const parentDiv = character.parentElement;
        expect(parentDiv).toHaveTextContent(
          mockCharactersSet1[index].name || mockCharactersSet1[index].aliases[0]
        );
      });

      fireEvent.click(loadMoreButton);

      await waitFor(() => {
        const additionalCharacters = screen.getAllByText("name");
        expect(additionalCharacters.length).toBe(10);

        additionalCharacters.forEach((character, index) => {
          const parentDiv = character.parentElement;
          expect(parentDiv).toHaveTextContent(
            mockCharactersSet2[index].name || mockCharactersSet2[index].aliases[0]
          );
        });
      });
    });

    test("clicking the button updates the page number", async () => {
      const loadMoreButton = screen.getByRole("button");
      const pageIndicator = screen.getByText("Next Page: 1");
      fireEvent.click(loadMoreButton);
      expect(pageIndicator).toHaveTextContent("Next Page: 2");
    });
  });
});
