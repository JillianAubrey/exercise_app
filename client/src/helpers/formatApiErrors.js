export default function formatApiErrors(errorData, formatCallback){
  return Object.entries(errorData).map((error) => {
    const errorMessage =`${error[0] === 'errors' ? '' : error[0]} ${error[1][0]}`;
    if (!formatCallback) return errorMessage;
    return formatCallback(errorMessage);
  })
}