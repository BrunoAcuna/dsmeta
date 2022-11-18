import logo from '../../assets/img/logo.svg';
import './styles.css';


function Header() {
    return (
        <header>
            <div className="ProjectAcuna-logo-container">
                <img src={logo} alt="ProjectAcuna" />
                <h1>Acuna Systems</h1>
                <p>
                    Desenvolvido por 
                    <a href="https://www.instagram.com/brunoacn_"> @brunoacn_</a>
                </p>
            </div>
        </header>
    )
}

export default Header;