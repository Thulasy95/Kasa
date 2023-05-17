function Card ({cover, title}) {
    return (
        <div className='card'>

            <img src={cover} alt="card"/>
            <p>{title}</p>

        </div>
    );
}

export default Card