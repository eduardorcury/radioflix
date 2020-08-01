import React, { useEffect, useState } from 'react';
import BannerMain from './../../components/BannerMain';
import Carousel from './../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault'

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    // http://localhost:8081/categorias?_embed=videos
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[1].videos[2].titulo}
                url={dadosIniciais[1].videos[2].url}
                videoDescription={dadosIniciais[1].videos[2].description}
              />
              <Carousel
                //ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;