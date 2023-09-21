import { useDispatch, useSelector } from "react-redux";

function SignIN() {
    const userData = useSelector(userState)
    const dispatch = useDispatch()
    const [user, setUser] = useState({ email: '', password: '' })

    const handleChange = (e) =>
        setUser(prevState => ({ prevState, [e.target.name]: e.target.value }))

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logIn(user));
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="email" onChange={handleChange} value={user.email}></input>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">password</label>
                        <input type="text" name="email" onChange={handleChange} value={user.password}></input>
                    </div>
                    <div className="input-wrapper">
                        <input type="checkbox" id="remenber-me" />
                        <label htmlFor="">Remenber me</label>
                    </div>
                    <button className="sign-in-button">Sign-in</button>
                </form>
            </section>
        </main>
    )
}
export default SignIN