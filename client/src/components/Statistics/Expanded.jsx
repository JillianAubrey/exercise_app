export default function Expanded(props) {
  const { statistics, onClick, errors } = { ...props };

  const errorElements =
    errors &&
    errors.map((error, index) => {
      return (
          <p className="error" key={index}> {error} </p>
      );
    });

  const statList =
    statistics &&
    statistics.map((userstat) => {
      const { name, all_walkthroughs, last_week_walkthroughs } = userstat;

      return (
        <div className="stat_item">
          <h1 className="stat_item-header">{name}</h1>
          <p className="state_item-info">
            Past Week: <span>{last_week_walkthroughs}</span>{" "}
            {last_week_walkthroughs === 1 ? "walkthrough" : "walkthroughs"}
          </p>
          <p className="state_item-info">
            {" "}
            All time: <span>{all_walkthroughs}</span>{" "}
            {all_walkthroughs === 1 ? "walkthrough" : "walkthroughs"}
          </p>
        </div>
      );
    });

  return (
    <section className="statistics__card-show" onClick={onClick}>
      {statList}
      {errors && errorElements}
    </section>
  );
}
