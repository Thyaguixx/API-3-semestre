import styles from './PagUsuario.module.css'

export default function NavbarUser(){
    return(
        <div className={styles.NavbarUser}>
            <div className={styles.ladoEsquerdoUser}>
                <span className={styles.logoUser}>
                    <img src="Imagens/logoVisiona.png" alt="Logo Visiona"/>
                </span>
                <span className={styles.separadorUser}>
                    |
                </span>
                <span className={styles.txt1User}>
                    Operação:
                </span>
                <span className={styles.txt2User}>
                    Informações do Usuários
                </span>
            </div>
            <div className={styles.ladoDireitoUser}>
                <div className={styles.dropdownUser}>
                    <img src="Imagens/user.png" alt="Logo Usuario" />
                    <span className={styles.dropdownMenuUser}>
                        <a href="/">Informações</a>
                        <a href="/">Editar</a>
                        <a href="/" onClick={() => [localStorage.removeItem('key_usuario'), localStorage.removeItem('id')]}>Sair</a>
                    </span>
                </div>
            </div>
        </div>
    )
}