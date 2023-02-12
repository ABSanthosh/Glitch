import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import "../styles/routes/Home.scss";
import Link from "next/link";
import FaqDropdown from "../components/FaqDropdown/FaqDropdown";

export default function Home() {
	const [questionIndex, setQuestionIndex] = useState(-1);
	const questions = [
		{
			question: "What is a hackathon?",
			answer: "",
		},
		{
			question: "What do the hackathon's tracks mean?",
			answer: "",
		},
		{
			question: "How do we register?",
			answer: "",
		},
		{
			question: "Are hackathons only for coding?",
			answer: "",
		},
		{
			question: "What is expected from teams who come to GLITCH?",
			answer: "",
		},
	];

  return (
    <main className="HomeContainer">
      <Header />
      <section className="HomeContainer__hero">
        <img
          className="HomeContainer__hero--heroImage"
          src="/Images/HeroSectionImage.png"
        />
        <div className="HomeContainer__hero--left">
          <div className="HomeContainer__hero--header">
            <h1>WHERE</h1>
            <div className="HomeContainer__hero--dateBox">20-22 October</div>
            <h1>
              <span>CREATIVITY</span> &
            </h1>
            <h1>
              <span>INNOVATION</span>
            </h1>
            <h1>MEET</h1>
          </div>
          <div className="HomeContainer__hero--footer">
            <Link
              className="HomeContainer--blueButton"
              href="https://www.hackerearth.com/challenges/hackathon/glitch-hackathon/"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"

            >
              REGISTER FOR THE <span>HACK</span>
            </Link>
            <p>
              Register for the HACK - Introducing GLITCH! A collaboration between the  Google Developer Student Club (GDSC) and the Association of Computing Machinery (ACM) chapters of SNIoE, GLITCH is the flagship hackathon of SNIoE. Participate to seize the opportunity to learn, collaborate and build meaningful projects alongside mentors from various disciplines. 
            </p>
          </div>
        </div>
      </section>
      <section className="HomeContainer__sponsorBar"></section>
      <section className="HomeContainer__about">
        <div className="HomeContainer__about--left">
          <h1>
            <span>GLITCH</span> HACKATHON 2023
          </h1>
          <p>
            GLITCH 2023 - This year's theme is Empowering through tech. We will have three tracks on this theme. Come join us for a weekend full of fun workshops, plenary lectures, social mixers, games and super cool merch! Open to everyone across the country, GLITCH is beginner friendly, and has no registration fee!
          </p>
          <p>
            Our hackathon is aimed at inviting individuals to come together and ideate end-to-end solutions for sustainable development, healthcare, security & privacy and productivity & utility. All participating teams will spend time developing applications with real-world applications. Students will also get a chance to network with industry experts and get guidance from mentors.
          </p>

          <div className="HomeContainer__about--buttons">
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
          </div>
        </div>
        <div className="HomeContainer__about--right">
          <div className="HomeContainer__about--qBox">
            <div className="HomeContainer__about--one">
              <img src="/Images/quote.svg" />
              <img src="/Images/quote.svg" />
            </div>
            <hr />
            <div className="HomeContainer__about--two">
              "We believe that it takes great people to deliver great products."
            </div>
            <div className="HomeContainer__about--three">
              <img src="/Images/GlitchTeamSign.svg" />
            </div>
          </div>
        </div>
      </section>
      <section className="HomeContainer__track">
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
            <div className="HomeContainer__track--card">
              <div className="HomeContainer__track--cardContent">
                <h1>Productivity & Utility</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                </p>
              </div>
            </div>
            <div className="HomeContainer__track--card">
              <div className="HomeContainer__track--cardContent">
                <h1>Productivity & Utility</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                </p>
              </div>
            </div>
            <div className="HomeContainer__track--card">
              <div className="HomeContainer__track--cardContent">
                <h1>Productivity & Utility</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                </p>
              </div>
            </div>
            <div className="HomeContainer__track--card">
              <div className="HomeContainer__track--cardContent">
                <h1>Productivity & Utility</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="HomeContainer__horizontalScroller">
        <span>
          Great Prizes - Great Prizes - Great Prizes - Great Prizes - Great
          Prizes - Great Prizes - Great Prizes - Great Prizes - Great Prizes -
          Great Prizes - Great Prizes - Great Prizes - Great Prizes - Great
          Prizes - Great Prizes - Great Prizes - Great Prizes - Great Prizes -
          Great Prizes - Great Prizes
        </span>
      </section>
      <section className="HomeContainer__prizes">
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
      </section>

      <section className="HomeContainer__FAQ">
        <div className="HomeContainer__FAQContainer">
          <div className="HomeContainer__FAQ--left">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="HomeContainer__FAQ--right">
						{questions.map((question, index) => (
							<FaqDropdown
								question={question.question}
								answer={question.answer}
								isExpanded={questionIndex === index}
								onClick={() => {
									if (questionIndex === index) setQuestionIndex(-1);
									else setQuestionIndex(index);
								}}
							/>
						))}
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
