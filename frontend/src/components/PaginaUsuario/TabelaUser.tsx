import styles from './PagUsuario.module.css'

export const data = [
    ["Task", "Hours Per Day"],
    ["Ativos", 10]
];

export default function TabelaUser({acoes}){
    return(
        <div className={styles.containerGeralTableUser}>
            <div className={styles.containerTableDireitaUser}>
                <div className={styles.tableUser}>
                    <table>
                        <thead>
                            <tr>
                                <th className={styles.mesclaUser} colSpan={2}>Histórico de atividades da conta</th>
                            </tr>

                            <tr>
                                <th>Ação</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {acoes && acoes.map && acoes.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.tipo_acao}</td>
                                    <td>{item.to_char}</td>
                                </tr>
                            ))}
                        </tbody>

                        <tfoot>
                            <tr>
                                <td className={styles.mesclaUser} colSpan={2}></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}