import { useState } from 'react'
import styles from './PagUsuario.module.css'
import PopupEdicao from '../Popups/PopupEdicao'

export default function Info({users}){
    const [IsOpenPopup, setIsOpenPopup] = useState(false)
    
    return(
        <div className={styles.containerGeralTableUser}>
            <div className={styles.containerInfoDireita}> 
                {users && users.map && users.map((item, i) => (
                    <div className={styles.Informações} key={i}>
                        <h1 className={styles.paragrafo1}>Informações do Usuário</h1>
                        <p className={styles.paragrafo2}><b>Nome: </b> {item.usuario_nome}</p>
                        <p className={styles.paragrafo2}><b>Email: </b> {item.usuario_email}</p>
                        <p className={styles.paragrafo2}><b>Usuário: </b>{item.nome_usuario}</p>    
                        <p className={styles.paragrafo2}><b>Tipo: </b>{item.usuario_tipo}</p>
                        <p className={styles.paragrafo2}><b>Criado: </b>{item.to_char}</p>
                        <button className={styles.botaozao} onClick={setIsOpenPopup.bind(IsOpenPopup, true)}>Editar Informações</button>
                        {IsOpenPopup && <PopupEdicao setIsOpenPopup={setIsOpenPopup} />} 
                    </div>
                ))}
            </div>
        </div>
    )
}