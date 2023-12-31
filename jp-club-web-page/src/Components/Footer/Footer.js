import React from 'react'; // Import React
import footerStyle from '../../Assets/Style/Uni/footer.css'; // Import Folha de Estilo


function Footer(){
    return(

        // Espaco Primario Formatado Footer

        <footer>

        
        <div className='copyright'> {/* Alinhamento Copyright */}

                <h5>© 2023-2024 M3 Developers. Todos os Direitos Reservados.</h5>
            

            <div className='footerLink'> {/* Alinhamento M3 Midias Footer Link */}
                <p>
                    <a href="https://youtube.com/@M3Devs?si=yUyhk_9La5v_XlJD">YouTube </a> | 
                    <a href="https://github.com/M3-Developers">  GitHub</a> | 
                    <a href="mailto: devs.m3group@gmail.com">  Email</a> |
                    <a href="https://www.google.com.br/">  Sobre</a>
                </p>
            </div>
        </div>


        </footer>

        )
    }
    
    export default Footer;