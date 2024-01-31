import { useEffect } from "react";
import { getAdverts } from "../../store/selectors";
import { Link, useSearchParams } from "react-router-dom";
import { Dna } from "react-loader-spinner";
import { setAutorizationHeader } from "../../api/client";
import FormInput from "../../components/shared/FormInput";
import FormSelect from "../../components/shared/FormSelect";
import Button from "../../components/shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { loadAdverts } from "../../store/actions";
import { getIsLoading } from "../../store/selectors";

const AdvertsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);
  const isFetching = useSelector(getIsLoading);
  console.log({ adverts });

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAutorizationHeader(token);
    }
  }, []);

  useEffect(() => {
    dispatch(loadAdverts());
  }, []);

  // useEffect(() => {
  //   const name = searchParams.get("name");
  //   const sale = searchParams.get("sale");
  //   const fetchAdverts = async () => {
  //     try {
  //       dispatch(loadAdverts());
  //       let soughtAdverts = [...adverts];
  //       if (name) {
  //         soughtAdverts = soughtAdverts.filter((advert) => {
  //           return name === ""
  //             ? advert
  //             : advert.name.toLowerCase().includes(name.toLowerCase());
  //         });
  //       }
  //       if (sale) {
  //         console.log({ sale });
  //         soughtAdverts = soughtAdverts.filter((advert) => {
  //           return sale === "all"
  //             ? advert
  //             : advert.sale === (sale === "onSale");
  //         });
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("Unauthorized, please first proceed to log in");
  //       navigate("/login");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchAdverts();
  // }, [searchParams]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const params = {
      name: formData.get("name"),
      sale: formData.get("sale"),
    };
    setSearchParams(params);
  };

  if (isFetching)
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
    <>
      <div className="search-form">
        <h3>Search</h3>
        <form className="form" onSubmit={handleSubmit}>
          <FormInput label="name" type="text" />
          <FormSelect label="sale" options={["all", "onSale", "onSearch"]} />
          <Button type="submit">Search!</Button>
        </form>
      </div>
      <div className="adverts">
        {adverts.map((advert, index) => {
          return (
            <Link to={`${advert.id}`} className="advert" key={index}>
              <p>{advert.name}</p>
              <p>{advert.price}</p>
              <p>{advert.sale ? "on sale" : "on search"}</p>
              <p>{advert.tags}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AdvertsPage;
