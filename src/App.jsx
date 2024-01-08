
import { Fragment, useState } from 'react';
import './App.css'
import Minions from './Minions'
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

export default function App(){
  const [time, setTime] = useState({min:0, sec:0})
  const oClock = ()=>{
    setInterval(() => {
      setTime(time => time = {min:min})
    }, 1000);
  }

  return(
    <>
      <h1>Timer</h1>

      <button>Start</button>
      <button>Stop</button>
      <button>Reset</button>
    </>
  )
}