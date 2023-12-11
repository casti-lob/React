
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
*/
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
}