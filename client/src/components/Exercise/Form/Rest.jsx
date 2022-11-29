import React from "react";
import NumberInput from "../../form_elements/NumberInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormControlLabel, Switch } from "@mui/material";

export default function Rest(props) {
  const {
    timed,
    data,
    handleFormSubmit,
    handleInputChange,
    handleTimed,
    error,
  } = props;

  return (
    <section className="exercise__card-rest">
      <h1>Rest</h1>
      <FontAwesomeIcon icon="moon" className="icon"></FontAwesomeIcon>
      {timed && (
        <form
          autoComplete="off"
          className="exercise__card--form-form"
          onSubmit={handleFormSubmit}
        >
          <NumberInput
            className="exercise__card--form-rest"
            name="duration"
            value={data.duration || ""}
            onChange={handleInputChange}
            label="Duration"
          />
        </form>
      )}
      {error && <p>{error}</p>}
      <FormControlLabel
        className="switch"
        control={
          <Switch
            onClick={handleTimed}
            defaultChecked={timed}
            color="default"
          />
        }
        label={timed ? "Timed" : "Untimed"}
      />
    </section>
  );
}
