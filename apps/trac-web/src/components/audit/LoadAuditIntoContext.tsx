import {useEffect} from "react";
import {useTracContext} from "../../TracContext";
import {LoadAccountIntoContext} from "../account/LoadAccountIntoContext";
import {LoadSalesRepIntoContext} from "../account/LoadSalesRepIntoContext";


export const LoadAuditIntoContext = ({summary}) => {
  const {getTracContext, setTracContext} = useTracContext();
  const auditFromContext = getTracContext('auditSummary');
  //console.log('audit summary', summary)
  useEffect(() => {
    // Store audit location into context if there have been changes
    if(summary !== null) {
        // console.log('resetting audit location', summary, auditFromContext);
        setTracContext('auditSummary', summary);
    }
  }, [summary]);
  return <>
    <LoadAccountIntoContext accountCode={summary?.location_code}/>
    <LoadSalesRepIntoContext accountCode={summary?.location_code}/>
  </>;
}
