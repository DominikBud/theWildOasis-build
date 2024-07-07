import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBookingId, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteBooking(id),

    onSuccess: () => {
      toast.success(`Booking was sucessfuly deleted`);

      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteBookingId, isDeleting };
}
