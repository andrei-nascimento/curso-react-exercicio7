import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from './assets/loading.svg';

function App() {

  const [image, setImage] = useState(null);

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_CATIORO_URL}`);
    promise.then((response) => {
      setImage(response.data);
    });
    promise.catch(e => console.log("Estamos com problemas técnicos, por favor, tente mais tarde", e));
  }, []);

  function buildImage() {
    if (image) {
      return <img src={image.message} alt="catioro" />
    }
      return <img src={Loading} alt="Carregando imagem..." />
  }

  const imagem = buildImage();
  return (
    <div className="view">
      <div className="imagem">
        {imagem}
      </div>
    </div>
  );
}

export default App;
