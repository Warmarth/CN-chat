const InputForm = ({ divclassName, label, checked, onChange, value, ...props }) => {
  return (
    <div className={divclassName}>
      <p>{label}</p>
      <input onChange={onChange} value={value} {...props} required checked={checked} />
    </div>
  );
};

export const Message = ({ label, divclassName, value, onChange, ...props }) => {
  return (
    <div className={divclassName}>
      <p>{label}</p>
      <textarea name="" rows="7" value={value} onChange={onChange} {...props}></textarea>
    </div>
  );
};

export default InputForm;
