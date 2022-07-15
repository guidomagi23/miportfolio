import React from 'react';
import "./Footer.css";
import cvguido from "../../media/cvguido.pdf";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <h1>Mis Datos</h1>
                <a className='fas fa-address-card btn'
                    href={cvguido}
                > <spam className='btn-texto'
                > CURRICULUM VITAE
                    </spam>
                </a>


                <a className='fa-brands fa-linkedin btn'
                    href='https://www.linkedin.com/in/guidomagi/'
                > <spam className='btn-texto'
                > LINKEDIN
                  </spam>
                </a>

                <a className='fas fa-envelope btn'
                    href='mailto:guidomagi23@gmail.com'
                > <spam className='btn-texto'
                > GMAIL
                  </spam>
                </a>


                <div className='design-by'>
                    Desarrollado por Guido Magi
                </div>

                <div className='sns-links'>
                    <a href='https://www.linkedin.com/in/guidomagi/' target="_blank" rel='noreferrer'>
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a href='https://github.com/guidomagi23' target="_blank" rel='noreferrer'>
                        <i className='fab fa-github github'></i>
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer;