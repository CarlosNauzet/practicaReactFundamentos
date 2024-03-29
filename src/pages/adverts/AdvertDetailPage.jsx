import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteAdvert } from "./service";
import { toast } from "react-toastify";
import { Dna } from "react-loader-spinner";
import Button from "../../components/shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { advertDelete, advertDetail } from "../../store/actions";
import { getAdvert } from "../../store/selectors";

const AdvertDetailPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // const [advert, setAdvert] = useState({});
  const dispatch = useDispatch();
  const advert = useSelector(getAdvert(id));

  useEffect(() => {
    console.log({ id });
    dispatch(advertDetail(id));
  }, [dispatch, id]);

  // useEffect(() => {
  //   const fetchAdvert = async () => {
  //     try {
  //       setIsLoading(true);
  //       const advert = await getAdvert(id);
  //       setAdvert(advert);
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("Unauthorized, please first proceed to log in");
  //       navigate("/login");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchAdvert();
  // }, []);

  const handleDeleteAdvert = async (id) => {
    console.log("delete");
    dispatch(advertDelete(id));
    // try {
    //   const advert = await deleteAdvert(id);
    //   toast.success("Advert deleted succesfully!");
    //   navigate("/adverts");
    // } catch (error) {
    //   console.log(error);
    //   toast.error("There was an error trying to delete the ad");
    // }
  };

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
    advert && (
      <div className="advert-detail">
        <p>{advert.name}</p>
        <p>{advert.price}</p>
        <p>{advert.sale}</p>
        <p>{advert.tags}</p>
        <Button onClick={() => handleDeleteAdvert(advert.id)} type="button">
          Delete advert
        </Button>
      </div>
    )
  );
};

export default AdvertDetailPage;
