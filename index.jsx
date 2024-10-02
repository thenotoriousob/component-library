import React from 'react';
import ReactDOM from 'react-dom/client';
import BadgesExamples from './components/Badge/BadgesExamples';
import Banner from './components/Banner/index';
import Card from './components/Card/index';
import Testimonial from './components/Testimonial/index';
import TooltipExamples from './components/Tooltip/TooltipExamples';
import ToastExamples from './components/Toast/ToastExamples';

function App() {

    return (
      <main className="container">
          
          <section id="badges">
              <h2 className="component-heading">Badges</h2>
              <BadgesExamples />
          </section>
          
          <section id="banners">
              <h2 className="component-heading">Banners</h2>
              <Banner.Examples type="multi"/>

              <Banner.Examples type="single"/>
          </section>
          
          <section id="cards">
              <h2 className="component-heading">Cards</h2>
              <Card.Examples />
          </section>
          
          <section id="testimonials">
              <h2 className="component-heading">Testimonials</h2>
              <Testimonial.Examples />
          </section>
          
          <section id="tooltips">
              <h2 className="component-heading">Tooltips</h2>
              <TooltipExamples />
          </section>
          
          <section id="toasts">
              <h2 className="component-heading">Toasts</h2>
              <ToastExamples />              
          </section>
          
      </main>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
