import React, { useState } from "react";
import "../App.css";
import picTwo from "./assets/picTwo.jpeg";
import pic from "./assets/picThree.jpeg";
import carWash from "./assets/carseats.jpeg";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import background from "./assets/background.png";
import { ScrollTop } from "primereact/scrolltop";
import { Accordion, AccordionTab } from "primereact/accordion";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  let navigate = useNavigate();

  const handleClcikss = () => {
    navigate("services", { replace: true });
  };

  const onClick = (itemIndex) => {
    let _activeIndex = activeIndex ? [...activeIndex] : [];

    if (_activeIndex.length === 0) {
      _activeIndex.push(itemIndex);
    } else {
      const index = _activeIndex.indexOf(itemIndex);
      if (index === -1) {
        _activeIndex.push(itemIndex);
      } else {
        _activeIndex.splice(index, 1);
      }
    }

    setActiveIndex(_activeIndex);
  };

  return (
    <>
      {/* <img src={background} className="backImage" alt="backgroundImage" /> */}

      <div className="my-5">
        <div className="cecece">
          <section>
            <span className="block text-6xl font-bold mb-1">
              Leave the Dirt Behind
            </span>
            <div className="text-6xl colors font-bold mb-3">
              The best cleaning services for your MotoBaby.
            </div>
            <p className="mt-0 mb-4 text-700 line-height-3"></p>

            <Button
              label="Learn More"
              type="button"
              onClick={handleClcikss}
              className="mr-3 p-button-warning"
            />
          </section>
        </div>
        {/* <div className="col-12 md:col-6 overflow-hidden">
          <img
            src={background}
            alt="hero-1"
            className="sas"
            style={{ clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" }}
          />
        </div> */}
      </div>

      <div className="home-main">
        <div className="furtherContainer">
          <div className="row featurette">
            {/* <div className="col-md-5">
              <img src={logoesh} className="sides" alt="sides" />
            </div> */}
            <div className="col">
              <p className="lead">
                Founded in the year 2022, Road Runners is a single pit stop
                solution to every problem of your motor baby, we bring to you a
                unique process of cleaning concept, which is used in the
                automobile industry across the globe.
              </p>
              <p className="lead">
                Holding an experience of 10+ years in the automobile industry
                Worked in various domain of automobile sector in India
                (Mahindra, Toyota, Ford, Volkswagen and Hyundai)
              </p>
              <p className="lead">
                With more than 52,000 man-hours into Research &amp; Development
                we have patterned a unique method of washing a vehicle and
                providing with the right amount of mechanism to protect the
                exterior.
              </p>
              <p className="lead">
                All Purpose Cleaner is a biodegradable product designed
                especially for the automotive industry. It is 10 times more
                efficient at cleaning than any other similar product sold in the
                market and used in water.
              </p>
              <p className="lead">
                We use eco-friendly waterless cleaning to give your car a dust
                resistant and perfect look.
              </p>
              <p className="lead">
                We make sure to serve your vehicle and keep up in its best
                condition.
              </p>
            </div>
          </div>
        </div>
        <ScrollTop threshold={200} />
      </div>
      <div className="b-example-divider"></div>

      <div className="furtherContainers">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1 my-4">
              Why Us
              <span className="text-muted">...?</span>
            </h2>
            <p className="lead">
              Our advisors are well equipped and experienced for more than 5 to
              10 years working across multiple automobile industry.
            </p>
            <p className="lead">
              We use a unique cleaning process to ensure durability of your
              vehicle paint protection, Providing the best methodology with our
              trained and equipped car washers.
            </p>
            <p className="lead">
              All our employees are trained in a unique methodology of cleaning
              the vehicles, Our runners are auto head and passionate to provide
              a quality service.
            </p>
            <p className="lead">
              We are well equipped in remotely cleaning services of your vehicle
              anywhere across our landmark be it washing, Teflon coating,
              Ceramic Coating and PPF Coating.
            </p>
            <p className="lead">
              Using the world’s best products and solution to maintain a
              showroom finish.
            </p>
            <p className="lead">
              We make sure to serve your vehicle and keep up in its best
              condition.
            </p>
          </div>
          <div className="col-md-5">
            <img src={carWash} className="sides" alt="sides again" />
          </div>
        </div>
      </div>

      <div className="b-example-divider"></div>

      <div className="furtherContainer">
        <div className="row featurette">
          <div className="col-md-7 order-md-2 ">
            <h2 className="featurette-heading fw-normal lh-1">
              Oh yeah, it’s that good.{" "}
              <span className="">See for yourself!</span>
            </h2>
            <p className="lead ">
              We understand your busy schedule and will help you through a
              Hassel free service and maintenance of your vehicle, Providing
              weekly and monthly updates.
            </p>
            <p className="lead">
              We provide Services{" "}
              <b>
                (Pick up and drop to the preferred showroom Helping you with
                detailed service record of your vehicle, along with checking
                payment to final completion of vehicle services)
              </b>
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={picTwo} className="sidess" alt="sides three" />
          </div>
        </div>
      </div>
      <div className="b-example-divider"></div>
      <div className="accordion-demo">
        <div className="card">
          <p className="freq">Frequently Asked Questions</p>
          <Accordion multiple activeIndex={[0]}>
            <AccordionTab header="Is it OK to wash car with just water?">
              Washing your car with just water will not remove much dirt, can
              cause water spots and result in scratches if you use a mitt or
              sponge without a shampoo. You should only ever rinse without
              washing if you are using distilled water, or have a hydrophobic
              coating and plan to drive the car afterwards
            </AccordionTab>
            <AccordionTab header="Can I wash my car every day?">
              In general, washing your car twice in a week will help keep it
              clean without harming your car&#39;s finish. Keeping a regular
              schedule like this will help keep most automobile finishes from
              fading excessively and stop the accumulation of dirt and debris in
              areas that can damage your car&#39;s finish or paint
            </AccordionTab>
            <AccordionTab header="How many times should you wash your car?">
              As a rule of thumb, you should wash your vehicle every two weeks.
              That is if you&#39;re not driving down dirt roads daily or in an
              area where salt is used on the highways. This is under normal wear
              and tear circumstances.
            </AccordionTab>
            <AccordionTab header="Does washing your car make it last longer?">
              Keep It Clean, washing your car does more than make it look nice.
              It aids longevity by cleaning away contaminants that cause
              corrosion
            </AccordionTab>
            <AccordionTab header="How many times should you wash your car?">
              As a rule of thumb, you should wash your vehicle every two weeks.
              That is if you&#39;re not driving down dirt roads daily or in an
              area where salt is used on the highways. This is under normal wear
              and tear circumstances.
            </AccordionTab>
            <AccordionTab header="Why shouldn’t you wash your car in the car wash?">
              you are essentially applying an abrasive and/or harsh chemicals to
              the paint finish and the risk of swirls and scratches in the
              finish is always there. In fact, automatic car washes and cleaning
              bays are one of the most common culprits of minor damage on a car
              or bike, Usage of same cloth for various vehicles will risk in
              minute scratches fades your actual factory paint.
            </AccordionTab>
            <AccordionTab header="How often should you hand polish your car?">
              If you&#39;re taking good care of your car, polishing your car
              once or twice a year should be sufficient to fix up any minor
              scratches or wear. If you frequently find yourself with scrapes or
              spots, you can take it to be polished more regularly.
            </AccordionTab>
            <AccordionTab header="How to Protect your car’s paint from oxidation?">
              If you&#39;re taking good care of your car, polishing your car
              once or twice a year should be sufficient to fix up any minor
              scratches or wear. If you frequently find yourself with scrapes or
              spots, you can take it to be polished more regularly.
            </AccordionTab>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Home;
