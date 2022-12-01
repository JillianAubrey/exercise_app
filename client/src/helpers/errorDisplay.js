
const errorDisplay = function(errorsArray) {

  let key = 0;
  const errorElements =
    errorsArray &&
    errorsArray.map((error) => {
      key++
      return <p className="error custom__error" key={key}> {error} </p>;
    });

  return errorElements;

}

export default errorDisplay;