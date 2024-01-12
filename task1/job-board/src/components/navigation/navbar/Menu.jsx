export default function Menu({children, isMenuOpen}) {
    return (
        <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-3 transition-all ease-in-out duration-500`}>
            {children}
        </ul>
    );
}
