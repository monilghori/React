
import "./header.css"


const Headers = () => {

    return (
        <>
            <header>
                <nav>
                    <div className="left">
                        <h1>Myfitness</h1>
                    </div>
                    <div className="right">
                        <ul className="right-ul">
                            <li><a href="/">HOME</a></li>
                            <li><a href="/">FOOD</a></li>
                            <li><a href="/">EXERCISE</a></li>
                            <li><a href="/">COMMUNITY</a></li>
                            <li><a href="/">BLOG</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Headers