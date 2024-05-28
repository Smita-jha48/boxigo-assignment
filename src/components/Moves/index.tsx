import { HomeIcon, CalendarIcon, Blocks, DistanceIcon, CheckIcon, DisclaimerIcon, ForwardIcon } from "../Icons/Icons";
import { useState } from "react";
import { MoveDetails } from "../MoveDetails";
export const Moves = ({ moveData }: { moveData: any }) => {
    const [moveDetails, setMoveDetails] = useState(null);
    const [selectedmoveId, setSelectedMoveId] = useState(null);
    return (
      <div className="flex flex-col w-[100%] text-wrap pr-3">
        <h4 className=" w-1/3 p-2 text-start font-bold text-xl">My Moves</h4>
        {moveData &&
          moveData.Customer_Estimate_Flow &&
          moveData.Customer_Estimate_Flow.map((move: any) => {
            return (
              <div key={move.id} className=" w-full flex flex-col gap-2 pt-4">
                <div className=" flex flex-col">
                  <div className="w-full flex justify-between">
                    <div
                      className=" p-2 text-start font-semibold text-lg"
                      style={{ width: "30%" }}
                    >
                      From
                    </div>
                    <div style={{ width: "20%" }}></div>
                    <div
                      className=" p-2 !text-start font-semibold text-lg"
                      style={{ width: "30%" }}
                    >
                      To
                    </div>
                    <div
                      className=" p-2 !text-start font-semibold text-lg"
                      style={{ width: "20%" }}
                    >
                      Request#
                    </div>
                  </div>
                  <div className="w-full flex">
                    <div className="p-2 text-start" style={{ width: "30%" }}>
                      {move.moving_from}
                    </div>
                    <div
                      className="p-2 flex justify-center"
                      style={{ width: "20%" }}
                    >
                      <div className=" w-14 h-14 rounded-full  flex items-center justify-center shadow-2xl">
                        <ForwardIcon />
                      </div>
                    </div>
                    <div className=" p-2 text-start" style={{ width: "30%" }}>
                      {move.moving_to}
                    </div>
                    <div
                      className=" p-2 text-start font-bold"
                      style={{ color: "rgb(219,96,75)", width: "20%" }}
                    >
                      {move.estimate_id}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-6">
                    <div className="w-[10%] flex justify-center items-center gap-1">
                      <HomeIcon />
                      <p>{move.property_size}</p>
                    </div>
                    <div className="w-[10%] flex justify-center items-center gap-1">
                      <Blocks />
                      <p>{move.new_floor_no}</p>
                    </div>
                    <div className="w-[10%] flex justify-center items-center gap-1">
                      <DistanceIcon />
                      {move.distance}
                    </div>
                    <div className="w-[10%] flex justify-center items-center gap-1">
                      <CalendarIcon />
                      {move.moving_on}
                    </div>
                    <div className="w-[10%] flex justify-center items-center gap-1">
                      <CheckIcon />
                      <p>isFlexible</p>
                    </div>
                  </div>
                  <div className=" flex gap-4 items-center">
                    <button
                      onClick={() => {
                        if (selectedmoveId === move.estimate_id) {
                          setMoveDetails(null);
                          setSelectedMoveId(null);
                        } else {
                          setMoveDetails(move);
                          setSelectedMoveId(move.estimate_id);
                        }
                      }}
                    >
                      View move details
                    </button>
                    <button className="buttonFill">Quotes Awaiting</button>
                  </div>
                </div>
                <div className=" flex items-center gap-2">
                  <DisclaimerIcon />
                  <p>
                    <span className=" font-semibold">Disclaimer:</span> Please
                    update your move date before two days of shifting{" "}
                  </p>
                </div>
                {moveDetails && selectedmoveId === move.estimate_id && (
                  <MoveDetails moveDetails={moveDetails} />
                )}
                <div
                  className=" w-full bg-gray-400 mt-4 opacity-60"
                  style={{ height: "2px" }}
                ></div>
              </div>
            );
          })}
      </div>
    );
};