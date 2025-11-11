import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Container, Card, Spinner } from "react-bootstrap";
import type { Aluno } from "../types/aluno";

function Detalhes() {
  const { id } = useParams<{ id: string }>();
  const [aluno, setAluno] = useState<Aluno | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAluno() {
      try {
        const response = await axios.get<Aluno>(
          `https://proweb.leoproti.com.br/alunos/${id}`
        );
        setAluno(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do aluno:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAluno();
  }, [id]);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (!aluno) {
    return <p>Aluno não encontrado.</p>;
  }

  return (
    <Container>
      <Card className="my-4">
        <Card.Header>
          <h2>{aluno.nome}</h2>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <strong>Matrícula:</strong> {aluno.matricula}
          </Card.Text>
          <Card.Text>
            <strong>Email:</strong> {aluno.email}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to="/" className="btn btn-primary">
            Voltar para Lista
          </Link>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default Detalhes;
