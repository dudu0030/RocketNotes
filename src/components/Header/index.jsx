import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/dudu0030.png" alt="Foto do usuário" />

                <div>
                    <span>Bem Vindo</span>
                    <strong>Eduardo</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}