import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { Card } from "primereact/card";
import somee from './assets/tt.png'

// import { Timeline } from "primereact/timeline";
// import { Card } from "primereact/card";
import "../App.css";
import { PhotoService } from "./ImageService/ImageService";
import { PhotoServices } from "./ImageService/ImageServices";

import { Galleria } from "primereact/galleria";
import { Button } from "primereact/button";
// import hatchback from "./assets/hatchback.png";
// import sedan from "./assets/sedan.png";
import oneTime from "./assets/oneTime.jpg";
import interior from "./assets/interior.jpg";
import serPic from "./assets/serviceT.jpg";
import { ScrollTop } from "primereact/scrolltop";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [images, setImages] = useState(null);

  const [images2, setImages2] = useState(null);
  const [imagess, setImagess] = useState(null);

  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const galleriaService = new PhotoService();
  const galleriaServices = new PhotoServices();

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  const responsiveOptionss = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  useEffect(() => {
    galleriaService.getImages().then((data) => {
      setImages(data);
      setImages2(data.slice(0, 5));
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    galleriaServices.getImagess().then((data) => setImagess(data));
  }, []);

  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item.alt}
        className="imageWork"
      />
    );
  };

  const itemTemplatess = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item.alt}
        style={{ width: "100%" }}
      />
    );
  };

  // const thumbnailTemplatess = (item) => {
  //   return (
  //     <img
  //       src={item.thumbnailImageSrc}
  //       onError={(e) =>
  //         (e.target.src =
  //           "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
  //       }
  //       alt={item.alt}
  //     />
  //   );
  // };

  const caption = (item) => {
    return (
      <div className="captionThis">
        <h3 className="mb-2">{item.title}</h3>
        <p>{item.alt}</p>
      </div>
    );
  };

  const header = (
    <img
      alt="Card"
      src={serPic}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const headers = (
    <img
      alt="Card"
      src={interior}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const headerss = (
    <img
      alt="Card"
      src={oneTime}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const handless = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handless1 = () => {
    ref1.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handless2 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };

  const footer = (
    <span>
      <Button
        label="Know More"
        className="p-button-warning"
        onClick={handless}
      />
    </span>
  );
  const footer1 = (
    <span>
      <Button
        label="Know More"
        className="p-button-warning"
        onClick={handless1}
      />
    </span>
  );
  const footer2 = (
    <span>
      <Button
        label="Know More"
        className="p-button-warning"
        onClick={handless2}
      />
    </span>
  );

  // let navigate = useNavigate();

  // const handllesh = () => {
  //   navigate("/contact", { replace: true });
  // };

  // Last galleria

  return (
    <div className="ulti">
      <div className="">
        <Galleria
          value={images}
          responsiveOptions={responsiveOptions}
          caption={caption}
          showThumbnails={false}
          item={itemTemplate}
          circular
          autoPlay
          transitionInterval={4000}
        />
      </div>

      <div className="b-example-divider"></div>

      <div className="backk">
        <p className="serverr">Service Types</p>
        <div className="serviceCards">
          <Card
            title="Carwash Subscription plan"
            style={{ width: "25em", marginBottom: "15px" }}
            footer={footer}
            header={header}
            className="saree"
          >
            <p className="m-0" style={{ lineHeight: "1.5" }}>
              focused on providing complete care and maintanance that your car
              needs. We offer plans for 15days and for 13days which also inludes
              Basic Interior Cleaning.
            </p>
          </Card>
          <Card
            title="Members Only"
            style={{ width: "25em", marginBottom: "15px" }}
            footer={footer1}
            header={headers}
            className="saree"
          >
            <p className="m-0" style={{ lineHeight: "1.5" }}>
              "Leave the Dirt Behind" is not just our slogan. Choose this plan
              if you want discounted rates and special perks than a normal user!
            </p>
          </Card>
          <Card
            title="One time services"
            style={{ width: "25em", marginBottom: "15px" }}
            footer={footer1}
            header={headerss}
            className="saree"
          >
            <p className="m-0" style={{ lineHeight: "1.5" }}>
              Experts auto detailing servives will be estimated based upon the
              vehical model, year of manufacture and requirements adhering to
              the changes
            </p>
          </Card>
        </div>
      </div>

      <div>
        <ScrollTop threshold={200} />

        <div className="mt-6 surface-0">
          <div
            className="text-900 font-bold text-6xl mb-4 text-center py-5"
            ref={ref}
          >
            Subscription Plans
          </div>
          <div className="text-700 text-xl mb-6 text-center line-height-3 py-5 px-4">
            The goal is to ensure that the exteriors as well as the interiors of
            the car is clean and dust free, that is why every single step of the
            washing process is planned and handled with utmost care. Starting
            from using our polymer formula to clean the cars which not gives an
            instant shiny look to your car,{" "}
            <b>
              but also helps save water and millions of life on this planet.
            </b>
          </div>
          <p className="cento">
            <span className="text-900">Car Subscription </span>
            <span className="text-blue-600">Plans</span>
          </p>
          <div className="carWashSubs">
            <div className="mx-5">
              <Card
                title="FORTNIGHT"
                className="strr"
                style={{
                  background: "#373B44",
                  background:
                    "-webkit-linear-gradient(to left, #4286f4, #373B44)" /* Chrome 10-25, Safari 5.1-6 */,
                  background:
                    "linear-gradient(to left, #4286f4, #373B44)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
                  padding: "2rem",
                  width: "25rem",
                  height:"30rem",
                  marginBottom: "2em",
                  color: "#ff9900",
                  textAlign: "center",
                }}
              >
                <div className="loco">
                  <p className="dada">
                    15 Days <span className="staa">(Starts @ INR 599)</span>
                  </p>
                  <ul>
                    <li>3 Exterior Cleaning</li>
                    <li>3 Tyre Polish & Glass Polish</li>
                    <li>1 Interior Vacuuming</li>
                    <li>1 Engine Deep Cleaning Service</li>
                    <li>1 Dashboard Polish</li>
                    <li>1 Door Pad Polish</li>
                  </ul>
                </div>
              </Card>
            </div>
            <div className="mx-5">
              <Card
                title="MONTHLY"
                className="strr"
                style={{
                  background: "#373B44",
                  background:
                    "-webkit-linear-gradient(to right, #4286f4, #373B44)" /* Chrome 10-25, Safari 5.1-6 */,
                  background:
                    "linear-gradient(to right, #4286f4, #373B44)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
                  padding: "2rem",
                  width: "25rem",
                  marginBottom: "2em",
                  color: "#ff9900",
                  textAlign: "center",
                  padding: "2rem",
                }}
              >
                <div className="loco">
                  <p className="dada">30 Days</p>

                  <ul>
                    <li>5 Exterior Cleaning</li>
                    <li>5 Tyre Polish & Glass Polish</li>
                    <li>1 Interior Vacuuming</li>
                    <li> 1 Engine Deep Cleaning Service</li>
                    <li>1 Door Pad Polish </li>
                    <li>1 Vehicle Check Up</li>
                    <li>1 Dashboard Polish</li>
                    <li>1 Rat Repellent service with 1 month waranty</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
          <p className="cento" ref={ref1}>
            <span className="text-900">Members </span>
            <span className="text-blue-600">Only</span>
          </p>
          <div className="carWashSubs">
            <div className="mx-5">
              <Card
                title="3 MONTHS - INR 799"
                className="strr"
                style={{
                  background: "#373B44",
                  background:
                    "-webkit-linear-gradient(to left, #4286f4, #373B44)" /* Chrome 10-25, Safari 5.1-6 */,
                  background:
                    "linear-gradient(to left, #4286f4, #373B44)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
                  padding: "2rem",
                  width: "25rem",
                  marginBottom: "2em",
                  color: "#ff9900",
                  textAlign: "center",
                }}
              >
                <div className="loco">
                  <p className="dada">30 Days</p>
                  {/* <ul>
                    <li>2 Vaccum cleaning and Blowing off dust</li>
                    <li>2 Dashboard cleaning and applying protection</li>
                    <li>
                      2 Cleaning of uphoistery depending on the product chosen
                    </li>
                    <li>2 Cleaning of all glasses and door panels</li>
                    <li>2 Dashboard waxing once a month</li>
                    <li>
                      2 Complete check of AC vent, Brake Oil, Tyre Guage and
                      Engine Oil.
                    </li>
                  </ul> */}
                </div>
              </Card>
            </div>
            <div className="mx-5">
              <Card
                title="6 MONTHS - INR 1499"
                className="strr"
                style={{
                  background: "#373B44",
                  background:
                    "-webkit-linear-gradient(to right, #4286f4, #373B44)" /* Chrome 10-25, Safari 5.1-6 */,
                  background:
                    "linear-gradient(to right, #4286f4, #373B44)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
                  padding: "2rem",
                  width: "25rem",
                  marginBottom: "2em",
                  color: "#ff9900",
                  textAlign: "center",
                  padding: "2rem",
                }}
              >
                <div className="loco">
                  <p className="dada">60 Days</p>

                  {/* <ul>
                    <li>5 Vaccum cleaning and Blowing off dust</li>
                    <li>5 Dashboard cleaning and applying protection</li>
                    <li>
                      5 Cleaning of uphoistery depending on the product chosen
                    </li>
                    <li>5 Cleaning of all glasses and door panels</li>
                    <li>5 Dashboard waxing once a month</li>
                    <li>
                      5 Complete check of AC vent, Brake Oil, Tyre Guage and
                      Engine Oil.
                    </li>
                  </ul> */}
                </div>
              </Card>
            </div>
            <div className="mx-5">
              <Card
                title="9 MONTHS - INR 2499"
                className="strr"
                style={{
                  background: "#373B44",
                  background:
                    "-webkit-linear-gradient(to right, #4286f4, #373B44)" /* Chrome 10-25, Safari 5.1-6 */,
                  background:
                    "linear-gradient(to right, #4286f4, #373B44)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
                  padding: "2rem",
                  width: "25rem",
                  marginBottom: "2em",
                  color: "#ff9900",
                  textAlign: "center",
                  padding: "2rem",
                }}
              >
                <div className="loco">
                  <p className="dada">90 Days</p>

                  {/* <ul>
                    <li>5 Vaccum cleaning and Blowing off dust</li>
                    <li>5 Dashboard cleaning and applying protection</li>
                    <li>
                      5 Cleaning of uphoistery depending on the product chosen
                    </li>
                    <li>5 Cleaning of all glasses and door panels</li>
                    <li>5 Dashboard waxing once a month</li>
                    <li>
                      5 Complete check of AC vent, Brake Oil, Tyre Guage and
                      Engine Oil.
                    </li>
                  </ul> */}
                </div>
              </Card>
            </div>
          </div>
          <div className="mb-3 font-bold text-2xl yols">
            <span className="text-900">One Time </span>
            <span className="text-blue-600">Services</span>
          </div>
          {/* new slider for one time */}
          <div className="yols">
            <div className="card">
              <Galleria
                value={imagess}
                responsiveOptions={responsiveOptionss}
                numVisible={5}
                style={{ maxWidth: "640px" }}
                item={itemTemplatess}
                caption={caption}
                showThumbnails={false}
                circular
                autoPlay
              />
            </div>
          </div>
          <div className="pricii">
            <h1> Pricing</h1>
            <img src={somee} className="immm"/>
          </div>
          {/* <div>
            <div className="surface-0 text-center">
              <div className="mb-3 font-bold text-2xl">
                <span className="text-900">One Time </span>
                <span className="text-blue-600">Services</span>
              </div>
              <div className="text-700 text-sm mb-6">
                No Subscription plan required{" "}
              </div>
              <div className="grid">
                <div className="col-12 md:col-2 mb-4 px-5">
                  <span
                    className="p-3 shadow-2 mb-3 inline-block"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="pi pi-thumbs-up text-4xl text-blue-500"></i>
                  </span>
                  <div className="text-900 mb-3 font-medium">
                    Waterless Carwash
                  </div>
                </div>
                <div className="col-12 md:col-2 mb-4 px-5">
                  <span
                    className="p-3 shadow-2 mb-3 inline-block"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="pi pi-thumbs-up text-4xl text-blue-500"></i>
                  </span>
                  <div className="text-900 mb-3 font-medium">
                    Full Body Carwash
                  </div>
                </div>
                <div className="col-12 md:col-2 mb-4 px-5">
                  <span
                    className="p-3 shadow-2 mb-3 inline-block"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="pi pi-thumbs-up text-4xl text-blue-500"></i>
                  </span>
                  <div className="text-900 mb-3 font-medium">
                    Interior deep cleaning
                  </div>
                </div>
                <div className="col-12 md:col-2 mb-4 px-5">
                  <span
                    className="p-3 shadow-2 mb-3 inline-block"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="pi pi-thumbs-up text-4xl text-blue-500"></i>
                  </span>
                  <div className="text-900 mb-3 font-medium">
                    Rat/Pest Repellant
                  </div>
                </div>
                <div className="col-12 md:col-2 mb-4 px-5">
                  <span
                    className="p-3 shadow-2 mb-3 inline-block"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="pi pi-thumbs-up text-4xl text-blue-500"></i>
                  </span>
                  <div className="text-900 mb-3 font-medium">
                    AC vent cleaning
                  </div>
                </div>
                <div className="col-12 md:col-2 md:mb-4 mb-0 px-3">
                  <span
                    className="p-3 shadow-2 mb-3 inline-block"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="pi pi-thumbs-up text-4xl text-blue-500"></i>
                  </span>
                  <div className="text-900 mb-3 font-medium">
                    Upholstery Cleaning
                  </div>
                </div>
                <div className="col-12 md:col-2 md:mb-4 mb-0 px-3">
                  <span
                    className="p-3 shadow-2 mb-3 inline-block"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="pi pi-shield text-4xl text-orange-500"></i>
                  </span>
                  <div className="text-900 mb-3 font-medium">
                    Sanitization and Germ Cleaning
                  </div>
                </div>
                <div className="col-12 md:col-2 md:mb-4 mb-0 px-3">
                  <span
                    className="p-3 shadow-2 mb-3 inline-block"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="pi pi-shield text-4xl text-orange-500"></i>
                  </span>
                  <div className="text-900 mb-3 font-medium">Paining</div>
                </div>
                <div className="col-12 md:col-2 md:mb-4 mb-0 px-3">
                  <span
                    className="p-3 shadow-2 mb-3 inline-block"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="pi pi-shield text-4xl text-orange-500"></i>
                  </span>
                  <div className="text-900 mb-3 font-medium">
                    Sunroof Service
                  </div>
                </div>
                <div className="col-12 md:col-2 md:mb-4 mb-0 px-3">
                  <span
                    className="p-3 shadow-2 mb-3 inline-block"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="pi pi-shield text-4xl text-orange-500"></i>
                  </span>
                  <div className="text-900 mb-3 font-medium">
                    Ceramic Coating
                  </div>
                </div>
                <div className="col-12 md:col-2 md:mb-4 mb-0 px-3">
                  <span
                    className="p-3 shadow-2 mb-3 inline-block"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="pi pi-shield text-4xl text-orange-500"></i>
                  </span>
                  <div className="text-900 mb-3 font-medium">
                    Teflon Coating
                  </div>
                </div>
                <div className="col-12 md:col-2 md:mb-4 mb-0 px-3">
                  <span
                    className="p-3 shadow-2 mb-3 inline-block"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="pi pi-shield text-4xl text-orange-500"></i>
                  </span>
                  <div className="text-900 mb-3 font-medium">
                    PPF Edge Protectors
                  </div>
                </div>
                <div className="col-12 md:col-2 md:mb-4 mb-0 px-3">
                  <span
                    className="p-3 shadow-2 mb-3 inline-block"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="pi pi-star text-4xl text-green-500"></i>
                  </span>
                  <div className="text-900 mb-3 font-medium">Nano Coating</div>
                </div>
                <div className="col-12 md:col-3 md:mb-4 mb-0 px-3">
                  <span
                    className="p-3 shadow-2 mb-3 inline-block"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="pi pi-star text-4xl text-green-500"></i>
                  </span>
                  <div className="text-900 mb-3 font-medium">
                    Anti-Rust Underbody Coating
                  </div>
                </div>
                <div className="col-12 md:col-3 md:mb-4 mb-0 px-3">
                  <span
                    className="p-3 shadow-2 mb-3 inline-block"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="pi pi-star text-4xl text-green-500"></i>
                  </span>
                  <div className="text-900 mb-3 font-medium">
                    Car Fluid Check
                  </div>
                </div>
                <div  className="col-12 md:col-2 md:mb-4 mb-0 px-3">
                  <span
                    className="p-3 shadow-2 mb-3 inline-block"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="pi pi-star text-4xl text-green-500"></i>
                  </span>
                  <div className="text-900 mb-3 font-medium">
                    Brake Maintanance
                  </div>
                </div>
                <div className="col-12 md:col-2 md:mb-4 mb-0 px-3">
                  <span
                    className="p-3 shadow-2 mb-3 inline-block"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="pi pi-star text-4xl text-green-500" ref={ref2}></i>
                  </span>
                  <div className="text-900 mb-3 font-medium">Full Service</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
