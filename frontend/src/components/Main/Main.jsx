import './Main.css'

const Main = () => {
    return (
        <main>
            <div className="main__container">

                <div className="main__catalogue">
                    <div className="catalogue__popular">
                        <div className="catalogue__carcard">
                            <p>Koenigsegg</p>
                            <p>Sport</p>
                            <img src="" alt="" />
                            <div className="Spesification">
                                <p>90L</p>
                                <p>Manual</p>
                                <p>2 people</p>
                            </div>
                            <p>$99.00/day</p>
                            <button>Rent Now</button>
                        </div>
                    </div>

                    <div className="catalogue__recomendation">

                    </div>
                </div>


            </div>
        </main>
    )
}

export default Main;