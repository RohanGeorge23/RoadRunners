import React, { useState, useEffect } from "react";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import "../App.css";
import { PhotoService } from "./ImageService/ImageService";
import { Galleria } from "primereact/galleria";
import { Button } from "primereact/button";
import hatchback from "./assets/hatchback.png";
import sedan from "./assets/sedan.png";
import msuv from "./assets/m-suv.png";
import suv from "./assets/suv.png";
import muv from "./assets/muv.png";
import { ScrollTop } from "primereact/scrolltop";
import { useNavigate } from "react-router-dom";


const Services = () => {
  const [images, setImages] = useState(null);

  const [images2, setImages2] = useState(null);

  const galleriaService = new PhotoService();

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

  useEffect(() => {
    galleriaService.getImages().then((data) => {
      setImages(data);
      setImages2(data.slice(0, 5));
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

  const caption = (item) => {
    return (
      <div className="captionThis">
        <h3 className="mb-2">{item.title}</h3>
        <p>{item.alt}</p>
      </div>
    );
  };
  const events1 = [
    {
      status: "Hatch Back",
      color: "#9C27B0",
      image: hatchback,
      price: "Fortnite - Rs699 | Monthly - Rs999  ",
    },
    {
      status: "Sedan",
      color: "#673AB7",
      image: sedan,

      price: "Fortnite - Rs749 | Monthly - Rs1099",
    },
    {
      status: "M-SUV",
      color: "#FF9800",
      image: msuv,

      price: "Fortnite - Rs849 | Monthly - Rs1199",
    },
    { status: "SUV", color: "#607D8B", image: suv, price: "Fortnite - Rs949 | Monthly - Rs1399" },
    { status: "MUV", color: "#607D8B", image: muv, price: "Fortnite - Rs949 | Monthly - Rs1499" },
  ];

  let navigate = useNavigate();

  const handllesh =()=>{
    navigate("/contact", { replace: true });

  }

  const customizedContent = (item) => {
    return (
      <div className="timeline-demo">
        <Card
          title={item.status}
          subTitle={item.price}
          className="customized-timeline"
        >
          {item.image && (
            <img
              src={`${item.image}`}
              onError={(e) =>
                (e.target.src =
                  "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
              }
              alt={item.name}
              width={250}
              className="shadow-1"
            />
          )}
        </Card>
      </div>
    );
  };
  return (
    <div className="">
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
      <div className="timeline-demo">
        <h5 className="packtype">Subscription Plans</h5>
        <Timeline
          value={events1}
          align="alternate"
          className="customized-timeline"
          content={customizedContent}
        />
      </div>
      <div>
        <ScrollTop threshold={200} />

        <div className="b-example-divider"></div>

        <div className="surface-0">
          <div className="text-900 font-bold text-6xl mb-4 text-center py-5">
            Subscription Details
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

          <div className="grid serviceStrt">
            <div className="col-12 lg:col-4">
              <div className="p-3 h-full">
                <div
                  className="shadow-2 p-3 h-full flex flex-column"
                  style={{ borderRadius: "6px" }}
                >
                  <div className="text-900 font-medium text-xl mb-2">
                    Basic Cleaning Package
                  </div>
                  <div className="text-600">Plan description</div>
                  <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                  <div className="flex align-items-center">
                    <span className="font-bold text-2xl text-900">Rs 199/Rs 299/Rs 399</span>
                    <span className="ml-2 font-medium text-600">Small / Medium / Large</span>
                  </div>
                  <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                  <ul className="list-none p-0 m-0 flex-grow-1">
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2"></i>
                      <span>Exterior( Dry & Water Wash )</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2"></i>
                      <span>Tyre, Wheel Arch</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2"></i>
                      <span> All Glasses Washing</span>
                    </li>
                  </ul>
                  <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                  <Button
                    label="Get Now"
                    className="p-3 w-full mt-auto p-button-outlined p-button-secondary"
                    onClick={handllesh}

                  />
                </div>
              </div>
            </div>

            <div className="col-12 lg:col-4">
              <div className="p-3 h-full">
                <div
                  className="shadow-2 p-3 h-full flex flex-column"
                  style={{ borderRadius: "6px" }}
                >
                  <div className="text-900 font-medium text-xl mb-2">
                    Deep Cleaning Package
                  </div>
                  <div className="text-600">Plan description</div>
                  <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                  <div className="flex align-items-center">
                    <span className="font-bold text-2xl text-900">Rs 299/Rs 399/Rs 499</span>
                    <span className="ml-2 font-medium text-600">Small / Medium / Large</span>
                  </div>
                  <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                  <ul className="list-none p-0 m-0 flex-grow-1">
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2"></i>
                      <span>Exterior and Interior(Dry & Water wash)</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2"></i>
                      <span> All Glasses </span>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2"></i>
                      <span>Dashboard and Doorpad dressing</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2"></i>
                      <span>Seats and Mat Cleaning</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2"></i>
                      <span>AC Vent Cleaning</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2"></i>
                      <span>Interior Vacuuming</span>
                    </li>
                  </ul>
                  <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                  <Button
                    label="Get Now"
                    className="p-3 w-full p-button-outlined p-button-secondary"
                    onClick={handllesh}

                  />
                </div>
              </div>
            </div>

            <div className="col-12 lg:col-4">
              <div className="p-3 h-full">
                <div
                  className="shadow-2 p-3 flex flex-column"
                  style={{ borderRadius: "6px" }}
                >
                  <div className="text-900 font-medium text-xl mb-2">
                    Other Add on services
                  </div>
                  <div className="text-600">Plan description</div>
                  <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                  <div className="flex align-items-center">
                    <span className="font-bold text-2xl text-900">Custom</span>
                  </div>
                  <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                  <ul className="list-none p-0 m-0 flex-grow-1">
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2"></i>
                      <span>Interior Seats and Mat Cleaning</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2"></i>
                      <span>Anti Rust Underbody Coating</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2"></i>
                      <span>AC VENT Cleaning</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2"></i>
                      <span>Rat Repellant</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2"></i>
                      <span>Ceramic Coating</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                      <i className="pi pi-check-circle text-green-500 mr-2"></i>
                      <span>PPF Edge Protector</span>
                    </li>
                  </ul>
                  <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                  <Button
                    label="Get Now"
                    className="p-3 w-full p-button-outlined p-button-secondary"
                    onClick={handllesh}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
