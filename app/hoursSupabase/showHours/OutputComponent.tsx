import { useManageOpeningHoursContext } from "@/app/store/openingClosingStore";
import  from "./supabaseFunctions/getClosingHours";
import getOpeningHours from "./supabaseFunctions/getOpeningHours";

const OutputComponent = () => {
  const entityId = "a7fb29ed-3b7a-452b-a284-ae2a2dff14bb";

  const arrayHours = [""];
  const opening = getOpeningHours(entityId)
    .then((res) =>
    {
      JSON.stringify(res)
      console.log(res)
      }
      console.log()
    )
  const closing = getClosingHours(entityId);

  console.log("opening", arrayHours);
  // console.log("closing", closing);

  const hours = [{ days: [1] }, { days: [2] }, { days: [3] }];

  const numberToDay = (day) => {
    switch (day) {
      case 1:
        return "Monday-friday";
      case 2:
        return "Saturday";
      case 3:
        return "Sunday";
    }
  };

  const listElements = hours.map((element, index) => {
    const days = element.days.map((item) => {
      return numberToDay(item);
    });

    return (
      <tr key={index}>
        <td>{days.join()}</td>
        <td>{"s"}</td>
        <td>{"D"}</td>
      </tr>
    );
  });

  return (
    <div className="">
      <table>
        <thead>
          <tr>
            <th>Days</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>{listElements}</tbody>
      </table>
      <div></div>
    </div>
  );
};

export default OutputComponent;
