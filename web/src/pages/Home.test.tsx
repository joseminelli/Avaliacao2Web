import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Página Home", () => {
  test('Deve renderizar o título "Lista de Alunos"', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const titulo = await screen.findByText(/Lista de Alunos/i);

    expect(titulo).toBeInTheDocument();
  });
});
