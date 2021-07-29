import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const Faq = () => {
  return (
    <React.Fragment>
      <TopHeader />
      <Navbar />
      <PageBanner
        pageTitle="FAQ's"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Faq"
        // bgImage="page-title-one"
        opacity="0.6"
        colour="#008000"
      />

      <div className="ptb-100">
        <div className="container">
          {/* <div className="faq-content">
            <h2>Dental Care</h2>

            <Accordion allowZeroExpanded preExpanded={["a"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>What is the source of the virus?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Coronaviruses are a large family of viruses. Some cause
                    illness in people, and others, such as canine and feline
                    coronaviruses, only infect animals. Rarely, animal
                    coronaviruses that infect animals have emerged to infect
                    people and can spread between people
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>How does the virus spread?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Coronaviruses are a large family of viruses. Some cause
                    illness in people, and others, such as canine and feline
                    coronaviruses, only infect animals. Rarely, animal
                    coronaviruses that infect animals have emerged to infect
                    people and can spread between people
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>
                      Who has had COVID-19 spread the illness to others?
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Coronaviruses are a large family of viruses. Some cause
                    illness in people, and others, such as canine and feline
                    coronaviruses, only infect animals. Rarely, animal
                    coronaviruses that infect animals have emerged to infect
                    people and can spread between people
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>
                      Will warm weather stop the outbreak of COVID-19?
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Coronaviruses are a large family of viruses. Some cause
                    illness in people, and others, such as canine and feline
                    coronaviruses, only infect animals. Rarely, animal
                    coronaviruses that infect animals have emerged to infect
                    people and can spread between people
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>What is community spread?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Coronaviruses are a large family of viruses. Some cause
                    illness in people, and others, such as canine and feline
                    coronaviruses, only infect animals. Rarely, animal
                    coronaviruses that infect animals have emerged to infect
                    people and can spread between people
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div> */}

          {/* <div className="faq-content">
            <h2>Cardiology</h2>

            <Accordion allowZeroExpanded preExpanded={["a"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>What is Cardiologist?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Coronaviruses are a large family of viruses. Some cause
                    illness in people, and others, such as canine and feline
                    coronaviruses, only infect animals. Rarely, animal
                    coronaviruses that infect animals have emerged to infect
                    people and can spread between people
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>What is a Cardiothoracic surgeon?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Coronaviruses are a large family of viruses. Some cause
                    illness in people, and others, such as canine and feline
                    coronaviruses, only infect animals. Rarely, animal
                    coronaviruses that infect animals have emerged to infect
                    people and can spread between people
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>How does a stress test work?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Coronaviruses are a large family of viruses. Some cause
                    illness in people, and others, such as canine and feline
                    coronaviruses, only infect animals. Rarely, animal
                    coronaviruses that infect animals have emerged to infect
                    people and can spread between people
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Are cardiopulmonary problems hereditary?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Coronaviruses are a large family of viruses. Some cause
                    illness in people, and others, such as canine and feline
                    coronaviruses, only infect animals. Rarely, animal
                    coronaviruses that infect animals have emerged to infect
                    people and can spread between people
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Do cardiac tests hurt?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Coronaviruses are a large family of viruses. Some cause
                    illness in people, and others, such as canine and feline
                    coronaviruses, only infect animals. Rarely, animal
                    coronaviruses that infect animals have emerged to infect
                    people and can spread between people
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div> */}

          {/* <div className="faq-content">
            <h2>Diagnosis</h2>

            <Accordion allowZeroExpanded preExpanded={["a"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>What do we know about diagnostic error?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Coronaviruses are a large family of viruses. Some cause
                    illness in people, and others, such as canine and feline
                    coronaviruses, only infect animals. Rarely, animal
                    coronaviruses that infect animals have emerged to infect
                    people and can spread between people
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>How often does it happen?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Coronaviruses are a large family of viruses. Some cause
                    illness in people, and others, such as canine and feline
                    coronaviruses, only infect animals. Rarely, animal
                    coronaviruses that infect animals have emerged to infect
                    people and can spread between people
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>What is the cause of diagnostic error?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Coronaviruses are a large family of viruses. Some cause
                    illness in people, and others, such as canine and feline
                    coronaviruses, only infect animals. Rarely, animal
                    coronaviruses that infect animals have emerged to infect
                    people and can spread between people
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>What are the obstacles to accurate diagnosis?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Coronaviruses are a large family of viruses. Some cause
                    illness in people, and others, such as canine and feline
                    coronaviruses, only infect animals. Rarely, animal
                    coronaviruses that infect animals have emerged to infect
                    people and can spread between people
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>When is a formal diagnosis necessary?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Coronaviruses are a large family of viruses. Some cause
                    illness in people, and others, such as canine and feline
                    coronaviruses, only infect animals. Rarely, animal
                    coronaviruses that infect animals have emerged to infect
                    people and can spread between people
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div> */}

          <div className="faq-content">
            <h2>F.A.Q</h2>

            <Accordion allowZeroExpanded preExpanded={["a"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Are you bulk billed?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    We are bulk billing for all medicare holders, some
                    exclusions apply.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>How do i book an appointment?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>you can book by calling 9391 0033, or booking online at</p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Do you still offer telehealth appointments?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>yes we do, although the government is phasing this out.</p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>
                      Where are you located and do you have onsite parking?
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    We are located at 471 Melbourne Rd, Newport, and yes we have
                    onsite and street parking.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span> which services are privately billed?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Services include; iron infusion, IUD, immunisations, travel
                    vaccines and laser therapy are privately billed.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Faq;
