import { useEffect, useState } from "react";
import FormInput from "../../components/shared/FormInput";
import "../auth/styles/form.css";
import "./styles/newadvert.css";
import FormSelect from "../../components/shared/FormSelect";
import { getTags } from "./service";
import { getUser } from "../auth/service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NewAdvertPage = () => {
  const [productname, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [trade, setTrade] = useState("sale");
  const [tags, setTags] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const user = await getUser();
        const fetchedTags = await getTags();
        setTags(fetchedTags);
      } catch (error) {
        console.log(error);
        toast.error("Unauthorized, please first proceed to log in");
        navigate("/login");
      }
    };
    fetchFunction();
  }, []);

  return (
    <div className="new-advert">
      <form className="form">
        <h1>Create a new add</h1>
        <FormInput
          label="productname"
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
          label="trade"
          value={trade}
          options={["onSale", "onSearch"]}
          onChange={(event) => setTrade(event.target.value)}
        />

        <FormSelect label="tags" options={tags} />
        <input type="file" name="photo" id="photo" />
      </form>
    </div>
  );
};

// nombre, compra o venta (select), tags disponibles, precio, foto(input type="file");

export default NewAdvertPage;
