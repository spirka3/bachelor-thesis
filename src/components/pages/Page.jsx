import React, {useEffect, useState} from "react"
import {pages} from "../../data"
// import Model from "./models/Model.js"

const Page = ({id}) => {

    const [modules, setModules] = useState([])

    const loadModules = () => {
        console.log("loading modules")
        // const modls = pages[0].modules
        // setModules(modls.map(m => Model.build(m)))
    }

    useEffect(() => {
        loadModules()
        // return () => { cleanup }
    }, [])

    return (
        <h1>Not implemented</h1>
    )
}

export default Page