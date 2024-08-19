const InputForm = ({ divclassName, label, onChange, value, ...props }) => {
  return (
    <div className={divclassName}>
      <p>{label}</p>
      <input onChange={onChange} value={value} {...props} required />
    </div>
  );
};

export const Message = ({ label, divclassName, value, onChange, ...props }) => {
  return (
    <div className={divclassName}>
      <p>{label}</p>
      <textarea name="" cols="4" rows="4" value={value} onChange={onChange} {...props}></textarea>
    </div>
  );
};

export default InputForm;
