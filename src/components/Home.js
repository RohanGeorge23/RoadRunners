import React, { useState } from "react";
import "../App.css";
import picTwo from "./assets/picTwo.jpeg";
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
            <span className="areyy">
              Leave the Dirt Behind
            </span>
            <div className="areyre">
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
          <div className="col-md-7 ">
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
            <h2 className="featurette-heading fw-normal lh-1 my-4">
              Oh yeah, it’s that good.{" "}
              <span className="">See for yourself!</span>
            </h2>
            <p className="lead">
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
          <div className="col-md-5">
            <img src={picTwo} className="sidess" alt="sides three" />
          </div>
        </div>
      </div>
      <div className="b-example-divider"></div>
      <div className="accordion-demo">
        <div className="card">
          <p className="freq">Frequently Asked Questions</p>
          <Accordion multiple activeIndex={[0]}>

            <AccordionTab header="Can I wash my car everyday?">
              In general, washing your car twice in a week will help keep it
              clean without harming your car's finish. Keeping a regular
              schedule like this will help keep most automobile finishes from
              fading excessively and stop the accumulation of dirt and debris in
              areas that can damage your car's finish or paint. It aids
              sustainability by cleaning away any minor substance that can cause
              corrosion.
            </AccordionTab>
            <AccordionTab header="Why shouldn’t you wash your car in the car wash?">
              You are essentially applying abrasive and/or harsh chemicals to
              the paint finish and the risk of swirls and scratches in the
              finish is always there. In fact, automatic car washes and cleaning
              bays are one of the most common culprits of minor damage on a car
              or bike. Usage of the same cloth for various vehicles will risk
              minute scratches fades your actual factory paint.
            </AccordionTab>
            <AccordionTab header="How often should you polish your car?">
              If you're taking good care of your car, polishing your car once or
              twice a year should be sufficient to fix up any minor scratches or
              wear. If you frequently find yourself with scrapes or spots, you
              can take it to be polished more regularly.
            </AccordionTab>
            <AccordionTab header="How can you protect your car’s paint from oxidation?">
              To prevent oxidation, it is highly essential to wax your car once
              every month. This will keep paint from being exposed to oxygen or
              any other element. It is also recommended to keep your vehicle in
              the garage, and in case that is not possible, car cover is
              essential to protect your vehicle.
            </AccordionTab>
            <AccordionTab header="What is a Microfiber Cloth?">
              A Microfiber cloth is basically a blend of 80% Polyester and 20%
              Polyamides. It is designed in a very unique way making it
              extremely soft, and if you observe it closely, you will be able to
              see small tiny loops of yarn in huge numbers and hence it got the
              name of Microfiber Cloth. It has a huge absorbing property and can
              capture the dirt, dust and even mycobacterium.
            </AccordionTab>
            <AccordionTab header="Why are good quality microfiber cloths essential for automotive detailing?">
              Without a doubt, a good quality MicroFiber Cloth will clean more
              effectively than a normal cloth because of its high absorbing
              capacity at 4 times more than a normal cotton cloth. It is
              appropriate for sensitive surfaces like the car’s paint. The tiny
              fiber size makes it non abrasive and extremely soft. It can clean
              upto 99% Bacteria and is called the Dirt- Magnet.
            </AccordionTab>
            <AccordionTab header="How can I protect the clearcoat?">
              The outer layer of the paint finish is the ClearCoat, and the most
              effective way is to keep it clean and coated. Use our premium
              membership to avail monthly subscription & keeping your car
              shielded only with RoadRunners.
            </AccordionTab>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Home;
