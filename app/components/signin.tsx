"use client"

export function SigninComponent() {
    function handler() {
        console.log("Hi")
    }
    return (
        <>
            <div> Sign in </div>
            <button onClick={handler}></button>
        </>

    );
}