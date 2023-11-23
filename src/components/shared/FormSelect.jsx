export const FormSelect = ({ label, value, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <select name="trade" id="trade" onChange={onChange} defaultValue={value}>
        <option value="search">On search</option>
        <option value="sale">On sale</option>
      </select>
    </div>
  );
};

export default FormSelect;
