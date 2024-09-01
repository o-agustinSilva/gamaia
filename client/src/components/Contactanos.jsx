import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contactanos = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    correoElectronico: "",
    numeroTelefono: "",
    nombreEmpresa: "",
    comentarios: "",
    fecha: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      fecha: new Date().toISOString(),
    };
    
    try {
      const response = await fetch('https://Gamaia.com.ar/Api/Contacto', {
        method: 'POST',
        mode: 'no-cors', // No recomendado, borrar esta línea y habilitar CORS en servidor 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert('Formulario enviado con éxito');
      } else {
        alert('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      alert('Hubo un problema al enviar el formulario');
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center p-5 margin-container" style={{ background: "#2221214c" }} id="contacto">
      <Row className="d-flex justify-content-center text-white" style={{ width: "800px" }}>
        <Col md={12}>
          <h1 className="text-center" style={{color: "#13c1d2"}}>Contáctanos</h1>
        </Col>

        <Col md={12} className="p-4">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Nombre completo</Form.Label>
              <Form.Control
                type="text"
                name="nombreCompleto"
                value={formData.nombreCompleto}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white">Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="correoElectronico"
                value={formData.correoElectronico}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white">Número de teléfono</Form.Label>
              <Form.Control
                type="text"
                name="numeroTelefono"
                value={formData.numeroTelefono}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white">Nombre de la empresa</Form.Label>
              <Form.Control
                type="text"
                name="nombreEmpresa"
                value={formData.nombreEmpresa}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white">Comentarios</Form.Label>
              <Form.Control
                as="textarea"
                name="comentarios"
                value={formData.comentarios}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="info" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contactanos