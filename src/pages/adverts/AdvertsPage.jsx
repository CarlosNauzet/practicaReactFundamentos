import { useEffect, useState } from "react";
import { getAdverts } from "./service";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Dna } from "react-loader-spinner";
import { setAutorizationHeader } from "../../api/client";
import FormInput from "../../components/shared/FormInput";
import FormSelect from "../../components/shared/FormSelect";
import Button from "../../components/shared/Button";

const AdvertsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [adverts, setAdverts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAutorizationHeader(token);
    }
  }, []);

  useEffect(() => {
    const name = searchParams.get("name");
    const sale = searchParams.get("sale");
    const fetchAdverts = async () => {
      try {
        setIsLoading(true);
        const adverts = await getAdverts();

        let soughtAdverts = [...adverts];
        if (name) {
          soughtAdverts = soughtAdverts.filter((advert) => {
            return name === ""
              ? advert
              : advert.name.toLowerCase().includes(name.toLowerCase());
          });
        }
        if (sale) {
          console.log({ sale });
          soughtAdverts = soughtAdverts.filter((advert) => {
            return sale === "all"
              ? advert
              : advert.sale === (sale === "onSale");
          });
        }

        setAdverts(soughtAdverts);
      } catch (error) {
        console.log(error);
        toast.error("Unauthorized, please first proceed to log in");
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAdverts();
  }, [searchParams]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const params = {
      name: formData.get("name"),
      sale: formData.get("sale"),
    };
    setSearchParams(params);
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
