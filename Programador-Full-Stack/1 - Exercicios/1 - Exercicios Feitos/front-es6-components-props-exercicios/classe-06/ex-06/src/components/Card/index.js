export default function Card({photo,name,tag,followers,following}) {
  return (<div className="card">
  <img src={photo} alt={name}></img>
  <h2>{name}</h2>
  <span className="margin-negativa">{tag}</span>
  <span className="margin-maior">{followers}</span>
  <span>{following}</span>
</div>)
}