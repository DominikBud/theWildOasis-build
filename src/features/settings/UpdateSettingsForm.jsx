import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSettings } from "./useUpdateSettings";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minimumBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  const [updateSettings, isEditingSettings] = useUpdateSettings();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;

    const setting = { [field]: value };
    updateSettings(setting);
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          defaultValue={minimumBookingLength}
          type="number"
          id="min-nights"
          disabled={isEditingSettings}
          onBlur={(e) => handleUpdate(e, "minimumBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          defaultValue={maxBookingLength}
          type="number"
          id="max-nights"
          disabled={isEditingSettings}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          defaultValue={maxGuestsPerBooking}
          type="number"
          id="max-guests"
          disabled={isEditingSettings}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          defaultValue={breakfastPrice}
          type="number"
          id="breakfast-price"
          disabled={isEditingSettings}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
