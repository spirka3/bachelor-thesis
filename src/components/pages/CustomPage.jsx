import React, {useEffect, useState} from "react"
import {pages} from "../../data"
import {Button} from "react-bootstrap";
import NewModal from "../modules/modals/NewModal";
import BuilderModule from "../modules/BuilderModule";

const CustomPage = ({id}) => {

  // TODO
  const [modules, setModules] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    loadModules()
  }, [])

  const loadModules = () => {
    console.log("loading modules");
    const mod = pages.find(p => p.id === id).modules;
    console.log(mod)
    setModules(mod);
    console.log(modules);
  }

  return (
    <>
      <h1>Custom Page</h1>
      {modules.map(m => <BuilderModule module={m}/> )}
      <Button onClick={setShowModal}>Add new module</Button>
      { showModal &&
        <NewModal
          modules={modules}
          setModules={setModules}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      }
    </>
  )
}

export default CustomPage