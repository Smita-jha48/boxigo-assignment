import { SideBar } from "../../components/SideBar";
import { Moves } from "../../components/Moves";
import { useEffect, useState } from "react";
export const Dashboard = () => {
    const [moveData, setMoveData] = useState([]) 
    useEffect(() => {
        fetch("http://test.api.boxigo.in/sample-data/")
          .then((response) => response.json())
          .then((json) => setMoveData(json));
   }, [])
    return (
        <div className="w-[100%] flex gap-2 justify-between items-start">
            <SideBar />
            <Moves moveData={moveData} />
        </div>
    )
};