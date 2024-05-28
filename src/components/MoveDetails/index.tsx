import { UpIcon, DownIcon } from "../Icons/Icons";
import { useState } from "react";
import { Inventory } from "../Inventory";
export const MoveDetails = ({moveDetails}: {moveDetails: any}) => {
    const [detailInventory, setDetailInventory] = useState(null);
    const [inventoryId, setInventoryId] = useState(null);
    return (
      <div className="mt-4 flex flex-col justify-center gap-6 pl-2">
        <div className=" flex justify-between items-center">
          <p className=" font-semibold text-xl">Additional Information</p>
          <button className="buttonDark">Edit Additional Info</button>
        </div>
        <div className=" flex justify-between items-center mt-4">
          <p className=" font-semibold text-xl">House Details</p>
          <button className="buttonDark">Edit House Details</button>
        </div>
        <div className=" flex justify-between items-center">
          <p
            className=" font-semibold text-lg"
            style={{ color: "rgb(219,96,75)" }}
          >
            Existing House Details
          </p>
        </div>
        <div className="w-full flex gap-10 justify-start">
          <div className=" text-start">
            <p className="font-semibold text-lg">Floor No.</p>
            <p>{moveDetails.old_floor_no}</p>
          </div>
          <div className=" !text-start">
            <p className="font-semibold text-lg">Elevator Available.</p>
            <p>{moveDetails.old_elevator_availability}</p>
          </div>
          <div className=" !text-start">
            <p className="font-semibold text-lg">
              Distance from Elevator/Staircase to truck
            </p>
            <p>{moveDetails.old_parking_distance}</p>
          </div>
        </div>
        <div className=" flex justify-between items-center">
          <p
            className=" font-semibold text-lg"
            style={{ color: "rgb(219,96,75)" }}
          >
            New House Details
          </p>
        </div>
        <div className="w-full flex gap-10 justify-start">
          <div className=" text-start">
            <p className="font-semibold text-lg">Floor No.</p>
            <p>{moveDetails.new_floor_no}</p>
          </div>
          <div className=" !text-start">
            <p className="font-semibold text-lg">Elevator Available.</p>
            <p>{moveDetails.new_elevator_availability}</p>
          </div>
          <div className=" !text-start">
            <p className="font-semibold text-lg">
              Distance from Elevator/Staircase to truck
            </p>
            <p>{moveDetails.new_parking_distance}</p>
          </div>
        </div>
        <div className=" flex justify-between items-center mt-4">
          <p className=" font-semibold text-xl">Inventory Details</p>
          <button className="buttonDark">Edit inventory</button>
        </div>
        {moveDetails.items.inventory.map((item: any) => (
          <>
            <div className="w-full px-2 py-4 flex justify-between bg-gray-300">
              <div className=" flex gap-2 items-center">
                <p
                  className=" font-extrabold"
                  style={{ color: "rgb(219,96,75)" }}
                >
                  {item.name}
                </p>
                <div
                  className=" w-7 h-7 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgb(219,96,75)" }}
                >
                  <p className=" text-white">{item.category.length}</p>
                </div>
              </div>
              <div
                className=" cursor-pointer"
                onClick={() => {
                 if(inventoryId !== item.id){
                  setInventoryId(item.id);
                  setDetailInventory(item);
                }else{
                    setInventoryId(null);
                    setDetailInventory(null);
                }
                }}
              >
                {inventoryId === item.id ? <UpIcon /> : <DownIcon />}
              </div>
            </div>
           {inventoryId === item.id && <Inventory inventory={detailInventory} />}
          </>
        ))}
      </div>
    );
}