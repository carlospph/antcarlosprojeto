import Layout from "./Layout";
import {Link} from 'react-router-dom';

export const Erro = () => {
  return (
    <>
      <Layout>
        <h2 className="title__erro">
          Ops! Página não localizada ou inexistente!
        </h2>


        <Link to="/" className="btn__back"> Voltar para página inicial</Link>
      </Layout>
    </>
  );
};