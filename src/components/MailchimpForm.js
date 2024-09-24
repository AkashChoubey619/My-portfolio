import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";
import { useState } from "react";
import React from "react";

export const MailchimpForm = () => {

  const [status,setStatus]=useState('');
  const message='subscribed';

  return (
    <>
      <MailchimpSubscribe
        render={() => (
          <Newsletter
            status={status}
            setStatus={setStatus}
            message={message}
            onValidated={formData => console.log(formData)}
            />
        )}
        />
    </>
  )
}
