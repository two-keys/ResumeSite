import Page from "@Components/Page/Page";

function Website() {
    return(
        <Page>
            <p>This website is hosted through Vercel. I coded the website through Visual Studio Code using HTML, Javascript, and CSS. This runs on the ReactJS framework with JSX. The website was built from the ground up using visual references to the VT320 terminal and other similar command line aesthetics.</p>

            <p>As of 04/24/2022, the website is automatically deployed on Vercel. I make a Pull Request to my main branch, make sure that tests run, and then deploy to vercel.</p>

            <p>Currently, my biggest concern for the website is fleshing out my projects page and integrating Cypress. </p>
        </Page>
    )
}

export default Website;