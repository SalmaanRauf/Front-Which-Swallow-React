import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './pricing14.css'

const Pricing14 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="pricing14-pricing23 thq-section-padding">
      <div className="pricing14-max-width thq-section-max-width">
        <div className="pricing14-section-title">
          <span className="pricing14-text thq-body-small">
            {props.content1}
          </span>
          <div className="pricing14-content">
            <h2 className="pricing14-text01 thq-heading-2">{props.heading1}</h2>
            <p className="pricing14-text02 thq-body-large">{props.content2}</p>
          </div>
        </div>
        <div className="pricing14-tabs">
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing14-button thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing14-button01 thq-button-animated thq-button-outline"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing14-button02 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing14-button03 thq-button-animated thq-button-outline"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
        </div>
        {isMonthly && (
          <div className="pricing14-container">
            <div className="pricing14-column thq-card">
              <div className="pricing14-price">
                <div className="pricing14-price01">
                  <p className="pricing14-text07 thq-body-large">
                    {props.plan1}
                  </p>
                  <h3 className="pricing14-text08 thq-heading-3">
                    {props.plan1Price}
                  </h3>
                  <p className="thq-body-large">{props.plan1Yearly}</p>
                </div>
                <div className="pricing14-list">
                  <div className="pricing14-list-item">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1}
                    </span>
                  </div>
                  <div className="pricing14-list-item01">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2}
                    </span>
                  </div>
                  <div className="pricing14-list-item02">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button04 thq-button-animated thq-button-outline">
                <span className="thq-body-small">{props.plan1Action}</span>
              </button>
            </div>
            <div className="pricing14-column1 thq-card">
              <div className="pricing14-price02">
                <div className="pricing14-price03">
                  <p className="pricing14-text14 thq-body-large">
                    {props.plan2}
                  </p>
                  <h3 className="pricing14-text15 thq-heading-3">
                    {props.plan2Price}
                  </h3>
                  <p className="thq-body-large">{props.plan2Yearly}</p>
                </div>
                <div className="pricing14-list1">
                  <div className="pricing14-list-item03">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature1}
                    </span>
                  </div>
                  <div className="pricing14-list-item04">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature2}
                    </span>
                  </div>
                  <div className="pricing14-list-item05">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature3}
                    </span>
                  </div>
                  <div className="pricing14-list-item06">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature4}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button05 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan2Action}</span>
              </button>
            </div>
            <div className="pricing14-column2 thq-card">
              <div className="pricing14-price04">
                <div className="pricing14-price05">
                  <p className="pricing14-text22 thq-body-large">
                    {props.plan3}
                  </p>
                  <h3 className="pricing14-text23 thq-heading-3">
                    {props.plan3Price}
                  </h3>
                  <p className="thq-body-large">{props.plan3Yearly}</p>
                </div>
                <div className="pricing14-list2">
                  <div className="pricing14-list-item07">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature1}
                    </span>
                  </div>
                  <div className="pricing14-list-item08">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature2}
                    </span>
                  </div>
                  <div className="pricing14-list-item09">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature3}
                    </span>
                  </div>
                  <div className="pricing14-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature4}
                    </span>
                  </div>
                  <div className="pricing14-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature5}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button06 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan3Action}</span>
              </button>
            </div>
          </div>
        )}
        {!isMonthly && (
          <div className="pricing14-container1">
            <div className="pricing14-column3 thq-card">
              <div className="pricing14-price06">
                <div className="pricing14-price07">
                  <span className="pricing14-text31 thq-body-large">
                    {props.plan11}
                  </span>
                  <h3 className="pricing14-text32 thq-heading-3">
                    {props.plan1Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan1Yearly1}</span>
                </div>
                <div className="pricing14-list3">
                  <div className="pricing14-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11}
                    </span>
                  </div>
                  <div className="pricing14-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21}
                    </span>
                  </div>
                  <div className="pricing14-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button07 thq-button-animated thq-button-outline">
                <span className="thq-body-small">{props.plan1Action1}</span>
              </button>
            </div>
            <div className="pricing14-column4 thq-card">
              <div className="pricing14-price08">
                <div className="pricing14-price09">
                  <span className="pricing14-text38 thq-body-large">
                    {props.plan21}
                  </span>
                  <h3 className="pricing14-text39 thq-heading-3">
                    {props.plan2Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan2Yearly1}</span>
                </div>
                <div className="pricing14-list4">
                  <div className="pricing14-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11}
                    </span>
                  </div>
                  <div className="pricing14-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21}
                    </span>
                  </div>
                  <div className="pricing14-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31}
                    </span>
                  </div>
                  <div className="pricing14-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button08 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan2Action1}</span>
              </button>
            </div>
            <div className="pricing14-column5 thq-card">
              <div className="pricing14-price10">
                <div className="pricing14-price11">
                  <span className="pricing14-text46 thq-body-large">
                    {props.plan31}
                  </span>
                  <h3 className="pricing14-text47 thq-heading-3">
                    {props.plan3Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan3Yearly1}</span>
                </div>
                <div className="pricing14-list5">
                  <div className="pricing14-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11}
                    </span>
                  </div>
                  <div className="pricing14-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21}
                    </span>
                  </div>
                  <div className="pricing14-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31}
                    </span>
                  </div>
                  <div className="pricing14-list-item22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41}
                    </span>
                  </div>
                  <div className="pricing14-list-item23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button09 thq-button-animated thq-button-filled">
                <span className="thq-body-small">{props.plan3Action1}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing14.defaultProps = {
  plan1Action: 'Subscribe Now',
  plan3Yearly: '$299/year',
  plan2Yearly: '$199/year',
  plan3Price1: '$499/yr',
  plan3Feature1: 'All features in Plan 2',
  plan2Feature11: 'Feature text goes here',
  plan3Feature2: 'Personalized productivity coaching session',
  plan3Feature41: 'Feature text goes here',
  plan3Feature11: 'Feature text goes here',
  plan1Feature11: 'Feature text goes here',
  plan3Action: 'Subscribe Now',
  plan2Feature21: 'Feature text goes here',
  plan2Feature2: 'Group calendar sharing',
  plan2Yearly1: 'or $29 monthly',
  plan1: 'Basic plan',
  plan1Yearly: '$99/year',
  plan3Feature51: 'Feature text goes here',
  plan2Price1: '$299/yr',
  plan3Yearly1: 'or $49 monthly',
  plan2Action: 'Subscribe Now',
  plan3Action1: 'Get started',
  plan1Feature31: 'Feature text goes here',
  content1: 'Choose the perfect plan for you',
  plan3Feature21: 'Feature text goes here',
  plan1Feature21: 'Feature text goes here',
  plan11: 'Basic plan',
  plan3Feature3: 'Bi-weekly progress check-ins',
  plan31: 'Enterprise plan',
  plan1Yearly1: 'or $20 monthly',
  plan2: 'Business plan',
  plan2Feature31: 'Feature text goes here',
  plan2Feature3: 'Advanced analytics dashboard',
  plan2Action1: 'Get started',
  plan1Feature1: 'Customizable time-blocking calendar',
  plan3Price: '$29.99/month',
  plan1Price1: '$200/yr',
  plan2Price: '$19.99/month',
  plan1Action1: 'Get started',
  plan2Feature1: 'All features in Plan 1',
  plan2Feature4: 'Feature text goes here',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  plan3: 'Enterprise plan',
  plan3Feature4: 'Feature text goes here',
  plan21: 'Business plan',
  plan1Feature3: 'Access to exclusive templates',
  plan3Feature5: 'Feature text goes here',
  plan1Price: '$9.99/month',
  heading1: 'Pricing plan',
  plan3Feature31: 'Feature text goes here',
  plan2Feature41: 'Feature text goes here',
  plan1Feature2: 'Priority email support',
}

Pricing14.propTypes = {
  plan1Action: PropTypes.string,
  plan3Yearly: PropTypes.string,
  plan2Yearly: PropTypes.string,
  plan3Price1: PropTypes.string,
  plan3Feature1: PropTypes.string,
  plan2Feature11: PropTypes.string,
  plan3Feature2: PropTypes.string,
  plan3Feature41: PropTypes.string,
  plan3Feature11: PropTypes.string,
  plan1Feature11: PropTypes.string,
  plan3Action: PropTypes.string,
  plan2Feature21: PropTypes.string,
  plan2Feature2: PropTypes.string,
  plan2Yearly1: PropTypes.string,
  plan1: PropTypes.string,
  plan1Yearly: PropTypes.string,
  plan3Feature51: PropTypes.string,
  plan2Price1: PropTypes.string,
  plan3Yearly1: PropTypes.string,
  plan2Action: PropTypes.string,
  plan3Action1: PropTypes.string,
  plan1Feature31: PropTypes.string,
  content1: PropTypes.string,
  plan3Feature21: PropTypes.string,
  plan1Feature21: PropTypes.string,
  plan11: PropTypes.string,
  plan3Feature3: PropTypes.string,
  plan31: PropTypes.string,
  plan1Yearly1: PropTypes.string,
  plan2: PropTypes.string,
  plan2Feature31: PropTypes.string,
  plan2Feature3: PropTypes.string,
  plan2Action1: PropTypes.string,
  plan1Feature1: PropTypes.string,
  plan3Price: PropTypes.string,
  plan1Price1: PropTypes.string,
  plan2Price: PropTypes.string,
  plan1Action1: PropTypes.string,
  plan2Feature1: PropTypes.string,
  plan2Feature4: PropTypes.string,
  content2: PropTypes.string,
  plan3: PropTypes.string,
  plan3Feature4: PropTypes.string,
  plan21: PropTypes.string,
  plan1Feature3: PropTypes.string,
  plan3Feature5: PropTypes.string,
  plan1Price: PropTypes.string,
  heading1: PropTypes.string,
  plan3Feature31: PropTypes.string,
  plan2Feature41: PropTypes.string,
  plan1Feature2: PropTypes.string,
}

export default Pricing14
