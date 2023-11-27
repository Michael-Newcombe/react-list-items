import {Error} from "../ts/typeAliases";

function ErrorMessage(props: Error){
  return(
    <div className="error-message-container">
      <p>{props.text}</p>
    </div>
  )
}

export default ErrorMessage;