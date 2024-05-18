import CalendarDays from "../svgs/calendarDays";

export default function Payment() {
  return (
    <>
      <div className="flex p-4 items-center space-x-5 space-x-reverse border border-gray-500 rounded-xl">
        <p className="font-semibold">اقای رضا صادقی از تهران به مبلغ:</p>

        <p className="font-bold text-purple-600">2.578.000ریال</p>

        <p className="font-semibold">بابت:</p>

        <p className="font-bold text-purple-600">نذر فرزندان غدیر</p>

        <p className="font-semibold">در تاریخ:</p>

        <div className="flex items-center space-x-2 space-x-reverse">
          <p className="font-bold text-purple-600">1403/6/25</p>
          <CalendarDays />
        </div>
      </div>
    </>
  );
}
