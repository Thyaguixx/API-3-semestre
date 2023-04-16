import styles from './PagAdmin.module.css'

export default function Navbar(){
    return(
        <div className={styles.Navbar}>
            <div className={styles.ladoEsquerdo}>
                <span className={styles.logo}>
                    <img src="Imagens/logoVisiona.png" alt="Logo Visiona"/>
                </span>
                <span className={styles.separador}>
                    |
                </span>
                <span className={styles.txt1}>
                    Operação:
                </span>
                <span className={styles.txt2}>
                    Gerenciamento de Usuários
                </span>
            </div>
            <div className={styles.ladoDireito}>
                <div className={styles.dropdown}>
                    <img src="Imagens/user.png" alt="Logo Usuario" />
                    <span className={styles.dropdownMenu}>
                        <a href='/login'>Informações</a>
                        <a href='/'>Editar</a>
                        <a href="/login">Sair</a>
                    </span>
                </div>
            </div>
        </div>
    )
}