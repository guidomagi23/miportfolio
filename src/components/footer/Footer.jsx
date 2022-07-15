import React from 'react';
import "./Footer.css";
import cvguido from "../../media/cvguido.pdf";

const Footer = () => {
    return (
        <footer className='footer'>
            <h1>Mis Datos</h1>
            <div className='footer-info'>
                <a className='fas fa-address-card btn'
                    href={cvguido}
                    target='_blank'
                    rel='noopener noreferrer'
                > <span className='btn-texto'
                > CURRICULUM VITAE
                    </span>
                </a>


                <a className='fa-brands fa-linkedin btn'
                    href='https://www.linkedin.com/in/guidomagi/'
                    target='_blank'
                    rel='noopener noreferrer'
                > <span className='btn-texto'
                > LINKEDIN
                    </span>
                </a>

                <a className='fas fa-envelope btn'
                    href='mailto:guidomagi23@gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'
                > <span className='btn-texto'
                > GMAIL
                    </span>
                </a>
            </div>

            <div className='design-by'>
                Desarrollado por Guido Magi.
            </div>

            <div className='sns-links'>
                <a href='https://www.linkedin.com/in/guidomagi/' target="_blank" rel='noreferrer'>
                    <i className='fab fa-linkedin linkedin'></i>
                </a>
                <a href='https://github.com/guidomagi23' target="_blank" rel='noreferrer'>
                    <i className='fab fa-github github'></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer;