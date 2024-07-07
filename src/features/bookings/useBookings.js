import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  //sort
  const sortByParams = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByParams.split("-");

  //pagination
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const { data: { data: bookings, count } = {}, isLoading } = useQuery({
    queryKey: ["bookings", filterValue, sortByParams, currentPage],
    queryFn: () =>
      getBookings({ filter, sortBy: { field, direction }, currentPage }),
  });

  //pre-fetching
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (currentPage < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filterValue, sortByParams, currentPage + 1],
      queryFn: () =>
        getBookings({
          filter,
          sortBy: { field, direction },
          currentPage: currentPage + 1,
        }),
    });

  if (currentPage > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filterValue, sortByParams, currentPage - 1],
      queryFn: () =>
        getBookings({
          filter,
          sortBy: { field, direction },
          currentPage: currentPage - 1,
        }),
    });

  return [bookings, isLoading, count];
}
