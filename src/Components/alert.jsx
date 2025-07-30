import Link from "next/link"

export default function ShowAlert(props){

   return(
    <div class={`alert alert-${props.alert_class} alert-dismissible fade show`} role="alert">
        {props.msg}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

    </div>
   )
}