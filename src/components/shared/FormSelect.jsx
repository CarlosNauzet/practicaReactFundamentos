export const FormSelect = ({ label, value, onChange, options }) => {
  return (
    <div className="form-row">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <select name="trade" id="trade" onChange={onChange} defaultValue={value}>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
