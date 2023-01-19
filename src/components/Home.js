import { FaReact } from 'react-icons/fa';
import { FcHome, FcCalculator } from 'react-icons/fc';
import { BsFillChatLeftQuoteFill } from 'react-icons/bs';

const Home = () => (
  <>
    <section className="home">
      <FaReact />
      <h2>Hi!</h2>
      <p>
        This is a React app, that has 3 pages (sections)
        that can be selecter in a Navigation Bar.
        The secccion are:
      </p>
      <p>
        <FcHome />
        <span>Home:</span>
        {' '}
        This section is the landing page and introduction to this Single Page Application
      </p>
      <p>
        <FcCalculator />
        <span>Calculator:</span>
        {' '}
        This section is for using the calculator created with React.
      </p>
      <p>
        <BsFillChatLeftQuoteFill />
        <span>Quote:</span>
        {' '}
        This section is for displaying a quotes.
      </p>
      <div className="code-authors">
        <a className="code-author" href="https://linkedin.com/in/ivan-martinez-von-halle">Ivan Martinez von Halle</a>
      </div>
    </section>

  </>
);

export default Home;
