import { useState, useEffect } from 'react';
import axios from 'axios';
import TacoComponent from './TacoComponent';

export default function Peticiones() {
  const [texto, setTexto] = useState("");
  const [taco, setTaco] = useState({})

  /*
    useEffect (escrito así) se ejecuta siempre
    después de renderizar (retornar) nuestro
    componente
  */
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTexto("Pasaron 3 segundos!!!");
  //   }, 3000)
  // })

  /*
    useEffect (escrito usando DEPENDENCIAS [])
    se ejecuta UNA SOLA VEZ al cargar el componente
    esto es el equivalente a
    componentDidMount
  */
 /*
  useEffect(
    () => {
      console.log("Hola desde useEffect :}")
    },
    [],
  );
*/
  const tacoAPI ='http://taco-randomizer.herokuapp.com/random/';

  async function getTaco () {
      try {
        const response = await axios.get(tacoAPI);
        setTaco(response.data)
      } catch (error){
        alert("Ocurrio un error al traer tu taco!!!");
      }
  }


  useEffect(() => {
    setTimeout(getTaco,1500)
  },[])

  return (
    <>
      <h1>Peticiones</h1>
      <h2>useEffect</h2>
      <h3> -TacoFancy API- </h3>
      {
        taco.condiment
        ? <TacoComponent taco={taco}/>
        : <span>Estamos eligiendo tu taco ideal...</span>
      }
      
    </>
  )
}
