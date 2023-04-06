import './card.css'

function Card({details}) {
  return (
    <div className="card" style={{width: "18rem"}}>
  <img src={details.picture?.large} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{details.name?.first}</h5>
    <h6 className ="card-title">{details.email}</h6>
    <a href="#" className="btn btn-primary">Know More</a>
  </div>
</div>
  )
}

export default Card