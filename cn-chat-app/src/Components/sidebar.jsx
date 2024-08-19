import React, { useState, useEffect } from 'react';
import Note from './huston/note';
import service from './service/service';
import axios from 'axios';

function Sidebar() {
  const [persons, setPersons] = useState([] || null);
  const [newName, setNewName] = useState({ name: '', number: '' });
  const [showAll, setShowAll] = useState('');
  const [state, setUpdate] = useState({
    isUpdate: false,
    error: null,
    success: null,
    isDeleted: false,
  });

  const sendName = (e) => {
    e.preventDefault();
    
    if (persons.find((person) => person.name === newName.name)) {
      setUpdate({ ...state, error: `${newName.name} already exists` });
      setTimeout(() => {
        setUpdate({ ...state, error: false });
      }, 1000);
      setNewName({ name: '', number: '' });
      return;
    } else {
      if (!state.isUpdate) {
        setUpdate({ ...state, success: `Added ${newName.name} to phonebook` });
        setTimeout(() => {
          setUpdate({ ...state, success: false });
        }, 1000);
        service.create(newName);
        setPersons((prevPersons) => [...prevPersons, newName]);
      } else {
        service.update(newName.id, newName);
        setUpdate({ ...state, isUpdate: false });
      }
      setNewName({ name: '', number: '' });
    }
  };

  const nameHandler = (e) => {
    const { name, value } = e.target;
    setNewName({ ...newName, [name]: value });
  };

  let filteredPersons = showAll ? persons.filter((person) => person.name.includes(showAll)) : persons;

  const toggleDelete = (id) => {
    const i = persons.find((ind) => ind.id === id);
    setUpdate({ ...state, isDeleted: `Deleted ${i.name} from phonebook` });
    // service.remove(id).then((response) => console.log(response));
    setTimeout(() => {
      setUpdate({ ...state, isDeleted: false });
    }, 1000);
    setPersons(persons.filter((person) => person.id !== id));
  };

  const hooke = () => {
    try {
      service.getAll().then((data) => setPersons(data));
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const toggleUpdate = (id) => {
    // axios.get(`http://localhost:3001/persons/${id}`).then((response) => {
    //   setNewName(response.data);
    //   console.log(response.data);

    //   setUpdate(true);
    // });
    // setNewName(response.data);

    const i = persons.find((ind) => ind.id === id);
    setNewName(i);
    setUpdate({ ...state, isUpdate: true });
  };

  useEffect(() => hooke, []);
  return (
    <div className="card-body bg-slate-500">
      {state.error && <div className="badge badge-error">{state.error}</div>}
      {state.success && <div className="badge badge-success">{state.success}</div>}
      {state.isDeleted && <div className="badge badge-warning">{state.isDeleted}</div>}
      <h2 className="card-title"> Phonebook</h2>
      <Filter value={showAll} changeer={(e) => setShowAll(e.target.value)} />
      <form onSubmit={sendName} className="border w-[20rem] card-normal  bg-slate-500 grid grid-rows-2 gap-2 ">
        <h2>add a new</h2>
        <div>
          name: <Input name="name" value={newName.name} onChange={nameHandler} required />
        </div>
        <div>
          phone: <Input name="number" value={newName.number} onChange={nameHandler} required />
        </div>
        <div>
          <button type="submit" className="btn   btn-primary">
            add
          </button>
        </div>
      </form>
      <section>
        {filteredPersons.map((person) => (
          <ul
            key={person.id}
            className="flex bg-fuchsia-200 rounded-md p-2 gap-2 mb-2 flex-1 w-min text-nowrap text-left"
          >
            <span className="">
              <Note
                // keys={person.id}
                note={person}
                toggleDelete={() => toggleDelete(person.id)}
                toggleUpdate={() => toggleUpdate(person.id)}
              />
            </span>
          </ul>
        ))}
      </section>
    </div>
  );
}
export default Sidebar;
export function Filter({ value, changeer }) {
  return (
    <div className="mr-auto">
      <h3 className="capitalize font-mono text-ellipsis text-left text-rose-200 ">filter shown with</h3>
      <Input value={value} change={changeer} />
    </div>
  );
}

export function Input({ value, change, ...props }) {
  return <input value={value} onChange={change} {...props} className="border-none  outline-none w-min" />;
}
