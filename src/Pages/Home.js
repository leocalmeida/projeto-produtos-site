import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Section from '../Components/Section';
import styles from './Home.module.css';

const Home = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    async function fetchProdutos(url) {
      const response = await fetch(url).catch((e) => {
        setError(e);
      });
      const json = await response.json().catch((e) => {
        setError(e);
      });
      setProdutos(json);

      return null;
    }
    fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');
  }, []);

  if (error !== null) return null;
  return (
    <Section className='section'>
      <div style={{ width: '60vw' }} className='container is-max-desktop'>
        <Header />
        <div className='columns is-multiline'>
          {produtos &&
            produtos.map((produto) => (
              <div key={produto.id} className='column is-4'>
                <div>
                  <Link to={`produto/${produto.id}`}>
                    <img
                      className={styles.img}
                      src={produto.fotos[0].src}
                      alt={produto.nome}
                    />
                    <h4 className='title is-4'>{produto.nome}</h4>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Home;
