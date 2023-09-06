import React, { useRef } from 'react';
import SectionSeperator from '../sectionSeperator/SectionSeperator';
import './ContactPage.css';
import SocialMediaLink from './socialMediaLink/SocialMediaLink';

const ContactPage = () => {
  return (
    <>
      <SectionSeperator name="03. -- CONTACT" />
      <div id="contact-div">
        <div id="contact-page-left-side-div">Contact me</div>
        <div id="contact-page-right-side-div">
          <div id="contact-page-right-side-top-div">
            It would be an honor to talk to you!
          </div>
          <div id="contact-page-right-side-bottom-div">
            <div id="general-info-div">
              <div className="contact-page-bolded-info">GENERAL INFORMATION</div>
              <div className="contact-info-child-div">
                Phone
                <div className="contact-page-bolded-info">+370 616 04639</div>
              </div>
              <div className="contact-info-child-div">
                Email
                <div className="contact-page-bolded-info">doremis.lt@gmail.com</div>
              </div>
            </div>
            <div id="social-media-div">
              <div className="contact-page-bolded-info" id="social-media-title">
                SOCIAL MEDIA
              </div>

              <div className="contact-info-child-div">
                <SocialMediaLink
                  linkHref={'https://www.facebook.com/profile.php?id=100008456045198'}
                  linkName={'Facebook'}
                />

                <div className="social-media-link-div">
                  <a href="" className="social-media-link">
                    LinkedIn <br />
                  </a>
                </div>
                <div className="social-media-link-div">
                  <a href="" className="social-media-link">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
