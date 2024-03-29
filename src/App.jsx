/*
import { Fragment, useState,useEffect } from 'react';
import './App.css'
import Minions from './Minions'*/
/*
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  },
  url: 'https://i.imgur.com/7vQD0fPs.jpg'
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={person.url}
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}*/
/*
const baseUrl = 'https://i.imgur.com/';
const person = {
name: 'Gregorio Y. Zara',
imageId: '7vQD0fP',
imageSize: 's',
theme: {
backgroundColor: 'black',
color: 'pink'
}
};

export default function TodoList({size}) {
return (
<div style={person.theme}>
  <h1>{person.name}'s Todos</h1>
  <img
    className="avatar"
    src={`${baseUrl}${person.imageId}${size}.jpg` }
    alt={person.name}
  />
  <ul>
    <li>Improve the videophone</li>
    <li>Prepare aeronautics lectures</li>
    <li>Work on the alcohol-fuelled engine</li>
  </ul>
</div>
);
}
*//*
import { getImageUrl } from './utils.jsx';

function Profile({ name, imageId, profession, recognitions, discovery }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profesión: </b> {profession}
        </li>
        <li>
          <b>Reconocimientos: {recognitions.length} </b> ({recognitions.join(', ')})
        </li>
        <li>
          <b>Descubrió: </b> {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  const mariaCurieProps = {
    name: 'Maria Skłodowska-Curie',
    imageId: 'szV5sdG',
    profession: 'física y química',
    recognitions: ['Premio Nobel de Física', 'Premio Nobel de Química', 'Medalla Davy', 'Medalla Matteucci'],
    discovery: 'polonio (elemento químico)',
  };

  const saruhashiProps = {
    name: 'Katsuko Saruhashi',
    imageId: 'YfeOqp2',
    profession: 'geoquímica',
    recognitions: ['Premio Miyake de geoquímica', 'Premio Tanaka'],
    discovery: 'un método para medir dióxido de carbono en agua de mar',
  };
  return (
    <div>
      <h1>Científicos Notables</h1>
     
      <Profile {...mariaCurieProps} />
      <Profile {...saruhashiProps} />
    </div>
  );
  
}*/

  /*
function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person.imageId, size < 90 ? 's' : 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={111}
      person={{
        name: 'Gregorio Y. Zara',
        imageId: '7vQD0fP'
      }}
    />
  );
}

*/
/*
import Card from './Card';

export default function Profile() {
  return (
    <div>
      <Card>
        <h1>Foto</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card>
        <h1>Acerca de</h1>
        <p>Aklilu Lemma fue un distinguido científico etíope que descubrió un tratamiento natural para la esquistosomiasis.</p>
      </Card>
    </div>
  );
}
*/
  
