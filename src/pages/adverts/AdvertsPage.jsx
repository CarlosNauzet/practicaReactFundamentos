import { useEffect, useState } from "react";
import { getAdverts } from "./service";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Dna } from "react-loader-spinner";
import { setAutorizationHeader } from "../../api/client";

const AdvertsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAutorizationHeader(token);
    }
  }, []);

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        setIsLoading(true);
        const adverts = await getAdverts();
        setAdverts(adverts);
      } catch (error) {
        console.log(error);
        toast.error("Unauthorized, please first proceed to log in");
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAdverts();
  }, []);

  if (isLoading)
    return (
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    );
  return (
    <div className="adverts">
      {adverts.map((advert, index) => {
        return (
          <Link to={`${advert.id}`} className="advert" key={index}>
            <p>{advert.name}</p>
            <p>{advert.price}</p>
            <p>{advert.sale}</p>
            <p>{advert.tags}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default AdvertsPage;

// meteles estilos a esta pagina: redondera bordes, pinta color de fondo, cambia fuente de los campos

// access token (remember me button) que guarde tb el token
