import Find from "./Find";
import New from "./New";

const Header = () : JSX.Element => {
    return(<header>
            <div className="header-style">
                <h1>Payments Application</h1>
                <Find/>
                <New/>
            </div>
            </header>)
    }

export default Header;