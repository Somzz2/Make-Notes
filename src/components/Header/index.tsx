import * as C from './styles';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <C.Main>
            <C.Container>
                <img src={logo} alt="logo" />
                <h1>MakeNotes</h1>
            </C.Container>
        </C.Main>
    )
}

export default Header