import React, { Fragment } from "react";
import CardLeft from "../CardLeft";
import NumberInput from "../../form_elements/NumberInput";
import TextArea from "../../form_elements/TextArea";
import { FormControlLabel, Switch } from "@mui/material";

export default function Exercise(props) {
  const {
    name,
    category,
    gif_url,
    handleFormSubmit,
    data,
    handleInputChange,
    timed,
    handleTimed,
    error,
  } = props;
  const cardLeftProps = { gif_url, name, category };

  return (
    <Fragment>
      <CardLeft {...cardLeftProps} />
      <section className="exercise__card-right">
        <div className="exercise__card-header">
          <h1> {name} </h1>
          <div className="exercise__card-divider"></div>
          <p> {category} </p>
        </div>
        <form
          autoComplete="off"
          className="exercise__card--form-form"
          onSubmit={handleFormSubmit}
        >
          {timed && (
            <NumberInput
              className="exercise__card--form-duration"
              name="duration"
              value={data.duration || ""}
              onChange={handleInputChange}
              label="Duration (seconds)"
            />
          )}
          {!timed && (
            <div className="exercise__card--form-sets-reps">
              <NumberInput
                className="exercise__card--form-sets"
                name="sets"
                value={data.sets || ""}
                onChange={handleInputChange}
                label="Sets"
              />
              <NumberInput
                className="exercise__card--form-reps"
                name="reps"
                value={data.reps || ""}
                onChange={handleInputChange}
                label="Reps"
              />
            </div>
          )}
          <TextArea
            className="exercise__card--form-note"
            name="note"
            placeHolder="(optional)"
            value={data.note || ""}
            onChange={handleInputChange}
            rows="3"
            label="Note"
          />
        </form>
        {error && <p>{error}</p>}
        <FormControlLabel
          className="switch"
          control={
            <Switch
              onClick={handleTimed}
              defaultChecked={timed}
              color="success"
            />
          }
          label={timed ? "Timed" : "Untimed"}
        />
      </section>
    </Fragment>
  );
}
