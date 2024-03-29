import { useEffect, useState } from "react";
import FormInput from "../../components/shared/FormInput";
import "../auth/styles/form.css";
import "./styles/newadvert.css";
import FormSelect from "../../components/shared/FormSelect";
import Button from "../../components/shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { createAdverts, loadAdverts } from "../../store/actions";
import { getIsLoaded, getTags } from "../../store/selectors";

const NewAdvertPage = () => {
  const [productname, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [trade, setTrade] = useState("sale");

  const dispatch = useDispatch();

  const areLoaded = useSelector(getIsLoaded);
  const tags = useSelector(getTags);

  useEffect(() => {
    if (areLoaded) return;
    dispatch(loadAdverts());
  }, []);

  // useEffect(() => {
  //   const fetchFunction = async () => {
  //     try {
  //       const user = await getUser();
  //       const fetchedTags = await getTags();
  //       setTags(fetchedTags);
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("Unauthorized, please first proceed to log in");
  //       navigate("/login");
  //     }
  //   };
  //   fetchFunction();
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    dispatch(createAdverts(formData));
    // try {
    //   const advert = await createAdvert(formData);
    //   toast.success("Advert created!");
    //   navigate("/adverts");
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Advert not created. Please try again later");
    // }
  };

  return (
    <div className="new-advert">
      <form
        className="form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <h1>Create a new add</h1>
        <FormInput
          label="name"
          value={productname}
          type="text"
          onChange={(event) => setProductName(event.target.value)}
        />
        <FormInput
          label="price"
          value={price}
          type="number"
          onChange={(event) => setPrice(event.target.value)}
        />

        <FormSelect
          label="sale"
          value={trade}
          options={["onSale", "onSearch"]}
          onChange={(event) => setTrade(event.target.value)}
        />

        <FormSelect label="tags" options={tags} />
        <input type="file" name="photo" id="photo" />

        <Button type="submit">Submit new add</Button>
      </form>
    </div>
  );
};

export default NewAdvertPage;
