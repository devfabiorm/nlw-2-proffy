import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import Button from '../../components/Button';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

const SignUp: React.FC = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function tooglePasswordVisible() {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <div id="signup-page">
            <div id="white-side">
                <form id="white-side-content" className="container">
                    <Link className="backButton" to="/sign-in">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>

                    <div className="title">
                        <h1>Cadastro</h1>
                        <p>Preecha os dados abaixo para começar.</p>
                    </div>

                    <div className="float-label">
                        <input type="text" id="name" placeholder="Nome" />
                        <label htmlFor="name">Nome</label>
                    </div>

                    <div className="float-label">
                        <input type="text" id="surname" placeholder="Sobrenome" />
                        <label htmlFor="surname">Sobrenome</label>
                    </div>

                    <div className="float-label">
                        <input type="email" id="email" placeholder="E-mail" />
                        <label htmlFor="email">E-mail</label>
                    </div>

                    <div className="float-label input-password">
                        <input type={isPasswordVisible ? 'text' : 'password'} id="password" placeholder="Senha" />
                        <label htmlFor="password">Senha</label>
                        <button className="customIcon" type="button" onClick={tooglePasswordVisible}>
                            {isPasswordVisible
                                ? <FaEye size={24} color="#9C98A6" />
                                : <FaEyeSlash size={24} color="#8257E5" />
                            }
                        </button>
                    </div>

                    <Button type="submit">Concluir cadastro</Button>
                </form>
            </div>
            <div id="purple-side">
                <div id="purple-side-content" className="container">
                   <img src={logoImg} alt="Proffy"/>
                   <h2>Sua plataforma de estudos online.</h2>
                </div>
            </div>
        </div>
    );
}

export default SignUp;