/*
function Elemento({ nombre, estaEmpacado }) {
  if (estaEmpacado) {//Si esta empaquetado se le pone el tick
    return <li className="item">{nombre} ✔</li>;
  }//Si queremos no mostrarlo directamente con return null
  return <li className="item">{nombre}</li>;
}

export default function ListaEmpaque() {
  return (
    <section>
      <h1>Lista de Empaque de Sally Ride</h1>
      <ul>
        <Elemento 
          estaEmpacado={true} 
          nombre="Traje espacial" 
        />
        <Elemento 
          estaEmpacado={true} 
          nombre="Casco con hoja dorada" 
        />
        <Elemento 
          estaEmpacado={false} 
          nombre="Foto de Tam" 
        />
      </ul>
    </section>
  );
}
*/
/*
//Condicional ternario
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? '✔' : '❌'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de Empaque de Sally Ride</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Traje espacial" 
        />
        <Item 
          isPacked={true} 
          name="Casco con hoja dorada" 
        />
        <Item 
          isPacked={false} 
          name="Foto de Tam" 
        />
      </ul>
    </section>
  );
}
*/
/*
//Con operador lógico
function Item({ name, importance }) {
  return (
    <li className="item">

      {name} 

      {importance >0 && <><i>(Importancia: {importance})</i></>}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de Empaque de Sally Ride</h1>
      <ul>
        <Item 
          importance={9} 
          name="Traje espacial" 
        />
        <Item 
          importance={0} 
          name="Casco con hoja dorada" 
        />
        <Item 
          importance={6} 
          name="Foto de Tam" 
        />
      </ul>
    </section>
  );
}
*/
/*
function Drink({ name }) {
  let partOfPlant, caffeineContent, age;
   
  {name==='tea'}
  {
    ? { partOfPlant: 'hoja', caffeineContent: '15–70 mg/taza', age: '4,000+ años' }
    : { partOfPlant: 'grano', caffeineContent: '80–185 mg/taza', age: '1,000+ años' }
  }
  

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Parte de la planta</dt>
        <dd>{partOfPlant}</dd>
        <dt>Contenido de cafeína</dt>
        <dd>{caffeineContent}</dd>
        <dt>Edad</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
*/
//Hacer los minios aqui
/*
const minions =[
  {
    name: "Kevin",
    bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
    img: "src/assets/img/kevin.jpg",
    birth: "1951",
    side:"de los buenos"
  },
  {
    name: "Josua",
    bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
    img: "src/assets/img/Josua.jpg",
    birth: "1672",
    side:"malvado"
  },
  {
    name: "Dave",
    bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
    img: "src/assets/img/dave.jpg",
    birth: "1723",
    side: "de los buenos"
  },
  {
    name: "Mudito",
    bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
    img: "src/assets/img/mudito.jpeg",
    birth: "1379",
    side:"de los buenos"
  },
  {
    name: "Llongueras",
    bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
    img: "src/assets/img/llongueras.jpg",
    birth: "1687",
    side: "malvado"
  },
  {
    name: "Minioncé",
    bio: "Le va el cante, dar la nota, ama los karaokes, es el rey y reina de la fiesta. Invítalo a tu fiesta o te arrepentirás.",
    img: "src/assets/img/minionce.jpg",
    birth: "1976",
    side: "de los buenos"
  },
  {
    name: "Lobeznion",
    bio: "No lo enfades, este bichillo tiene muy malas pulgas...aunque sólo mide medio metro y ¡no puede ser más gracioso!",
    img: "src/assets/img/lobeznion.jpg",
    birth: "2017",
    side: "malvado"
  },
  {
    name: "Minion Presley",
    bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
    img: "src/assets/img/minion-presley.jpg",
    birth: "2017",
    side: "malvado"
  }

] 

function GoodOrBad({side}){
  if(side=='malvado'){
   return <img src='src/assets/img/de los malos.PNG' id='sideImg'  className="card-img-top"  alt="..."></img>
  }
  return <img src='src/assets/img/de los buenos.PNG' id='sideImg'  className="card-img-top"   alt="..."></img>
}
*/
/*
export default function List() {
  

  
  
  
  const listItems = minions.map(minion =>
    
    <div className="col-lg-4">
      <div  className="card">
        <img src={minion.img}  className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{minion.name}</h5>
          <p className="card-text">{minion.bio}</p>
        </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Año {minion.birth}</li>
        <li  className="list-group-item">Actitud {minion.side}
            <GoodOrBad
              side ={minion.side}
            />
           
        </li>

      </ul>
      </div>
    </div>
  );
 
  
  return <div className='container'>{listItems}</div>;

}
*/
/*
export default function List(){
  return(
    <>
    <h1>De los buenos</h1>
    <Minions minions={minions} side={'de los buenos'}> </Minions>
    <h1>De los malos</h1>
      <Minions minions={minions} side={'malvado'}> </Minions>
      </>
  ) 
}
*/
/*
import { people } from './Cientificos.jsx';
import { getImageUrl } from './utils.jsx';

export default function List() {
  const quimicos = people.filter(p => p.profession==='químico');
  const noQuimicos = people.filter(p => p.profession!='químico');
  const listQuimicos = quimicos.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );
  const listNoQuimicos = noQuimicos.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Quimicos</h1>
      <ul>{listQuimicos}</ul>
      <h1>No quimicos</h1>
      <ul>{listNoQuimicos}</ul>
    </article>
  );
}
*/
/*
import { recipes } from './recetas.jsx';

export default function RecipeList() {

  const listRecipes = recipes.map(recipe =>{
    return(
    <div key={recipe.id}>
    <li>Plato {recipe.name}</li>
    <ul>
      <Ingredients
      ingredients={recipe.ingredients}
      >

      </Ingredients>
    </ul>
    </div>
    )
  }) 

  return (
    <div>
      <h1>Recetas</h1>
      <ul>{listRecipes}</ul>
    </div>
  );
}

function Ingredients ({ingredients}){
  const listIngredients = ingredients.map(ingredient=>{
    return(
    <div key={ingredient}>
      <li>{ingredient}</li>
    </div>
    )
  })
  return listIngredients
}
*/
/*
const poem = {
  lines: [
    'Escribo, borro y reescribo',
    'Borro de nuevo, y luego',
    'Florece una amapola.'
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) =>
         <Fragment key={index}>
        <p key={index}>
          {line}
        </p>
        <hr/>
        </Fragment>
      )}
      
    </article>
  );
}
*/

//Barra progreso

// import ProgressBar from "./ProgressBar";
// export default function App() {
//   const [percentage , setPercentage]= useState(0)

//   const inputChange = (e) => {
//     const value = parseInt(e.target.value);
//     setPercentage(value);
//   };

//   return (
//     <>
//       <div className="App">
//         <h1>Progress bar</h1>
//         <ProgressBar width={percentage}  />
//         <form>
//           <label htmlFor="percentage">Input Percentage:</label>
//           <input value={percentage} onChange={inputChange}  name="percentage" type="number"/>
//         </form>
//       </div>
//     </>
//   );
// }

