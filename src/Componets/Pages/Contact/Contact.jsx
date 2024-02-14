import React, { useState } from 'react';
import Menu from '../../Header/Menu/Menu';
import "../Contact/Contact.css";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Nome é obrigatório';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email inválido';
        }
        if (!formData.subject.trim()) {
            errors.subject = 'Assunto é obrigatório';
        }
        if (!formData.message.trim()) {
            errors.message = 'Mensagem é obrigatória';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            // Aqui você pode enviar os dados do formulário para onde precisar
            console.log('Formulário enviado:', formData);
            // Limpar o formulário após o envio, se necessário
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setErrors({});
            
            const templateParms = {
                from_name: formData.name,
                message: formData.message,
                email: formData.email
            };
    
            emailjs.send("service_yzcndva", "template_i288fdc", templateParms, "2MlfHqJWVj2ASkdZJ")
                .then((response) => {
                    console.log("Email enviado", response.status, response.text );
                })
                .catch((err) => {
                    console.log("Erro: ", err);
                });
        } else {
            setErrors(validationErrors);
        }
    };
    

    return (
        <div className='contact'>
            <header>
                <Menu />
            </header>
            <div className="contact-container">
                <h1 className='title'>Contate-me</h1>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Nome</label>
                            <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} placeholder='Digite seu nome' />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' name='email' value={formData.email} onChange={handleChange} placeholder='Informe seu email' />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div>
                            <label htmlFor="subject">Assunto</label>
                            <input type="text" id='subject' name='subject' value={formData.subject} onChange={handleChange} placeholder='Informe sobre qual assunto deseja tratar' />
                            {errors.subject && <span className="error">{errors.subject}</span>}
                        </div>
                        <div>
                            <label htmlFor="message">Mensagem</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} cols="30" rows="10" placeholder='Escreva sua mensagem'></textarea>
                            {errors.message && <span className="error">{errors.message}</span>}
                        </div>
                        <input type='submit' value='Enviar' className='btn-form'/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
