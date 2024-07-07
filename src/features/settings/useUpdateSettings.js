import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingsApi } from "../../services/apiSettings";

export function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { mutate: updateSettings, isEditing: isEditingSettings } = useMutation({
    mutationFn: updateSettingsApi,
    onSuccess: () => {
      toast.success("settings were edited");

      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return [updateSettings, isEditingSettings];
}
