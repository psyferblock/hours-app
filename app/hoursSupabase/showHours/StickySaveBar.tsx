"use client";

import { useManageOpeningHoursContext } from "@/app/store/openingClosingStore";
import { supabase } from "@/utils/SupabaseBrowser";
import addOpeningHours from "./supabaseFunctions/addOpeningHours";
import addClosingHours from "./supabaseFunctions/addClosingHours";


export default function StickySaveBar(props) {
  const entityId = 'a7fb29ed-3b7a-452b-a284-ae2a2dff14bb';
  
  //call the state from the reducer store 
  const contextState=useManageOpeningHoursContext()

  async function handleSaveButton() {
   //these are the functions we have to write for supabase in order to send the information
    addClosingHours(
        contextState.openingHoursMondayFriday,
        contextState.openingHoursSaturday,
       contextState.openingHoursSunday,
       entityId,
    )
    addOpeningHours(
        contextState.closingHoursMondayFriday,
        contextState.closingHoursSaturday,
        contextState.closingHoursSunday,
       entityId,

    )
    console.log('saved')
   
  }

  //Function that removes the objects that were added but then user pressed on "Cancel" instead of "Save"
  function handleCancelButton() {
    
  }


  return (
    <div
      className="bg-gray-500 opacity-95 h-14 fixed bottom-0 left-0 right-0 py-2 px-12 flex justify-end space-x-5"
      onClick={() => handleCancelButton()}
    >
      <button className="w-28 h-10 rounded-3xl bg-white border hover:bg-gray-200 border-gray-600 text-black text-sm ">
        Cancel
      </button>
      <button
        className="w-28 h-10 rounded-3xl bg-blue-600 border hover:bg-blue-700 border-gray-600 text-black text-sm "
        onClick={() => handleSaveButton()}
      >
        Save
      </button>
    </div>
  );
}
