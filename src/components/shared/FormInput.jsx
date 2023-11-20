import "./FormInput.css";
const FormInput = ({ label, type, value, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={label}
        value={value}
        className="form-input"
        onChange={onChange}
      />
    </div>
  );
};
export default FormInput;
