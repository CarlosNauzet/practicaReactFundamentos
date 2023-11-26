import "./FormInput.css";
const FormInput = ({ label, type, value, onChange, isSubmitting }) => {
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
        disabled={isSubmitting}
      />
    </div>
  );
};
export default FormInput;
