import React, { useEffect } from 'react';

const HubspotForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/v2.js";
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
            region: "na1",
            portalId: "47645115",
            formId: "9085506c-e769-4b7f-8dc3-f82002f86066",
          target: '#hubspotForm'
        });
      }
    };

    document.body.appendChild(script);

    // Clean up on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
   <>
    <h2 className='gallery-h2' >Ready to take a free trial?</h2>
    <h2 className='gallery-p' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br> tempor incididunt ut labore</h2>
    <div style={{display:'flex', justifyContent:"center", marginTop:"3vh" }}   >
      <div id="hubspotForm"></div>
    </div>
   </>
  );
};

export default HubspotForm;
