import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkins = confirmedStays.length;

  const rate = (Math.random() * 100).toFixed(2);

  return (
    <>
      <Stat
        title="Booings"
        color="blue"
        value={numBookings}
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title="Sales"
        color="green"
        value={formatCurrency(sales)}
        icon={<HiOutlineBanknotes />}
      />

      <Stat
        title="Check ins"
        color="indigo"
        value={checkins}
        icon={<HiOutlineCalendarDays />}
      />

      <Stat
        title="Rate"
        color="yellow"
        value={rate}
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
