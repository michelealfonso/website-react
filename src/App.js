import styles from './styles';

import {Billing, Business, CardDeal, Clients, Cta, Stats, Navbar, Footer, Testimonials, Hero} from './components';

const App = () => (
  <div className="bg-black w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
         <Navbar/>
      </div>
    </div>

    <div className={`bg-black ${styles.flexStart}`}>
      <div className={`bg-black ${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`bg-black ${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients/>
        <Cta/>
        <Footer/>
      </div>
    </div>

  </div>
);

export default App
