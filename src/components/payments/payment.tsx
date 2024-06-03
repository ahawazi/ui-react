import CalendarDays from "../svgs/calendarDays";

export default function Payment() {
  return (
    <>
      <div className="flex p-4 items-center space-x-5 space-x-reverse border border-gray-300 rounded-xl">
        <p className="font-semibold">اقای رضا صادقی از تهران به مبلغ:</p>

        <p className="font-bold text-onSecondary">2.578.000ریال</p>

        <p className="font-semibold">بابت:</p>

        <p className="font-bold text-onSecondary">نذر فرزندان غدیر</p>

        <div className="flex items-center space-x-2 space-x-reverse">
          <p className="font-semibold">در تاریخ:</p>
          <p className="font-bold text-onSecondary">1403/6/25</p>
          <CalendarDays className="text-onSecondary w-4 h-4"/>
        </div>
      </div>
    </>
  );
}
