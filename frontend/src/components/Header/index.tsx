import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="dsMeta"/>
                <h1>Project SpringBoot</h1>
                <p>
                    Development by: Eric Lopes Oliveira github: @olvericc
                </p>
            </div>
        </header>
    )
}

export default Header