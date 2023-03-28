import React from "react";
import { ManageOpeningHoursContextProvider } from "../store/openingClosingStore";
import ManageWorkingHours from "./showHours/manageOpeningHours";
import OutputComponent from "./showHours/outputComponent";
import StickySaveBar from "./showHours/StickySaveBar";



function HoursPage() {
  const hoursInput= [
    { days: [1], from: "09:00", to: "21:00" },
    { days: [2], from: "11:00", to: "21:00" },
    { days: [3], from: "11:00", to: "21:00" },

  ];
  
  
  return (
    <ManageOpeningHoursContextProvider hoursInput={hoursInput}>


    <div>
      <div className="divide-dashed md:divide-solid">
        <div className="basis-0">
          <ManageWorkingHours />
        </div>
        <div className="basis-0">
          <OutputComponent />
        </div>
      </div>
      <StickySaveBar/>
    </div>
    </ManageOpeningHoursContextProvider>
  );
}

export default HoursPage;
