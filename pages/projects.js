import Page from '@Components/Page/Page';
import Project from '@Components/Project/Project';
import Section from '@Components/Project/Section';
import Image from 'next/image';

function Projects() {
  return (
    <Page>
      Currently, I&apos;ve been involved in two major projects.

        <Project title="Cherp">
            <Section title="The Rundown">
                <p>
                    Cherp is a message-based creative writing website written with a ReactJS, PostgreSQL, Redis, and SlimPHP tech stack.
                </p>
                <p>
                    A lot of my work on Cherp has been on the frontend and decomposing parts of the old code into separate components, but I&apos;ve been involved in the backend too.
                </p>
            </Section>
            <Section title="Snippets">
                <p>This is an image of the current home page.</p>
                <Image src="/images/cherp1.png" alt="first cherp image" layout="responsive" width="1361px" height="617px" />
                <p>The page to register a new character with tags that will pre-fill on taggable entities they&apos;re attached to.</p>
                <Image src="/images/cherp2.png" alt="second cherp image" layout="responsive" width="1286" height="632" />
            </Section>
            <Section title="Comments">
                <p>The Cherp journey was a rather strange one- I was onboarded to a sparingly commented repository with no automated testing enabled. Any time a member of the team would make a modification to either the frontend or backend, it risked breaking something elsewhere in the site. Obviously, this resulted in a poor experience for end-users.</p>
                <p>Recently, I&apos;ve taken it upon myself to add phpunit tests for backend functions and cypress end to end tests to make sure everything is working consistently for the most important use cases.</p>
            </Section>
        </Project>
        <Project title="siUCode">
            <Section title="The Rundown">
                <p>
                    siUCode is a project developed with the &apos;Tech Dawgs&apos; Registered Student Organization and community outreach in mind. It&apos;s similar in essence to LeetCode, CodeAcademy, and Scratch, but oriented towards younger developers in the middle-school range. It does away with the need for younger developers to setup the complicated parts of a dev environment and allows experimentation with various languages.
                </p>
                <p>
                    My work on siUCode primarily involved developing the frontend. We used the ChakraUI component / CSS library and extended our own components from the base ones they provided. I spent a lot of time glancing at our Azure sprints and taking stories based on their priority / what we discussed at Scrum meetings. Unit tests were implemented from the start on the backend and frontend, but end to end tests only came into the picture towards the end of the project through https://cypress.io, which I spent a considerable amount of time configuring.
                </p>
            </Section>
            <Section title="Snippets">
                <p>This is an image of the current landing page.</p>
                <Image src="/images/siucode1.png" alt="first cherp image" layout="responsive" width="1366px" height="589px" />
                <p>The home page.</p>
                <Image src="/images/siucode2.png" alt="second cherp image" layout="responsive" width="1346px" height="637px" />
                <p>The search page.</p>
                <Image src="/images/siucode3.png" alt="second cherp image" layout="responsive" width="1343px" height="637px" />
            </Section>
            <Section title="Comments">
                <p>I appreciated having stories to work through and prioritize- as well as having tests be a part of the development process from the start. Anytime someone in the team made a change to the repository, a Github workflow ran our test suites and notified us of failures. This allowed us to ensure we weren&apos;t merging broken code.</p>
            </Section>
        </Project>
    </Page>
  )
}

export default Projects;