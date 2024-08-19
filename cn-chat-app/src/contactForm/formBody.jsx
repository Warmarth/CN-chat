import InputForm, { Message } from './components/Inputs';
import { useState } from 'react';

export const FormBody = () => {
  const [consent, setConsent] = useState(null);
  const [error, setError] = useState({});
  // const [success, setSuccess] = useState(false);

  const [content, setContent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    query: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(content);
    console.log(consent);
  };

  return (
    <form className=" w-4/6 h-[80vh] bg-slate-50 m-auto text-left text-sm px-2 space-y-2" onSubmit={handleSubmit}>
      <h1 className="text-xl">Contact Form</h1>
      <div className="flex bg-white gap-3 flex-wrap flex-1  text-black">
        <InputForm
          label="First Name"
          name="firstName"
          value={content.firstName}
          onChange={handleChange}
          className={`p-2 rounded-md bg-slate-200 `}
          divclassName={`flex flex-col flex-grow`}
          placeholder="First Name"
        />
        <InputForm
          name="lastName"
          label="Last Name"
          value={content.lastName}
          onChange={handleChange}
          className={`p-2  rounded-md bg-slate-200 `}
          divclassName={`flex flex-col flex-grow `}
          placeholder="Last Name"
        />
        <InputForm
          label="Email Address"
          name="email"
          value={content.email}
          onChange={handleChange}
          className={`p-2 w-full rounded-md bg-slate-200 ${error && 'border-red-500 border'}`}
          divclassName={`flex flex-col w-full`}
          placeholder="Email"
        />
      </div>
      <div className="">
        <p>Query Type</p>
        <div className="flex flex-col md:flex-row gap-2 ">
          <InputForm
            type="radio"
            name={'query'}
            value={'General Enquiry'}
            onChange={handleChange}
            label={`General Enquiry`}
            placeholder="General Enquiry"
            className={` bg-slate-200`}
            divclassName="flex flex-row-reverse justify-end p-2  flex-grow border border-green-600 gap-2 rounded-md "
          />
          <InputForm
            type="radio"
            name={'query'}
            value={'Support Request'}
            onChange={handleChange}
            label={`Support Request`}
            placeholder="Support Request"
            className={` bg-slate-200`}
            divclassName={`flex flex-row-reverse justify-end p-2 flex-grow  border border-green-600 gap-2 rounded-md `}
          />
        </div>
      </div>
      <div className="">
        <Message
          name="message"
          label={`Message`}
          value={content.message}
          onChange={handleChange}
          className={`  rounded-md bg-slate-200`}
          divclassName={`flex flex-col `}
          placeholder="Message"
        />
      </div>

      <InputForm
        type={`checkbox`}
        name="consent"
        label={`I consent to being contacted by the team`}
        placeholder="I consent to being contacted by the team"
        onChange={(e) => setConsent((prev) => !prev)}
        value={consent}
        divclassName={`flex flex-row-reverse justify-end gap-4`}
      />
      <button className="btn w-full btn-success">submit</button>
    </form>
  );
};
