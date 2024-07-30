import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Character from "./Character";

describe("<Character />", () => {
  const characterMock = {
    url: "https://www.anapioficeandfire.com/api/characters/1",
    name: "",
    gender: "Female",
    culture: "Braavosi",
    born: "",
    died: "",
    titles: [""],
    aliases: ["The Daughter of the Dusk"],
    father: "",
    mother: "",
    spouse: "",
    allegiances: [],
    books: ["https://www.anapioficeandfire.com/api/books/5"],
    povBooks: [],
    tvSeries: [""],
    portrayedBy: [""],
    playedBy: [""],
  };

  beforeEach(() => {
    render(<Character character={characterMock} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('displays fields for "name" and "culture"', async () => {
    const strongElements = screen.getAllByRole("strong");
    expect(strongElements[0]).toHaveTextContent("name");
    expect(strongElements[1]).toHaveTextContent("culture");
  });

  it("displays culture when available", async () => {
    const cultureElement = screen.getByText("culture");
    const cultureContainer = cultureElement.parentElement;
    expect(cultureContainer).toHaveTextContent(characterMock.culture);
  });

  it("displays alias when name is not provided", async () => {
    const nameElement = screen.getByText("name").parentElement;
    if (characterMock.name === "") {
      expect(nameElement).toHaveTextContent(characterMock.aliases[0]);
    } else {
      expect(nameElement).toHaveTextContent(characterMock.name);
    }
  });

  it("displays the number of books the character appears in", async () => {
    const bookCountElement = screen.getByText("Number of Books:").parentElement;
    expect(bookCountElement).toHaveTextContent(characterMock.books.length.toString());
  });
});
