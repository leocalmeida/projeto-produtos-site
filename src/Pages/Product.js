import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Section from '../Components/Section';
import Loading from '../Components/Loading';
import { DetailImage } from '../Components/Image.js';

const Product = () => {
  const { id } = useParams();

  const [produto, setProduto] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (err) {
        setError(`Ocorreu um erro ${err}`);
      } finally {
        setLoading(false);
      }
      return null;
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (error !== null) return <h1>{error}</h1>;
  if (loading === true) return <Loading />;
  if (produto === null) return null;
  return (
    <Section className='section'>
      <div style={{ width: '60vw' }} className='container is-max-desktop'>
        <Header />
        <div className='columns is-multiline'>
          <div className='column'>
            {produto &&
              produto.fotos.map((foto) => (
                <figure key={foto.src}>
                  <DetailImage src={foto.src} alt={foto.titulo} />
                </figure>
              ))}
          </div>
          <div className='column'>
            <h1 className='title is-3'>{produto && produto.nome}</h1>
            <p className='tag is-medium is-success'>
              {produto && `R$ ${produto.preco}`}
            </p>
            <p>{produto && produto.descricao}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Product;
