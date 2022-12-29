import React from 'react'
import './Footer.css'
function Footer() {
  return (
 <>
    <div className="footer">
      <div className="footer__links">
        <ul>
          <li>
            <a href="https://help.netflix.com/support/412">FAQ</a>{" "}
          </li>
          <li>
            <a href="http://ir.netflix.com/">Investor Relations</a>
          </li>
          <li>
            <a href="https://www.netflix.com/watch">Ways to Watch</a>
          </li>
          <li>
            <a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a>
          </li>
          <li>
            <a href="https://www.netflix.com/browse/genre/839338">Only on Netflix</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://help.netflix.com/">Help Center</a>
          </li>
          <li>
            <a href="https://jobs.netflix.com/jobs">Jobs</a>
          </li>
          <li>
            <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
          </li>
          <li>
            <a href="https://help.netflix.com/contactus">Contact us</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="https://www.netflix.com/dnsspi">Account</a>
          </li>
          <li>
            <a href="https://www.netflix.com/redeem">Redeem Gift Cards</a>
          </li>
          <li>
            <a href="https://help.netflix.com/legal/privacy">Privacy</a>
          </li>
          <li>
            <a href="https://fast.com/">Speed Test</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://media.netflix.com/">Media Center</a>
          </li>
          <li>
            <a href="https://www.netflix.com/gift-cards">Buy Gift Cards</a>
          </li>
          <li>
            <a href="https://www.netflix.com/#">Cookie Preferences</a>
          </li>
          <li>
            <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
          </li>
        </ul>
      </div>
      <h1>
        Built By: <a href="">Firie Abate</a>
      </h1>
      {/* <div className='languge-wrapper'>
      <div className="select-arrow medium prefix globe"><select data-uia="language-picker" className="ui-select medium" id="lang-switcher-select" tabindex="0" placeholder="lang-switcher"><option selected="" lang="en" value="/" data-language="en" data-country="US">English</option><option lang="es" value="/us-es/" data-language="es" data-country="US">Español</option></select></div>
    </div> */}
    </div>
 </>
  )
}

export default Footer