////mostrar texto o ocultarlo
// export default function App() {

//   let [hidde, setShowHide] = useState(false)
  
//   const showHide =(e)=>{
//     if(!hidde){
//       setShowHide(hidde = true)
//     }else{
//       setShowHide(hidde = false)
//     }
//   }
//   const showText =()=>{
//     if(!hidde){
//       return (
//         <h1 >Welcome to React Challenges</h1>
//       )
//     }
//   }
//   return(
//     <>
//       <button onClick={showHide}>Show/Hide</button>

//       {showText()}
//     </>
//   )
// }
/*

//Cronometro
export default function App(){
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    let intervalId;

    if (corriendo) {
      intervalId = setInterval(() => {
        // Incrementar segundos
        setSegundos((segundos) => segundos + 1);

        // Verificar si es necesario incrementar minutos
        if (segundos === 59) {
          setSegundos(0);
          setMinutos((minutos) => minutos + 1);
        }
      }, 1000);
    }

    // Limpiar el intervalo cuando el componente se desmonta o se detiene el cronómetro
    return () => clearInterval(intervalId);
  }, [corriendo, segundos]);

  const handleStart = () => {
    setCorriendo(true);
  };

  const handleStop = () => {
    setCorriendo(false);
  };

  const handleReset = () => {
    setSegundos(0);
    setMinutos(0);
    setCorriendo(false);
  };

  return (
    <div>
      <h1>Cronómetro</h1>
      <p>
        {minutos < 10 ? `0${minutos}` : minutos}:{segundos < 10 ? `0${segundos}` : segundos}
      </p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
*/
//lista
/*
export default function App(){
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <h1>Lista de Tareas Pendientes</h1>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea}{' '}
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button onClick={agregarTarea}>Agregar Tarea</button>
      </div>
    </div>
  );
};
*/
//Enviar datos a formulario
/*
export default function App(){
  
  const [user, setUser] = useState({userName:"", fullName:"",age:0})
  let [hidde, setHide] = useState(false)
  const addUser =(e)=>{
    const{name, value} = e.target
    setUser({...user , [name]:value})
  }

  const showList=(e)=>{
    e.preventDefault()
    if(!hidde){
      setHide(hidde = true)
    }else{
      setHide(hidde = false)
    }
  }

  const text=()=>{
    if(!hidde){
      return(
        <>
        <li> UserName: {user.userName}</li>
        <li> FullName: {user.fullName}</li>
        <li> Age: {user.age}</li>
        </>
      )
    }
  }

  return(
    <>
      <form action="">
          <p>Username:</p>
          <p><input name='userName' value={user.userName} onChange={addUser} type="text" /></p>

          <p>FullName</p>
          <p><input name='fullName' value={user.fullName} onChange={addUser} type="text" /></p>

          <p>Age</p>
          <p><input type="number" name='age' value={user.age} onChange={addUser}/></p>

          <p><input type="submit" value="Submit" onClick={showList}/></p>
      </form>

      <h1>Request Sent to DB with below request data</h1>
      <ul>
        {text()}
      </ul>
    </>
  )
};
*/
//PETICIONES

import axios from "axios";
import React, {useEffect, useState} from "react";
import {getPost,createPost,updatePost,deletePost, getPosts} from './services/postService'
const baseURL = "http://localhost:3000/posts/";
/*
//GET
export default function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []); // El array vacío indica que este efecto solo se ejecuta una vez, equivalente a componentDidMount en componentes de clase

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}*/
/*
export default function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.id} {post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}*/

export default function App() {
  const [post, setPost] = useState(null);
  const [id,setId]= useState(1)
  useEffect(() => {
    getPost(id).then((response) => {
      setPost(response.data);
    });
    async function getPostComp(){
      const posts = await getPosts();
      console.log(posts);
    }
    getPostComp()
  }, [id]);
  
  

  const handleCreatePost = () => {
    const postData = {
      title: 'Hello World!',
      body: 'This is a new post.',
    };
  
    createPost(postData).then((response) => {
      setPost(response.data);
    });
  };
  
  const handleUpdatePost = () => {
    const updatedData = {
      title: 'Hello World!',
      body: 'This is an updated post.',
    };
  
    updatePost(1, updatedData).then((response) => {
      setPost(response.data);
    });
  };
  
  const handleDeletePost = () => {
    deletePost(1).then(() => {
      alert('Post deleted!');
      setPost(null);
    });
  };
  const handleChangeId = ()=>{
    setId(3);
  }
  
  if (!post) return 'No post!';
  
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={handleCreatePost}>Create Post</button>
      <button onClick={handleUpdatePost}>Update Post</button>
      <button onClick={handleDeletePost}>Delete Post</button>
      <button onClick={handleChangeId}>Cambio de id</button>
      <p>Id: {id}</p>
    </div>
  );
  }