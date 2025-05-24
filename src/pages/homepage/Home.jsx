import { Link } from "react-router-dom"

export function Homepage(){
    return(
        <div>
            <header>
                <ul>
                    <li><Link to="/">Teste1</Link></li>
                    <li><Link to="/bootstrap">TTeste1</Link></li>
                    <li>Teste1</li>
                    <li>Teste1</li>
                    <li>Teste1</li>
                </ul>
            </header>
        </div>
    )
}

export default Homepage()