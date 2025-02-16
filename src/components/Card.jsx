export default function Card(props) {
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
            <img src={props.image} className="card-img-top" alt="..." style={{height: '200px'}}/>
            <div className="card-body">
                <h5 className="card-title">{props.flowerName}</h5>
                <p className="card-text">{props.description}</p>
                <h4 className="text-primary">Price: {props.price}BDT</h4>
                <a href="#" className="btn btn-primary">Buy now</a>
            </div>
            </div>
        </div>
    )
}