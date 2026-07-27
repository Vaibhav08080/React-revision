import { useContext } from "react";
import { GlobalContext } from "../globalstate";

export default function ComponentText() {
    const { theme } = useContext(GlobalContext);

    return (
        <h1
            style={{
                fontSize: theme === "light" ? "50px" : "100px",
                backgroundColor: theme === "light" ? "red" : "black",
                color: theme === "light" ? "white" : "yellow",
            }}
        >
            meow ghop ghop
        </h1>
    );
}