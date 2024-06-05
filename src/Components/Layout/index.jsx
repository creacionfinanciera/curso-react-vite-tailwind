// con children le decimos que va a tener un hijo o unos hijos
const Layout = ({ children }) => {
    return (
        <div className="flex flex-col items-center mt-20">
            {children}
        </div>
    )
}

export default Layout;