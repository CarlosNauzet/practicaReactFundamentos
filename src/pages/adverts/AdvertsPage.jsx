import { useEffect, useState } from "react";
import { getAdverts } from "./service";

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const adverts = await getAdverts();
        setAdverts(adverts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAdverts();
  }, []);

  return <div className="adverts">Aquí va el listado de anuncios</div>;
};

export default AdvertsPage;
