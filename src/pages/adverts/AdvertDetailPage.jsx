import { useParams } from "react-router-dom";

const AdvertDetailPage = () => {
  const { id } = useParams();
  return (
    <div className="advert-detail">
      Esta es la página de detalle del anuncio {id}
    </div>
  );
};

export default AdvertDetailPage;
