import React, { Fragment, useState, useEffect, useRef } from 'react';
import Input from './Input.js';


const App = (props) => {
  const [isToggle, setIsToggle] = useState(false);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(false);
  const [profession, setProfession] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [race, setRace] = useState("");
  const [city, setCity] = useState("");
  const [level, setLevel] = useState();


  const professionRef = useRef();
  const nameRef = useRef();
  const genderRef = useRef();
  const raceRef = useRef();
  const cityRef = useRef();
  const levelRef = useRef();


    const toggleHandler = (event) => {
        if (isToggle) {
          setIsToggle(false);
          return;
        }
        setIsToggle(true);
    }

    useEffect( () => {
      console.log("useEffect Fired!!!");

      let players = [
        {
          id: 1,
          profession: "Warrior",
          name: "Ogguk",
          gender: "male",
          race: "Ogre",
          city: "Blackrock",
          level: 80,
        },
        {
          id: 2,
          profession: "Paladin",
          name: "Sir Gabriel",
          gender: "male",
          race: "Human",
          city: "Stormwind",
          level: 79,
        },
        {
          id: 3,
          profession: "Rogue",
          name: "Lady Sithe",
          gender: "female",
          race: "Dark elf",
          city: "Innoruuk",
          level: 77,
        },
        {
          id: 4,
          profession: "Ranger",
          name: "Strider",
          gender: "male",
          race: "Human",
          city: "Freeport",
          level: 78,
        },
        {
          id: 5,
          profession: "Shadow Knight",
          name: "Shissar",
          gender: "male",
          race: "Iskar",
          city: "Kunark",
          level: 79,
        },
        {
          id: 6,
          profession: "Beastlord",
          name: "Canara",
          gender: "female",
          race: "Barbarian",
          city: "Halas",
          level: 76,
        },
        {
          id: 7,
          profession: "Necromancer",
          name: "Elvira",
          gender: "female",
          race: "female",
          city: "Innorruuk",
          level: 78,
        },
        {
          id: 8,
          profession: "Wizard",
          name: "Elunna",
          gender: "female",
          race: "female",
          city: "Stormwind",
          level: 80,
        },
      ]
      setUsers(players)
    }, []);

    const toggleForm = () => {
      if (form) {
        setForm(false);
        return;
      }
      setForm(true);
    }


    const formHandle = (event) => {
      event.preventDefault();

      if (profession !== "") {
        addPlayer(profession, name, gender, race, city, level)
      }
  }

    const addPlayer = (newProfession, newName, newGender, newRace, newCity, newLevel) => {
      let newPlayer = {
        id: users.length + 1,
        profession: newProfession,
        name: newName,
        gender: newGender,
        race: newRace,
        city: newCity,
        level: newLevel,
      };
      const playerList = users.concat(newPlayer);

      const sortPlayer = playerList.sort((a, b) => {
        if (a.profession < b.profession) {
          return -1;
        } else if (a.profession > b.profession) {
          return 1;
        }
        return 0;
      })
      setUsers(sortPlayer);
      setProfession("");
      setName("");
      setGender("");
      setRace("");
      setCity("");
      setLevel("");

      professionRef.current.value = "";
      nameRef.current.value = "";
      genderRef.current.value = "";
      raceRef.current.value = "";
      cityRef.current.value = "";
      levelRef.current.value = "";

    }

  return (
    <>
    <br />
    <button className="btn btn-outline-info text-primary" type="button" onClick={toggleHandler}>Click To Open Form / Close Form</button>
    <hr />
    <br />
      <h1 className="text-center text-secondary">Character Creation Form</h1>
      {isToggle && (
        <div className="alert alert-light">
          <h3 className="text-secondary">Data Saved Character List</h3>
          <ul className="list-group">
          {users.map( (player) => (
            <li key={player.id} className="list-group-item">
            <p className="text-danger text-center text-decoration-underline">New Character Model</p>
              <span className="text-primary text-decoration-underline">Class: </span> <span className="text-success">{player.profession}</span> <br />
              <span className="text-primary text-decoration-underline"> Player Name: </span> {player.name} <br/>
              <span className="text-primary text-decoration-underline">Gender: </span> {player.gender} <br />
              <spa className="text-primary text-decoration-underline">Race: </spa> {player.race} <br />
              <span className="text-primary text-decoration-underline">City: </span> {player.city} <br />
              <span className="text-primary text-decoration-underline">Level: </span> {player.level} <br />
            </li>
          ))}
          </ul>
            <hr /><br /><br />
          <button className="btn btn-success text-light" type="submit" onClick={toggleForm}>Toggle New Character Form</button>
          <hr /><br /><br />
          {form && (
            <div className="alert alert-light">
              <h3 className="text-secondary">Complete Form Below</h3>
              <br />

              <form autoComplete="off" onSubmit={formHandle}>

              <Input
                title="Class Profession"
                type="text"
                id="profession"
                name="profession"
                className="form-control"
                ref={professionRef}
                onChange={(event) => setProfession(event.target.value)}
                autoComplete="off"
              />
              <Input
                title="Character Name"
                type="text"
                id="name"
                name="name"
                className="form-control"
                ref={nameRef}
                onChange={(event) => setName(event.target.value)}
                autoComplete="off"
              />
              <Input
                title="Character Gender"
                type="text"
                id="gender"
                name="gender"
                className="form-control"
                ref={genderRef}
                onChange={(event) => setGender(event.target.value)}
                autoComplete="off"
              />
              <Input
                title="Character Race"
                type="text"
                id="race"
                name="race"
                className="form-control"
                ref={raceRef}
                onChange={(event) => setRace(event.target.value)}
                autoComplete="off"
              />
              <Input
                title="Starting City"
                type="text"
                id="city"
                name="city"
                className="form-control"
                ref={cityRef}
                onChange={(event) => setCity(event.target.value)}
                autoComplete="off"
              />
              <Input
                title="Ranking Level"
                type="number"
                id="level"
                name="level"
                className="form-control"
                ref={levelRef}
                onChange={(event) => setLevel(event.target.value)}
                autoComplete="off"
              />

              <button type="submit" className="btn btn-success">Submit New Player Model</button>
              </form>

                <div>
                  <hr /> <span className="text-decoration-underline text-secondary">CLASS: </span> <span className="text-success px-2">{profession}</span> <br />
                  <hr /> <span className="text-decoration-underline text-secondary">PLAYER: </span> <span className="text-success px-2">{name}</span> <br />
                  <hr /> <span className="text-decoration-underline text-secondary">GENDER: </span> <span className="text-success px-2">{gender}</span> <br />
                  <hr /> <span className="text-decoration-underline text-secondary">RACE: </span> <span className="text-success px-2">{race}</span> <br />
                  <hr /> <span className="text-decoration-underline text-secondary">CITY: </span> <span className="text-success px-2">{city}</span> <br />
                  <hr /> <span className="text-decoration-underline text-secondary">LEVEL: </span> <span className="text-success px-2">{level}</span> <br />
                </div>
                  <hr />
                  {/*<button type="submit" className="btn btn-success my-3">Submit New Player Model</button>*/}
            </div>

          )}
          {form
            ?<p className="text-success text-center">New Character Form Opened</p>
            :<p className="text-danger text-center">New Character Form Closed</p>
          }
        </div>
      )}
      {isToggle
        ?<p className="text-success text-center">Game Character Window Is Opened</p>
        :<p className="text-danger text-center">Game Character Window Is Closed</p>
      }

    </>
  );
}
export default App;
