import { useEffect, useState } from "react";

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return <div className="adverts">Aquí va el listado de anuncios</div>;
};

export default AdvertsPage;
