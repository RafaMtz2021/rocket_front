import { BASE_URL, PATH_USER } from "../utils/constants";

const createUser = async (data) => {
  try {
    console.log(data)
    const response = await fetch(`${BASE_URL}${PATH_USER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response.status)
    if(response.status === 201 ){
      alert('¡El usuario fue creado exitosamente!')
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};


export { createUser,
   
};