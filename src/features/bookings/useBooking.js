import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();

  const { isLoading, data, error } = useQuery({
    queryFn: () => getBooking(bookingId),
    queryKey: ["booking", bookingId],
  });

  return { isLoading, data };
}
