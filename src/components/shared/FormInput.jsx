const FormInput = ({ label, type }) => {
  return (
    <div className="form-row">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input type={type} name={label} className="form-input" />
    </div>
  );
};
export default FormInput;
