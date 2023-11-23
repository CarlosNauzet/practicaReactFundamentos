import { useState } from "react";
import FormInput from "../../components/shared/FormInput";
import "../auth/styles/form.css";
import "./styles/newadvert.css";
import FormSelect from "../../components/shared/FormSelect";

const NewAdvertPage = () => {
  const [productname, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [trade, setTrade] = useState("sale");
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
          onChange={(event) => setTrade(event.target.value)}
        />
        <input type="file" name="photo" id="photo" />
      </form>
    </div>
  );
};

// nombre, compra o venta (select), tags disponibles, precio, foto(input type="file");

export default NewAdvertPage;
