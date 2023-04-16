import "./PagUsuario.module.css"
import Info from "./Info";
import NavbarUser from "./NavBarUser";
import FooterUser from "./FooterUser";
import TabelaUser from "./TabelaUser";
import { useState, useEffect } from "react";
import Axios from 'axios'

export default function PaginaUsuario() {
  const [users, setUsers] = useState({} as any)
  const [acoes, setAcoes] = useState({} as any)

  const getUsers = async () => {
    try {
      const res = await Axios.get("http://localhost:3001/read");
      setUsers(res.data)
    } catch (error) {
        console.log(error)
    };
  };

  const getAcoes = async () => {
    try {
      const res = await Axios.get("http://localhost:3001/readAcoes");
      setAcoes(res.data)
    } catch (error) {
        console.log(error)
    };
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  useEffect(() => {
    getAcoes();
  }, [setAcoes]);

  return (
    <>
    <NavbarUser/>
    <Info users={users}/>
    <TabelaUser acoes={acoes}/>
    <FooterUser/>
    </>
    
  )
}