import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toast } from "primereact/toast";

const Contact = () => {
  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success Message",
      detail: "Message Content",
      life: 4000,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    // var user = document.getElementsByClassName('user_name')
    // var email = document.getElementsByClassName('user_email')

    

        e.preventDefault();

        emailjs
          .sendForm(
            "service_4qv4otl",
            "template_stvl8es",
            e.target,
            "UEmLTYfnfEh7BbfhN"
          )
          .then(
            (result) => {
              console.log(result);
            },
            (error) => {
              console.log(error.text);
            }
          );
        e.target.reset();
      

    // }

  };

  return (
    <div className="baap">
      <div className="">
        <Toast ref={toast} />

        <div className=" conPage">
          <div className="concon">
            <div className="d-flex">
              <i className="pi pi-map-marker" style={{ fontSize: "2em" }}></i>
              <p className="addd">Address </p>
            </div>

            <p>
              {" "}
              #31, 4th cross, Ramaiah Layout <br />
              Kammanahalli- Bangalore : 560084
            </p>
          </div>

          <div className="concon">
            <div className="d-flex">
              <i className="pi pi-google" style={{ fontSize: "2em" }}></i>
              <p className="addd">Email </p>
            </div>

            <p>arroadrunners@gmail.com</p>
          </div>

          <div className="concon">
            <div className="d-flex">
              <i className="pi pi-phone" style={{ fontSize: "2em" }}></i>
              <p className="addd">Phone </p>
            </div>

            <p>+91- 9845809350</p>
          </div>

          <div className="concon  ">
            <div className="d-flex">
              <i className="pi pi-clock" style={{ fontSize: "2em" }}></i>
              <p className="addd">Timings </p>
            </div>
            <p>9AM - 6PM (OPEN ALL DAY)</p>
          </div>
        </div>

        <div className="contactPageMain">
          <div className="formmm">
            <form ref={form} onSubmit={sendEmail} className="formInt">
              <label className="tags">Name</label>
              <input type="text" name="user_name" placeholder="Your Name" />
              <br />
              <br />
              <label className="tags">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="youremail@xyz.com"
              />
              <br />
              <br />
              <label className="tags">Phone Number</label>
              <input type="number" name="number" placeholder="+91-XXXXXXXX" />
              <br />
              <br />
              <label className="tags">Car Type</label>
              <select name="cars" >
                <option value="hatchback">Hatch Back</option>
                <option value="sedan">Sedan</option>
                <option value="m-suv">M-SUV</option>
                <option value="suv">SUV</option>
                <option value="muv">MUV</option>
              </select>{" "}
              <br />
              <br />
              <label className="tags">Service Required</label>
              <select name="cleaning">
                <option value="baicclean">Basic Cleaning</option>
                <option value="deepclean">Deep Cleaning</option>
                <option value="deepclean">Other AddOns</option>
              </select>{" "}
              <br />
              <br />
              <label className="tags">Message</label>
              <textarea name="message" />
              <input
                type="submit"
                value="Send"
                label="Success"
                className="p-button-success"
                onClick={showSuccess}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
