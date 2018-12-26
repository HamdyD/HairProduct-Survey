import React from 'react';
import './HelpPage.css';

class HelpPage extends React.Component {
    render() {
      return (
          <div className="content">
            <h1>I’m always here to help!</h1>
              <p id="txt-id">Together, we’ll discover your unique hair needs and 
            goals. Occasionally, you’ll see an orange cirle on my
            photo. That means there’s a bit more information on the
            questions I’m asking. Simply tap if you’re curious to learn
            more.
              </p>
              <p id="got-it"><a href='/second'>OKAY, GOT IT!</a></p>
          </div>
      )
    }
}

export default HelpPage;