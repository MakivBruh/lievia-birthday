import BirthdayEvents from "./BirthdayEvent";
import BirthdayVerse from "./BirthdayVerse";
import MakeAWish from "./MakeAWish";
import Reservation from "./Reservation";

export default function Event() {
    return (
      <div className="relative flex flex-col items-center text-center  bg-gradient-to-b from-sky-600 to-sky-200 mx-auto py-10">
        <BirthdayEvents />
        <BirthdayVerse />
        <MakeAWish />
        <Reservation />
      </div>
    );
}