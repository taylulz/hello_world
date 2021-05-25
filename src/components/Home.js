import logo from '../img/logo.svg';

function Home() {
  return (
    <>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World, <code>npm install rest</code>
        </p>
        <a
          className="App-link"
          href="https://www.nonviolentcommunication.com/wp-content/uploads/2019/07/aboutnvc_feelingsneeds.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Empathy
        </a>

    </>
  );
}

export default Home;
