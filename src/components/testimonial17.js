import React from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial17-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text04 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text07 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text10 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text13 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  review2:
    'As a busy professional, I needed a tool that could help me stay organized and focused. This calendar service exceeded my expectations.',
  author2Position: 'CEO',
  author3Src:
    'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTgzNjYyMXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Doe',
  review3:
    "The personalized calendar generated for me was spot on. It's like having a personal assistant helping me plan my day.",
  author4Src:
    'https://images.unsplash.com/photo-1536331307320-5316320e97cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTgzNjYyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Src:
    'https://images.unsplash.com/photo-1611166819965-87dc032ed901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTgzNjYyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Read what our customers have to say about our custom time-blocking calendar service.',
  author1Position: 'Marketing Manager',
  author3Position: 'Freelancer',
  author4Alt: 'Image of Sarah Lee',
  heading1: 'Testimonials',
  author2Src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTgzNjYyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Jane Smith',
  author3Name: 'David Johnson',
  author2Name: 'Jane Smith',
  author3Alt: 'Image of David Johnson',
  author4Position: 'Consultant',
  author4Name: 'Sarah Lee',
  review1:
    'I have been using this calendar service for a month now, and it has completely transformed how I manage my time. Highly recommended!',
  review4:
    'I love how easy it is to use this service. The seamless sign-up and payment process made getting started a breeze.',
  author1Name: 'John Doe',
}

Testimonial17.propTypes = {
  review2: PropTypes.string,
  author2Position: PropTypes.string,
  author3Src: PropTypes.string,
  author1Alt: PropTypes.string,
  review3: PropTypes.string,
  author4Src: PropTypes.string,
  author1Src: PropTypes.string,
  content1: PropTypes.string,
  author1Position: PropTypes.string,
  author3Position: PropTypes.string,
  author4Alt: PropTypes.string,
  heading1: PropTypes.string,
  author2Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author3Name: PropTypes.string,
  author2Name: PropTypes.string,
  author3Alt: PropTypes.string,
  author4Position: PropTypes.string,
  author4Name: PropTypes.string,
  review1: PropTypes.string,
  review4: PropTypes.string,
  author1Name: PropTypes.string,
}

export default Testimonial17
