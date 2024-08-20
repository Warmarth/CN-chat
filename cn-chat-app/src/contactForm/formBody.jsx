import InputForm, { Message } from './components/Inputs';
import { useState } from 'react';

export const FormBody = () => {
  // const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [content, setContent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    query: '',
    message: '',
    checked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContent((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setContent({
        firstName: '',
        lastName: '',
        email: '',
        query: '',
        message: '',
        checked: false,
      });
    }, 2000);
  };

  return (
    <main>
      {success && (
        <div
          className={`alert block alert-success w-72 text-[0.768rem]  text-left mx-auto opacity-0  ${success && 'opacity-75 transition-opacity duration-500 ease-in-out'}`}
        >
          <h3 className="">message sent</h3>
          <small>Thank you for completeting the form , we will be in touch soon</small>
        </div>
      )}
      <form className=" w-4/6  bg-slate-50 mx-auto  text-left text-[.768rem] p-4 space-y-2" onSubmit={handleSubmit}>
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
            className={`p-2 w-full rounded-md bg-slate-200`}
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
              divclassName="flex flex-row-reverse justify-end p-2  flex-grow border  gap-2 rounded-md "
            />
            <InputForm
              type="radio"
              name={'query'}
              value={'Support Request'}
              onChange={handleChange}
              label={`Support Request`}
              placeholder="Support Request"
              className={` bg-slate-200`}
              divclassName={`flex flex-row-reverse justify-end p-2 flex-grow  border  gap-2 rounded-md `}
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
            placeholder=""
            cols="10"
          />
        </div>

        <InputForm
          type={`checkbox`}
          name="checked"
          label={`I consent to being contacted by the team`}
          placeholder="I consent to being contacted by the team"
          onChange={handleChange}
          checked={content.checked}
          divclassName={`flex flex-row-reverse justify-end gap-4`}
        />
        <button className="btn w-full btn-success">submit</button>
      </form>
    </main>
  );
};
