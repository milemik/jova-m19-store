import "../styles/navBar.css";

export default function NavBar() {
    return <nav>
        <h1 className="navTitle">JOVA-M19</h1>
        <div className="right">
            <ol>
                <li className="navListItem">
                    <a href="/"><h1>Odeca</h1></a>
                </li>
                <li className="navListItem">
                    <a href="/"><h1>O nama</h1></a>
                </li>
            </ol>
        </div>
    </nav>
}