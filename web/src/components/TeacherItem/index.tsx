import React from 'react';
import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher {
    name: string;
    avatar: string;
    bio: string;
    subject: string;
    whatsapp: string;
    cost: number;
    id: number;
}

export interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id
        })
    }

    return (
        <article className="teacher-item">
                    <header>
                        <img src={teacher.avatar} alt={teacher.name} />
                        <div>
                            <strong>{teacher.name}</strong>
                            <span>{teacher.subject}</span>
                        </div>
                    </header>

                    <p>
                        {teacher.bio}
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ {teacher.cost}</strong>
                        </p>
                        <a target="_blank" onClick={createNewConnection} href={`https://wa.me/55${teacher.whatsapp}`}>
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </a>
                    </footer>
                </article>
    );
}

export default TeacherItem;