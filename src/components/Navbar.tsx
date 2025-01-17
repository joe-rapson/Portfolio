const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <a href="/">Home</a>
                <a href="/">Blog</a>
                <a href='/'>Projects</a>
            </div>
            <div className="social-links">
                <a href="https://github.com/joe-rapson">
                    <img src="src/assets/githuib.png" alt="GitHub" />
                </a>
                <a href="https://uk.linkedin.com/in/joe-rapson-47b885246">
                    <img src="src/assets/linkedin.png" alt="LinkedIn" />
                </a>
            </div>
        </nav>
    );
}
 
export default Navbar;
