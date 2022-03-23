const ContactData = (props) => {
  const {
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
  } = props
 
  return (
    <>
      Datos de contacto
      <input
        className="formatInput"
        placeholder="Correo electrónico"
        value={email}
        onChange={ e => setEmail(e.target.value) }
      ></input>
      <input
        className="formatInput"
        placeholder="Teléfono celular"
        value={phoneNumber}
        onChange={ e => setPhoneNumber(e.target.value) }
      ></input>
      <div className="userSynthesis">
        <p>Correo electrónico: {email}</p>
        <p>Teléfono celular: {phoneNumber}</p>
      </div>
    </>
  );
};

export default ContactData;
