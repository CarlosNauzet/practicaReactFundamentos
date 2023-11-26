import { useEffect, useState } from "react";
import { getAdverts } from "./service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdvertsPage = () => {
  const navigate = useNavigate();
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const adverts = await getAdverts();
        setAdverts(adverts);
      } catch (error) {
        console.log(error);
        toast.error("Unauthorized, please first proceed to log in");
        navigate("/login");
      }
    };
    fetchAdverts();
  }, []);

  return (
    <div className="adverts">
      {adverts.map((advert, index) => {
        return (
          <div className="advert" key={index}>
            <p>{advert.name}</p>
            <p>{advert.price}</p>
            <p>{advert.sale}</p>
            <p>{advert.tags}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AdvertsPage;
