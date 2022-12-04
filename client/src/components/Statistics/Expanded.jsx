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
    statistics.length 
    ? statistics.map((userstat) => {
        const { name, all_walkthroughs, last_week_walkthroughs } = userstat;

        return (
          <div className="stat_item">
            <h3 className="stat_item-header">{name}</h3>
            <p className="stat_item-info">
              Past Week: <span>{last_week_walkthroughs}</span>{" "}
              {last_week_walkthroughs === 1 ? "walkthrough" : "walkthroughs"}
            </p>
            <p className="stat_item-info">
              {" "}
              All time: <span>{all_walkthroughs}</span>{" "}
              {all_walkthroughs === 1 ? "walkthrough" : "walkthroughs"}
            </p>
          </div>
        );
      })
    : <p className="stat_item-empty">No walkthroughs yet</p>
    

  return (
    <section className="stat_item--container" onClick={onClick}>
      <div class="stat_item-divider" />
      {statList}
      {errors && errorElements}
    </section>
  );
}
