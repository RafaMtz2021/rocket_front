import "./App.css";
import { useState } from 'react'
import { Col } from "reactstrap";
import Avatar from "./components/Avatar";
import Name from "./components/Name";
import Birthdate from "./components/Birthdate";
import ContactData from "./components/ContactData";
import { createUser } from "./services/user";

function App() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [firstSurname, setfirstSurname] = useState("");
  const [secondSurname, setSecondSurname] = useState("");
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showData, setShowData] = useState(false)

  const handleSubmit = async () => {
    setShowData(true)
    const birthday = `${day}/${month}/${year} `
    const name = `${firstName} ${secondName} ${firstSurname} ${secondSurname} `
    sessionStorage.setItem('name', JSON.stringify( name ));
    sessionStorage.setItem('birthday', JSON.stringify( birthday ));
    sessionStorage.setItem('email', JSON.stringify( email ));
    sessionStorage.setItem('phoneNumber', JSON.stringify( phoneNumber ));
    if (
      [firstName, firstSurname, birthday, email, phoneNumber].includes('')) {
        alert("Todos los campos son obligatorios");
        setShowData(false)
      } else {
        console.log("todos los campos llenos");
        try {
          const data = {
            FIRST_NAME:firstName,
            SECOND_NAME:secondName,
            FIRST_SURNAME:firstSurname,
            SECOND_SURNAME:secondSurname,
            BIRTHDATE:birthday,
            EMAIL:email,
            PHONE_NUMBER:phoneNumber,
          };
          console.log(data);
          await createUser(data);
          cleanForm()
        } catch (error) {
          console.error(error.message);
        }
      }
    }
  
  const cleanForm = () => {
    setFirstName('')
    setSecondName('')
    setfirstSurname('')
    setSecondSurname('')
    setDay('')
    setMonth('')
    setYear('')
    setEmail('')
    setPhoneNumber('')
    setShowData(false)
  }
    
  return (
    <div className="container">
      <div className="header">
        <Col className="header_left">
          <h3>Escribe tus datos:</h3>
          <h5>En menos de 5 minutos</h5>
        </Col>
        <Col className="header_right">
          <div>Icon</div>
        </Col>
      </div>
      <div className="chat">
        <Col className="picture">
          <Avatar />
        </Col>
        <Col className="userData title">
          <Name 
            firstName={firstName}
            setFirstName={setFirstName}
            secondName={secondName}
            setSecondName={setSecondName}
            firstSurname={firstSurname}
            setfirstSurname={setfirstSurname}
            secondSurname={secondSurname}
            setSecondSurname={setSecondSurname}
          />
        </Col>
      </div>
      <div className="chat">
        <Col className="picture">
          <Avatar />
        </Col>
        <Col className="userData title">
          <Birthdate 
            day={day}
            setDay={setDay}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
          />
        </Col>
      </div>
      <div className="chat">
        <Col className="picture">
          <Avatar />
        </Col>
        <Col className="userData title">
          <ContactData 
            email={email}
            setEmail={setEmail}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        </Col>
      </div>
      <div className="chat">
        <Col className="picture">
        </Col>
        <Col className="userData">
          Si tus datos son correctos por favor continuemos
        </Col>
      </div>
      <div className="chat">
        <Col className="picture">
        </Col>
        <Col className="btnSend" onClick={ handleSubmit }>
          Iniciar
        </Col>
      </div>
      <div className="chat">
        <Col className="picture">
        </Col>

        {
          showData ? 
          <Col className="userData title">
          <div className="userSynthesis">
            <p>Fecha de nacimiento: {`${day} ${month} ${year} `}</p>
            <p>Correo electrónico: {email}</p>
            <p>Teléfono celular: {phoneNumber}</p>
            <p>Nombre:{
              `${firstName} ${secondName} ${firstSurname} ${secondSurname} `}
            </p> 
          </div>
        </Col>
        :
        null
        }

      </div>
      
    </div>
  );
}

export default App;
