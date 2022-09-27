import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from "primereact/card";
import "../App.css";
import { PhotoService } from "./ImageService/ImageService";
import { PhotoServices } from "./ImageService/ImageServices";
import { Galleria } from "primereact/galleria";
import { Button } from "primereact/button";
import { ScrollTop } from "primereact/scrolltop";
import oneTime from "./assets/oneTime.jpg";
import interior from "./assets/interior.jpg";
import serPic from "./assets/serviceT.jpg";
import first from "./assets/1.jpg";
import sec from "./assets/2.jpg";
import thir from "./assets/3.jpg";
import acvent from "./assets/acvent.jpg";
import five from "./assets/upholestry.jpg";
import cer from "./assets/ceramic.jpg";
import ppf from "./assets/ppf.jpg";
import under from "./assets/antiRust.jpg";
import picOne from "./assets/picOne.jpg";
import Complete from "./assets/complete.jpg";
import picTwo from "./assets/picTwo.jpeg";


import { ProductService } from './ImageService/ProductService';









const Services = () => {
  const [images, setImages] = useState(null);

  const [images2, setImages2] = useState(null);
  const [imagess, setImagess] = useState(null);

  const [products, setProducts] = useState([]);
  const productService = new ProductService();

  useEffect(() => {
    productService.getProductsSmall().then(data => setProducts(data));
}, []); // eslint-disable-line react-hooks/exhaustive-deps

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


  const he = (
    <img
      alt="Card"
      src={first}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );

  const hea = (
    <img
      alt="Card"
      src={sec}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );

  const head = (
    <img
      alt="Card"
      src={acvent}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const heade = (
    <img
      alt="Card"
      src={five}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const headee = (
    <img
      alt="Card"
      src={cer}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const headeer = (
    <img
      alt="Card"
      src={ppf}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const headeerr = (
    <img
      alt="Card"
      src={cer}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const headeerrs = (
    <img
      alt="Card"
      src={under}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );

  const headeerrss = (
    <img
      alt="Card"
      src={picOne}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const headeerrsss = (
    <img
      alt="Card"
      src={Complete}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const headeerrssss = (
    <img
      alt="Card"
      src={picTwo}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const heheh = (
    <img
      alt="Card"
      src={first}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
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

          <Card
            title="Namma Membership plan"
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

          <p className="cento" ref={ref1}>
            <span className="text-900">Members </span>
            <span className="text-blue-600">Only</span>
          </p>
          <div className="carWashSubs">
            <div className="mx-5">
              <Card
                title="3 MONTHS - INR 999"
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

                </div>
              </Card>
            </div>
            <div className="mx-5">
              <Card
                title="6 MONTHS - INR 1999"
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
                <div className="loco"></div>
              </Card>
            </div>
            <div className="mx-5">
              <Card
                title="12 MONTHS - INR 2999"
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
                <div className="loco"></div>
              </Card>
            </div>
          </div>
          <div>
            <div className="dataTab">
                <DataTable value={products} >
                    <Column field="type" header="Type"></Column>
                    <Column field="nonMember" header="Non Members"></Column>
                    <Column field="nammaMembers" header="Namma Members"></Column>
                </DataTable>
                <div>
                  <p className="mt-5"><b>** Prices may vary based on car type & additional Add-on services</b></p>
                </div>
            </div>
        </div>
          <div className="memeOnly row">
            <Card
              title="Runner Car Spa"
              style={{ width: "25em" }}
              className="col-1 mx-5"
              header={he}
            >
              <p className="m-0" style={{ lineHeight: "1.5" }}>
               <ul>
                <li>Exterior Waterless Carwash</li>
                <li>Exterior Tyre Polish</li>
                <li>Dashboard Cleaning and Polish</li>
                <li>Interior Vacuunibg of Dust</li>
                <li>Sanitization</li>
               </ul>
              </p>
            </Card>
            <Card
              title="Runner Pro Car Spa"
              style={{ width: "25em" }}
              header={hea}
              className="col-1 mx-5"

            >
              <p className="m-0" style={{ lineHeight: "1.5" }}>
               <ul>
                <li>Exterior Waterless Carwash (water wash if required)</li>
                <li>Interior Vacuuming of Dust</li>
                <li>Complete Interior Detailing</li>
                <li>Dashboard, Door mats & Door Pads cleaning & Polish </li>
                <li>Glass Polish for Protection fromheat cracking</li>
                <li>Foam Cleaning for PU & Leather</li>
                <li>Sanitization</li>
               </ul>
              </p>
            </Card>
            <Card
              title="AC Spa"
              style={{ width: "25em" }}
              header={head}
              className="col-1 mx-5"

            >
              <p className="m-0" style={{ lineHeight: "1.5" }}>
               <ul>
                <li>AC Vent Cleaning</li>
                <li>AC Inspection</li>
                <li>Dashboard Cleaning</li>
               </ul>
              </p>
            </Card>
            <Card
              title="Unholestry Cleaning"
              style={{ width: "25em" }}
              header={heade}
              className="col-1 mx-5"

            >
              <p className="m-0" style={{ lineHeight: "1.5" }}>
               <ul>
                <li>Interior Vacuuming & Detailing</li>
                <li>Seat Scrubbing</li>
                <li>Carpet & Doormat Cleaning</li>
                <li>Interior Detailed Cleaning & Wash</li>
                <li>Dashboard & Door pad cleaning & polish</li>
                <li>Sanitization</li>
               </ul>
              </p>
            </Card>
            <Card
              title="Ceramic Coating"
              style={{ width: "25em" }}
              header={headee}
              className="col-1 mx-5"

            >
              <p className="m-0" style={{ lineHeight: "1.5" }}>
               <ul>
                <li>Detailed Paint Correction</li>
                <li>Removal of scratches</li>
                <li>2 layers of Coating</li>
               </ul>
              </p>
            </Card>
            <Card
              title="PPF- Paint Protection Film"
              style={{ width: "25em" }}
              header={headeer}
              className="col-1 mx-5"

            >
              <p className="m-0" style={{ lineHeight: "1.5" }}>
               <ul>
                <li>Detailed PPF-Paint Protection Film</li>
                <li>Edge Protectors</li>
                <li>3 years Warranty</li>
                <li>Free Runners Pro Car Spa</li>
               </ul>
              </p>
            </Card>
            <Card
              title="Teflon Coating "
              style={{ width: "25em" }}
              header={headeerr}
              className="col-1 mx-5"

            >
              <p className="m-0" style={{ lineHeight: "1.5" }}>
               <ul>
                <li>Detailed Paint Correction</li>
                <li>Removal of Scratches</li>
                <li>Teflon Coating</li>
                <li>Anti-Rust Protection</li>
                <li>Free Runners Pro Car Spa</li>
                <li>Germ Cleaning</li>
               </ul>
              </p>
            </Card>
            <Card
              title="Anti Rust Underbody Coating"
              style={{ width: "25em" }}
              header={headeerrs}
              className="col-1 mx-5"

            >
              <p className="m-0" style={{ lineHeight: "1.5" }}>
               <ul>
                <li>Detailed Underbosy Coating</li>
                <li>Cleaning & Polish</li>
                <li>Anti Rust Corrosion Treatment</li>
                <li>Free Runners Car Spa</li>
               </ul>
              </p>
            </Card>
            <Card
              title="Germ Cleaning & Sanitization"
              style={{ width: "25em" }}
              header={headeerrss}
              className="col-1 mx-5"

            >
              <p className="m-0" style={{ lineHeight: "1.5" }}>
               <ul>
                <li>Runners Pro Car Spa</li>
                <li>Spraying of Disinfectant on interior & exteriors</li>
                <li>Sanitization of sear covers and handles</li>
                <li>Removal of Germs </li>
                <li>Glass Polish for Protection fromheat cracking</li>
                <li>Free Aroma of RoadRunners - (50g)</li>
               </ul>
              </p>
            </Card>
            <Card
              title="Rat/ Pest Repellant"
              style={{ width: "25em" }}
              header={headeerrsss}
              className="col-1 mx-5"

            >
              <p className="m-0" style={{ lineHeight: "1.5" }}>
               <ul>
                <li>Rat/Pest Repellant Detailed Tratment</li>
                <li>Protection of under body and wires</li>
                <li>Spraying of disinfectant on interior and underbody</li>
                <li>Germs Disinfection on interiors and underbody</li>
                <li>Free Aroma of RoadRunners - (50g)</li>
               </ul>
              </p>
            </Card>
            <Card
              title="Runners Car Service & Maintenance"
              style={{ width: "25em" }}
              header={headeerrssss}
              className="col-1 mx-5"

            >
              <p className="m-0" style={{ lineHeight: "1.5" }}>
               <ul>
                <li>Detailed Car Insprection</li>
                <li>Runners Car Spa</li>
                <li>Engine Oil Replacement</li>
                <li>Fluid Check</li>
                <li>AC VentCleaning & Maintenance</li>
                <li>Coolant & Brake Fluid Change</li>
                <li>Spark Plug Check</li>
                <li>Detailed Engine Cleaning</li>
               </ul>
              </p>
            </Card>
            <Card
              title="Full Body Painting"
              style={{ width: "25em" }}
              header={heheh}
              className="col-1 mx-5"

            >
              <p className="m-0" style={{ lineHeight: "1.5" }}>
               <ul>
                <li>Runners Pro Car Spa</li>
                <li>Grade A Primer</li>
                <li>Extra Polish</li>
                <li>Panel Wise Rubbing & Polish</li>
                <li>5 Layers of Paint</li>
                <li>2 years Warranty </li>
                <li>Panel Wise/ Fender Wise also available.</li>
               </ul>
              </p>
            </Card>
          </div>

          <div className="mb-3 font-bold text-2xl yols mt-6">
            <span className="text-900">One Time &nbsp;</span>
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
        </div>
      </div>
    </div>
  );
};

export default Services;
