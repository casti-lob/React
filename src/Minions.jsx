import { Fragment } from "react";

export default function Minions({minions, side}){
    const filterMinions = minions.filter(minion => minion.side ===side);
    const list = filterMinions.map(minion=>{
        return(
           <Fragment key={minion.name}>
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
            
           
        </li>

      </ul>
      </div>
    </div>
    </Fragment>
        )
    })
    return list
}