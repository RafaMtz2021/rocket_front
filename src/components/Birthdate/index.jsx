
const Birthdate = (props) => {
  const {
    day,
    setDay,
    month,
    setMonth,
    year,
    setYear
  } = props

  const handleBirthdate = () => {
    switch (month) {
      case '01':
        setMonth('Enero')
        break;
      case '02':
        setMonth('Febrero')
        break;
      case '03':
        setMonth('Marzo')
        break;
      case '04':
        setMonth('Abril')
        break;
      case '05':
        setMonth('Mayo')
        break;
      case '06':
        setMonth('Junio')
        break;
      case '07':
        setMonth('Julio')
        break;
      case '08':
        setMonth('Agosto')
        break;
      case '09':
        setMonth('Septiembre')
        break;
      case '10':
        setMonth('Octubre')
        break;
      case '11':
        setMonth('Noviembre')
        break;
      case '12':
        setMonth('Diciembre')
        break;
      default:
        break;
    }
  }

  return (
    <>
      ¿Cuál es tu fecha de nacimiento?
      <input
        className="formatInput"
        placeholder="Día (dd) *"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        onBlur={handleBirthdate}
      ></input>
      <input
        className="formatInput"
        placeholder="Mes (mm) *"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        onBlur={handleBirthdate}
      ></input>
      <input
        className="formatInput"
        placeholder="Año (aaaa) *"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        onBlur={handleBirthdate}
      ></input>
      <div className="userSynthesis">{`${day} ${month} ${year} `}</div>
    </>
  );
};

export default Birthdate;
