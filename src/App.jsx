
import './App.css'
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
const people = [
  'Creola Katherine Johnson: matemática',
  'Mario José Molina-Pasquel Henríquez: químico',
  'Mohammad Abdus Salam: físico',
  'Percy Lavon Julian: químico',
  'Subrahmanyan Chandrasekhar: astrofísico'
];

export default function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}