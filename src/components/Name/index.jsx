
const Name = (props) => {
  const {
    firstName,
    setFirstName,
    secondName,
    setSecondName,
    firstSurname,
    setfirstSurname,
    secondSurname,
    setSecondSurname,
  } = props

  return (
    <>
      ¿Cuál es tu nombre?
      <input
        className="formatInput"
        placeholder="Nombre *"
        value={firstName}
        onChange={ e =>  setFirstName(e.target.value) }
      ></input>
      <input
        className="formatInput"
        placeholder="Segundo nombre"
        value={secondName}
        onChange={ e =>  setSecondName(e.target.value) }
      ></input>
      <input
        className="formatInput"
        placeholder="Apellido paterno *"
        value={firstSurname}
        onChange={ e =>  setfirstSurname(e.target.value) }
      ></input>
      <input
        className="formatInput"
        placeholder="Apellido materno"
        value={secondSurname}
        onChange={ e =>  setSecondSurname(e.target.value) }
      ></input>
      <div className="userSynthesis">{
        `${firstName} ${secondName} ${firstSurname} ${secondSurname} `}
      </div>
    </>
  );
};

export default Name;
