import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import FormButton from '../../../components/FormButton';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {

  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=pRU-6vaKaf4',
    categoria: 'The Bends',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoria: categoriaEscolhida.titulo,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <FormButton 
          type="submit" >
          Cadastrar novo vídeo
        </FormButton>
      </form>

      <br />

      <FormButton as={Link} className='ButtonLink' to='/cadastro/categoria'>
        Cadastrar nova categoria
      </FormButton>

      <br />
      <br />

    </PageDefault>
  );
}

export default CadastroVideo;