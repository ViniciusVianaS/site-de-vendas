import "./Button.css";
import { useEffect } from "react";

export const Button = () => {
    const handleToggled = () => {
        document.body.classList.toggle("dark")
        localStorage.setItem(
            "dark",
            document.body.className
        )
    }
    useEffect(() => {
        if (localStorage.getItem("dark")) {
            document.body.classList.add("dark")
        }
    }, [])

    return (
        <label>
            <input className="button" type="checkbox" onClick={handleToggled} />
        <span className="switch">
            <span className="handle" />
        </span>
        </label>
    )
}

export default Button