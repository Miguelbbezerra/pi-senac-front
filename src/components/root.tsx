import { Outlet } from "react-router-dom";
import PersistentDrawerLeft from "./layout/core/persistentDrawerLeft";

export default function Root(){
    return (
        <PersistentDrawerLeft>
            <Outlet/>
        </PersistentDrawerLeft>
    )
}