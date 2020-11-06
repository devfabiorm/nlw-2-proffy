import React, { useState, FormEvent, useContext } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import AuthContext from '../../contexts/auth';
import Button from '../../components/Button';

import logoImg from '../../assets/images/logo.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import { Redirect } from 'react-router-dom';

const SignIn: React.FC = () => {
    const { handleAuthentication, signed } = useContext(AuthContext);
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    
    function handleSignIn(event: FormEvent) {
        event.preventDefault();

        handleAuthentication();
    }

    function togglePassword() {
        setIsVisiblePassword(!isVisiblePassword);
    }

    if(signed) {
        return <Redirect to="/landing" />
    }

    return(
        <div id="signin-page">
            <div id="purple-side">
                <div id="purple-side-content" className="container">
                  <div className="title">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                  </div>
                </div>
            </div>
            <div id="white-side">
                <form id="white-side-content" className="container" onSubmit={handleSignIn}>
                    <h1>Fazer login</h1>

                    <div className="float-label">
                        <input placeholder="E-mail" id="email" type="email"/>
                        <label htmlFor="email">E-mail</label>
                    </div>

                    <div className="float-label">
                        <input placeholder="Senha" id="password" type={isVisiblePassword ? 'text' : 'password'}/>
                        <label htmlFor="password">Senha</label>
                        <button className="customIcon" type="button" onClick={togglePassword}>
                            {isVisiblePassword
                            ? <FaEye size={24} color="#9C98A6" />
                            : <FaEyeSlash size={24} color="#8257E5" />
                            }
                        </button>
                    </div>
                    
                    <div className="bellow-inputs">  
                        <label htmlFor="remember">
                            <input type="checkbox" id="remember"/>
                            Lembrar-me
                        </label>
                        <a href="/#">Esqueci minha senha</a>
                    </div>

                    <Button type="submit">Entrar</Button>

                    <div className="footer">
                        <span className="account">
                            Não tem conta?
                            <a href="/#">Cadastre-se</a>
                        </span>

                        <span>
                            É de graça {'   '}
                            <img src={purpleHeartIcon} alt="Coração roxo"/>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;