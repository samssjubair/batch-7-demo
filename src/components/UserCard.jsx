export default function UserCard(props) {
  return (
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.email}</h6>
        <p className="card-text">
          {props.phone}
        </p>
        <p className="card-text">
          Company Name: {props.company}
        </p>
        <p className="card-text">
          City Name: {props.address}
        </p>
      </div>
    </div>
  );
}
