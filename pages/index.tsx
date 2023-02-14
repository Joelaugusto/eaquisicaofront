import type { NextPage, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { useState} from 'react'
import session from '../utils/session'
import api from '../utils/api'
import HomeContainer from '../components/home/HomeContainer'
import Table from "../components/global/Table";

const Home: NextPage = (props:any) => {

  console.log(props.data)
  const aux = props.data.map((data1:any) => [data1.descricao, data1.valorPrevisto, data1.categoria.nome, data1.modalidadeContratacao.nome, data1.faseAquisicao.id, data1.linhaOrcamento
      .nome, data1.createdAt, data1.createdBy]);


  const data = [
      ['Descricao', 'Valor previsto', 'Categoria', 'Modalidade de contratacao', 'Fase aquisicao', 'Linha Orcamento', 'Data de Criaćão', 'Criado Por']
  ];

  data.push(...aux)


  return (
    <HomeContainer>
        <Table data={data} title="Lista de Aquisições"/>
    </HomeContainer>
  )
}


export async function getServerSideProps(context:GetServerSidePropsContext) {

  let user:any;
  
  try {
    user = await session.getLoggedUser(context)
  } catch (error) {
    return {
      redirect: {
        destination: '/auth/login',
      }
    }
  }
  
  const data = await api.get('/acquisitions')


  return {
    props: {
      user: user,
       data: data.data.content,
    },
  }
}

export default Home
