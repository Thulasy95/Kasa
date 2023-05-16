function Banner(props) {
    return (
        <section className='banner'>

            <p>{props.text}</p>
            <img src={props.image} alt="banner"/>
            <div className="banner__darken"></div>

        </section>
    );
}

export default Banner