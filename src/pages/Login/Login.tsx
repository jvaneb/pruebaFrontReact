import React, { useEffect, useState } from 'react';
import { Form, Button, Alert, Container, Col, Row, Spinner } from 'react-bootstrap';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { login as LoginService } from '../../services/AuthService';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<{ email: string; password: string }>({ email: '', password: '' });
    const [touched, setTouched] = useState<{ email: boolean; password: boolean }>({ email: false, password: false });
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const { login: loginContext } = useAuth();
  
    const validateEmail = (email: string) => {
      return /\S+@\S+\.\S+/.test(email);
    };

    const navigate = useNavigate();
  
    useEffect(() => {
      const emailError = touched.email && !email ? 'Campo obligatorio' : !validateEmail(email) ? 'El correo no es válido' : '';
      const passwordError = touched.password && !password ? 'Campo obligatorio' : '';
  
      setErrors({ email: emailError, password: passwordError });

      setIsFormValid(!emailError && !passwordError && !!email && !!password); 
    }, [email, password, touched]);

    const handleBlur = (field: 'email' | 'password') => {
      setTouched({ ...touched, [field]: true });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setErrorMessage(null);
  
      try {
        const response = await LoginService({ email, password });
        console.log("Login successful:", response);
        
        loginContext(response.token);
        navigate('/home');

      } catch (error: any) {
        console.error("Falló inicio de sesión:", error);
        setErrorMessage('Email o clave incorrecta'); 

      } finally {
        setLoading(false);
      }
    };
  
    return (
    <>
    <div className={`${styles.curve}`}>
      <Container className={`${styles.login_container} d-flex align-items-center justify-content-center`}>
        <Row className={`${styles.login_content} w-100`}>          
          <Col md={6} className={`d-flex align-items-center justify-content-center bg-left`}>
            <div className={`${styles.img_circle}`}>
              <div className={`${styles.img}`}></div>
            </div>
          </Col>

          <Col md={6} className={`d-flex align-items-center justify-content-center bg-transparent}`}>
            <div className={`${styles.login_form} text-center p-2`}>
              <div className={`d-flex align-items-center mb-4`} >
                <div className={`${styles.indicator} me-2`} ></div>
                <h3 className={`${styles.txt_titulo_login} m-0 text-uppercase fw-bold text-start`} >Bienvenido</h3>
              </div>

              {errorMessage && (
                <Alert variant="danger">
                  {errorMessage}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className={`mb-1`}  controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => handleBlur("email")}
                    isInvalid={!!errors.email && touched.email}
                    
                    className={`input_email`}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className={`mb-1`}  controlId="formPassword">
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleBlur("password")}
                    isInvalid={!!errors.password && touched.password}
                    
                    className={`input_password`}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className={`text-end mb-3`} >
                  <a href="#" className={`${styles.forgot_password}`} >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>

                <Button variant="primary" type="submit" disabled={!isFormValid || loading} className={`${styles.btn_iniciar_sesion} text-center p-2`} >
                {loading ? (
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  ) : (
                    'INICIAR SESIÓN'
                  )}
                </Button>
              </Form>

              <p className={`${styles.register_link} mt-3`} >
                AÚN NO TENGO CUENTA <a href="#">REGISTRARSE</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>  
    );
  };

export default Login;
