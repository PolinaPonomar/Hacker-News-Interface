import { Link, useLocation } from 'react-router-dom';

function Header(props) {
    const location = useLocation().pathname;

    function handleClick() {
        props.onStoriesUpdate();
    };

    return (
        <header className="header">
            <h1 className="header__title">Hacker News</h1>
            {(location === "/") ?
                (
                    <button type="button" className="refresh-button" onClick={handleClick}></button>
                ):(
                    <Link to="/" className="back-button"></Link>
                )
            }
            
        </header>
    );
}

export default Header;
