import { Chart } from "react-google-charts";
import styles from './PagAdmin.module.css'

export const data = [
    ["Task", "Hours Per Day"],
    ["Ativos", 10]
];

export default function Tabelas({usersAll, usersActions}){
    return(
        <div className={styles.containerGeralTables}>
            <div className={styles.containerTablesEsquerda}>
                <div className={styles.tableHistorico}>
                    <table>
                        <thead>
                            <tr>
                                <th className={styles.mescla} colSpan={4}>Histórico de atividades do usuário</th>
                            </tr>
                            <tr>
                                <th>Usuário</th>
                                <th>Ação</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {usersActions && usersActions.map && usersActions.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.usuario_nome}</td>
                                    <td>{item.tipo_acao}</td>
                                    <td>{item.to_char}</td>
                                </tr>
                            ))}
                        </tbody>
                        
                    </table>
                </div>
                <div className={styles.tableGrafico}>
                    <table>
                        <tr>
                            <th className={styles.mescla} colSpan={3}>Usuários ativos x Usuários inativos</th>
                        </tr>
                        <tr>
                            <td>
                                <span className={styles.posicaoGrafico}>
                                    <Chart
                                        chartType="PieChart"
                                        data={data}
                                        width={"100%"}
                                        height={"13rem"}
                                    />
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className={styles.containerTableDireita}>
                <div className={styles.filtroBarra}>
                    <span className={styles.filtro}>
                        <select>
                            <option value="">- Categorias -</option>
                            <option value="opcao1">Usuários</option>
                            <option value="opcao2">Ações</option>
                            <option value="opcao3">Data de criação</option>
                            <option value="opcao4">Situação</option>
                        </select>
                    </span>
                    <span className={styles.barra}>
                        <input type="text"/>
                        <button>Pesquisar</button>
                    </span>
                </div>
                <div className={styles.tableUsers}>
                    <table>
                        <thead>
                            <tr>
                                <th>Usuários</th>
                                <th>Ações</th>
                                <th>Data de Criação</th>
                                <th>Situação</th>
                            </tr>   
                        </thead>
                        
                        <tbody>
                            {usersAll && usersAll.map && usersAll.map((item, i) => (
                                <tr>
                                    <td>
                                        <span className={styles.situacaoOn}><input type="button"/></span>
                                        <span className={styles.nomeUser}>{item.usuario_nome}</span>
                                    </td>
                                    <td>
                                        <span className={styles.excluir}><a href="#"><img src="Imagens/excluir.png" alt="excluir"/></a></span>
                                        <span className={styles.editar}><a href="#"><img src="Imagens/edição.png" alt="editar"/></a></span>
                                    </td>
                                    <td>{item.to_char}</td>
                                    <td>{item.usuario_status_registro}</td>
                                </tr>
                            ))}
                            
                        </tbody>
                        
                        <tr>
                            <td className={styles.mescla} colSpan={4}></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}