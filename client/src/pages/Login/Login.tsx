import "./login.css";
import FacebookLogo from "../../assets/images/facebook-logo.png";
import GithubLogo from "../../assets/images/github-logo.png";
import GoogleLogo from "../../assets/images/google-logo.png";

export const Login = () => {

    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    }

    const github = () => {
        window.open("http://localhost:5000/auth/github", "_self");
    }

    const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
    }

    return (
        <div className={"login"}>
            <h1 className="login-title">Choose a login method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="login-btn google" onClick={google}>
                        <img src={GoogleLogo} alt={"google-logo"} className={"icon"} />
                        Google
                    </div>
                    <div className="login-btn facebook" onClick={facebook}>
                        <img src={FacebookLogo} alt={"facebook-logo"} className={"icon"} />
                        Facebook
                    </div>
                    <div className="login-btn github" onClick={github}>
                        <img src={GithubLogo} alt={"github-logo"} className={"icon"} />
                        Github
                    </div>
                </div>
                <div className="center">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type={"text"} placeholder={"Username"} />
                    <input type={"text"} placeholder={"Password"} />
                    <button className="submit">Login</button>
                </div>
            </div>
        </div>
    )
}