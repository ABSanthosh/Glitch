import { useState } from "react";
import Header from "../components/Header/Header";
import "../styles/routes/Home.scss";
import Link from "next/link";
import FaqDropdown from "../components/FaqDropdown/FaqDropdown";

export default function Home() {
  const [questionIndex, setQuestionIndex] = useState(-1);
  const questions = [
    {
      question: "What is a hackathon?",
      answer: `A hackathon is an event where groups of people, typically developers, designers, and
				other tech enthusiasts, come together to collaborate on a software or hardware project. The
				event usually takes place over a period of several days, and participants work intensively to
				create a functional prototype of their project within the allotted time.`,
    },
    {
      question: "What do the hackathon's tracks mean?",
      answer: `GLITCH has four tracks which are themes that you have freedom to choose between.
				Read through their descriptions and see what suits your team best. Choose wisely!`,
    },
    {
      question: "How do we register?",
      answer: `You can register through the Devfolio link that will be provided on this website!`,
    },
    {
      question: "Are hackathons only for coding?",
      answer: `Hackathons aren't just for coding! Coming up with innovative solutions and being able to
				present your idea well is as important as coding your application/project`,
    },
    {
      question: "What is expected from teams who come to GLITCH?",
      answer: `Nothing except your best! Understand your chosen track well and set your aims high.
				Show us what you can do in the 24 hour time limit. Blow us away!`,
    },
    {
      question: "Do I need to excel at coding to participate?",
      answer: `No, you don't need to be a coding expert to participate in a hackathon. 
            In fact, we invite beginners to team up with more experienced developer to learn how great applications are made with this hackathon.
            You can come up with a innovative idea and work on it with your team.`,
    },
  ];

  const tracks = [
    {
      title: "Productivity & Utility",
      description: `Develop innovative solutions that can make people's lives easier and more efficient. Some
				examples of productivity and utility apps include meal planning+grocery delivery service, smart
				parking system etc.`,
    },
    {
      title: "Security & Privacy",
      description: `security and privacy are critical issues in today's digital world, and there is a lot of room for
				innovation in this area. Examples of things you could work on in this track include an encrypted
				messaging app, a blockchain-based identity verification system etc`,
    },
    {
      title: "Sustainable Development",
      description: `Sustainable development is an increasingly important theme in today’s world. A couple project
				ideas in this track could be a waste reduction platform, an energy efficiency monitor etc`,
    },
    {
      title: "Open Ended Innovation",
      description: `Let your thoughts run wild! Come up with anything you think will blow the judges and the rest of
				the participants' minds away.`,
    },
  ];

  return (
      <main className="HomeContainer">
          <Header />
          <section className="HomeContainer__hero" id="home">
              <img
                  className="HomeContainer__hero--heroImage"
                  src="/Images/HeroSectionImage.png"
              />
              <div className="HomeContainer__hero--left">
                  <div className="HomeContainer__hero--header">
                      <h1>WHERE</h1>
                      <div className="HomeContainer__hero--dateBox">
                          16-17 March 2023
                      </div>
                      <h1>
                          <span>CREATIVITY</span> &
                      </h1>
                      <h1>
                          <span>INNOVATION</span>
                      </h1>
                      <h1>
                          <em>COLLIDE!</em>
                      </h1>
                  </div>
                  <div className="HomeContainer__hero--footer">
                      <Link
                          className="HomeContainer--blueButton"
                          href="https://unstop.com/hackathons/glitch-shiv-nadar-university-snu-greater-noida-633527"
                          target="_blank"
                          referrerPolicy="no-referrer"
                          rel="noopener noreferrer"
                      >
                          <span>HACK!</span>
                      </Link>
                      <p>
                          Register for the HACK - Introducing GLITCH, the
                          flagship hackathon and a collaboration between the
                          Google Developer Student Clubs (GDSC) and the ACM &
                          ACM-W chapters of Shiv Nadar Institution of Eminence.
                          Participate to seize the opportunity to learn,
                          collaborate and build meaningful projects alongside
                          mentors from various disciplines.
                      </p>
                  </div>
              </div>
          </section>
          <section className="HomeContainer__sponsorBar">
              <div className="HomeContainer__sponsorBar--title">
                  <h2>Organisers</h2>
              </div>

              <Link
                  className="HomeContainer__sponsorBar--logo"
                  href="https://snu.acm.org"
              >
                  <img src="/Images/Club/1_edit.png" alt="" />
              </Link>

              <Link
                  className="HomeContainer__sponsorBar--logo"
                  href="https://gdsc.community.dev/shiv-nadar-university-greater-noida/"
                  rel="noopener noreferrer"
                  target="_blank"
              >
                  <img src="/Images/Club/2_edit.png" alt="" />
              </Link>

              <Link
                  className="HomeContainer__sponsorBar--logo"
                  href="https://snu.acm.org/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <img src="/Images/Club/3_edit.png" alt="" />
              </Link>

              <div className="HomeContainer__sponsorBar--title">
                  <h2>Event Partner</h2>
              </div>

              <Link
                  className="HomeContainer__sponsorBar--logo"
                  href="https://breezesnu.com/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <img src="/Images/Club/breeze.png" alt="" />
              </Link>
          </section>
          <section className="HomeContainer__about" id="about">
              <div className="HomeContainer__about--left">
                  <h1>
                      <span>GLITCH</span> HACKATHON 2023
                  </h1>
                  <p>
                      GLITCH 2023 - This year's theme is{" "}
                      <span> Empowering through tech. </span> We will have three
                      tracks on this theme. Come join us for a couple of days
                      full of fun workshops, plenary lectures, social mixers,
                      games and super cool merch! Open to everyone across the
                      country, GLITCH is <span> beginner friendly </span>, and
                      is <span> free to register! </span>
                  </p>
                  <p>
                      Our hackathon is aimed at inviting individuals to come
                      together and ideate end-to-end solutions for sustainable
                      development, healthcare, security & privacy and
                      productivity & utility. All participating teams will spend
                      time developing applications with real-world applications.
                      Students will also get a chance to network with industry
                      experts and get guidance from mentors.
                  </p>

                  {/* <div className="HomeContainer__about--buttons">
                      <Link
                          className="HomeContainer--blueButton"
                          href="https://www.hackerearth.com/challenges/hackathon/glitch-hackathon/"
                          target="_blank"
                          referrerPolicy="no-referrer"
                          rel="noopener noreferrer"
                      >
                          REGISTER FOR THE <span>HACK</span>
                      </Link>
                      <Link
                          href="/faq"
                          className="HomeContainer--gradientButton"
                          data-content="Learn More"
                      />
                  </div> */}
              </div>
              <div className="HomeContainer__about--right">
                  <div className="HomeContainer__about--qBox">
                      <div className="HomeContainer__about--one">
                          <img src="/Images/quote.svg" />
                          <img src="/Images/quote.svg" />
                      </div>
                      <hr />
                      <div className="HomeContainer__about--two">
                          "Unleash your inner superhero and code your way to
                          victory!"
                      </div>
                      <div className="HomeContainer__about--three">
                          <img src="/Images/GlitchTeamSign.svg" />
                      </div>
                  </div>
              </div>
          </section>
          <section className="HomeContainer__track" id="tracks">
              <img
                  className="HomeContainer__track--bgImage"
                  src="/Images/TracksSectionImage.png"
              />
              <div className="HomeContainer__track--right">
                  <h1>
                      HACKATHON
                      <span>TRACKS</span>
                  </h1>
                  <div
                      className="HomeContainer__track--cards"
                      onMouseMove={(e) => {
                          document
                              .querySelectorAll(".HomeContainer__track--card")
                              .forEach((card) => {
                                  const rect = card.getBoundingClientRect(),
                                      x = e.clientX - rect.left,
                                      y = e.clientY - rect.top;

                                  card.style.setProperty("--mouse-x", `${x}px`);
                                  card.style.setProperty("--mouse-y", `${y}px`);
                              });
                      }}
                  >
                      {tracks.map((track, index) => (
                          <div
                              className="HomeContainer__track--card"
                              key={index}
                          >
                              <div className="HomeContainer__track--cardContent">
                                  <h1>{track.title}</h1>
                                  <p>{track.description}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
          <section className="HomeContainer__horizontalScroller" id="prizes">
              <span>
                  Great Prizes - Great Prizes - Great Prizes - Great Prizes -
                  Great Prizes - Great Prizes - Great Prizes - Great Prizes -
                  Great Prizes - Great Prizes - Great Prizes - Great Prizes -
                  Great Prizes - Great Prizes - Great Prizes - Great Prizes -
                  Great Prizes - Great Prizes - Great Prizes - Great Prizes -
                  Great Prizes - Great Prizes - Great Prizes - Great Prizes -
                  Great Prizes - Great Prizes - Great Prizes - Great Prizes -
                  Great Prizes - Great Prizes - Great Prizes - Great Prizes -
                  Great Prizes - Great Prizes - Great Prizes - Great Prizes -
                  Great Prizes - Great Prizes - Great Prizes - Great Prizes
              </span>
          </section>
          <section className="HomeContainer__prizes">
              <img src="/Images/prizeBox.svg" alt="prizeBox" />
              <p className="HomeContainer__prizes--right">
                  Prices worth over 2 Lakh
              </p>
              <p className="HomeContainer__prizes--rightMobile">
                  Prices worth over <br />
                  <span> 2 Lakh</span>
              </p>
          </section>
          {/* <section className="HomeContainer__prizes">
        <div className="HomeContainer__prizesBox">
          <div className="HomeContainer__prizesBox--top"></div>
          <div className="HomeContainer__prizesBox--bottom">
            <h2>1st Place</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </p>
          </div>
        </div>
        <div className="HomeContainer__prizesBox">
          <div className="HomeContainer__prizesBox--top"></div>
          <div className="HomeContainer__prizesBox--bottom">
            <h2>2nd Place</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </p>
          </div>
        </div>
        <div className="HomeContainer__prizesBox">
          <div className="HomeContainer__prizesBox--top"></div>
          <div className="HomeContainer__prizesBox--bottom">
            <h2>3rd Place</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </p>
          </div>
        </div>
      </section> */}

          <section
              className="HomeContainer__DevfolioSponsor"
              style={{
                  marginTop: "5rem",
              }}
              id="sponsors"
          >
              <div className="HomeContainer__DevfolioSponsor--title">
                  <h2>Sponsors</h2>
              </div>
              <Link
                  href="https://devfolio.co/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="HomeContainer__DevfolioSponsor--logo"
              >
                  <img src="/Images/Sponsors/Devfolio.png" alt="" />
              </Link>
              <Link
                  href="https://replit.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="HomeContainer__DevfolioSponsor--logo"
              >
                  <img src="/Images/Sponsors/Replit.png" alt="" />
              </Link>
              <Link
                  href="https://polygon.technology/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="HomeContainer__DevfolioSponsor--logo"
              >
                  <img src="/Images/Sponsors/Polygon.png" alt="" />
              </Link>
              <Link
                  href="https://solana.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="HomeContainer__DevfolioSponsor--logo"
              >
                  <img src="/Images/Sponsors/Solana.png" alt="" />
              </Link>
              <Link
                  href="https://filecoin.io/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="HomeContainer__DevfolioSponsor--logo"
              >
                  <img src="/Images/Sponsors/Filecoin.png" alt="" />
              </Link>
              <Link
                  href="https://www.wolfram.com/language/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="HomeContainer__DevfolioSponsor--logo"
              >
                  <img src="/Images/Sponsors/Wolfram.png" alt="" />
              </Link>
          </section>

          <section className="HomeContainer__FAQ" id="faq">
              <div className="HomeContainer__FAQContainer">
                  <div className="HomeContainer__FAQ--left">
                      <h1>Frequently Asked Questions</h1>
                  </div>
                  <div className="HomeContainer__FAQ--right">
                      {questions.map((question, index) => (
                          <FaqDropdown
                              key={index}
                              question={question.question}
                              answer={question.answer}
                              isExpanded={questionIndex === index}
                              onClick={() => {
                                  if (questionIndex === index)
                                      setQuestionIndex(-1);
                                  else setQuestionIndex(index);
                              }}
                          />
                      ))}
                  </div>
              </div>
          </section>

          <section className="HomeContainer__AskQuestions">
              <div className="HomeContainer__AskContainer">
                  <div className="HomeContainer__AskContainer--top">
                      <h1>
                          Got questions? We would love to answer to make your
                          hackathon smoother
                      </h1>
                  </div>
                  <div className="HomeContainer__AskContainer--bottom">
                      {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit
            </p> */}
                      <Link
                          href="https://www.instagram.com/glitch.snioe/"
                          target="_blank"
                          title="Instagram"
                          rel="noopener noreferrer"
                      >
                          Instagram
                      </Link>
                  </div>
              </div>
          </section>

          <footer className="Footer">
              <div className="Footer__container">
                  <div className="Footer__left">© 2023 Developed by Glitch</div>
                  <Link className="Footer__right" href="#" title="Back to top">
                      <img src="/Images/FooterUp.svg" />
                  </Link>
              </div>
          </footer>
      </main>
  );
}
