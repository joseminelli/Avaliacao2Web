// src/pages/Home.tsx
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, ListGroup, Spinner } from "react-bootstrap";
import type { Aluno } from "../types/aluno";

function Home() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAlunos() {
      try {
        const response = await axios.get<Aluno[]>(
          "https://proweb.leoproti.com.br/alunos"
        );
        setAlunos(response.data);
      } catch (error) {
        console.error("Erro ao buscar alunos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAlunos();
  }, []);

  if (loading) {
    return <Spinner animation="border" />;
  }

return (
    <Container>
      <h1 className="my-4">Lista de Alunos</h1>
      <ListGroup>
        {alunos.map((aluno) => (
          <ListGroup.Item
            as={Link}
            to={`/aluno/${aluno.id}`}
            key={aluno.id}
            action 
          >
            {aluno.nome}
          </ListGroup.Item>

        ))}
      </ListGroup>
    </Container>
  );
}

export default Home;
