import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../Css/PrivacyPolicy.css";

const PrivacyPolicy=()=> {
  return (
    <div className="privacy-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="privacy-card shadow border-0 p-4 p-md-5">
              <h1 className="privacy-title mb-4">Privacy Policy</h1>
              <p className="privacy-updated">Last Updated: September 11, 2025</p>

              <section className="privacy-block">
                <p>
                  At <strong>ExampleApp</strong> (“Company”, “we”, “our”, or “us”), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Services.
                </p>
              </section>

              <section className="privacy-block">
                <h3>1. Information We Collect</h3>
                <ul>
                  <li>Personal information you provide directly (e.g., name, email, phone).</li>
                  <li>Account credentials when registering for our Services.</li>
                  <li>Usage data such as IP address, browser type, and pages visited.</li>
                  <li>Cookies and similar tracking technologies.</li>
                </ul>
              </section>

              <section className="privacy-block">
                <h3>2. How We Use Your Information</h3>
                <ul>
                  <li>To provide and maintain our Services.</li>
                  <li>To communicate with you, including customer support.</li>
                  <li>To improve and personalize user experience.</li>
                  <li>For security, fraud prevention, and legal compliance.</li>
                </ul>
              </section>

              <section className="privacy-block">
                <h3>3. Sharing of Information</h3>
                <p>We do not sell your personal information. We may share your data with:</p>
                <ul>
                  <li>Service providers who assist in operating our Services.</li>
                  <li>Legal authorities if required by law.</li>
                  <li>In the event of a merger, acquisition, or asset sale.</li>
                </ul>
              </section>

              <section className="privacy-block">
                <h3>4. Data Security</h3>
                <p>We implement reasonable technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
              </section>

              <section className="privacy-block">
                <h3>5. Your Rights</h3>
                <p>Depending on your jurisdiction, you may have rights including:</p>
                <ul>
                  <li>Accessing the personal data we hold about you.</li>
                  <li>Requesting correction or deletion of your data.</li>
                  <li>Objecting to or restricting certain processing of your data.</li>
                  <li>Data portability rights.</li>
                </ul>
              </section>

              <section className="privacy-block">
                <h3>6. Data Retention</h3>
                <p>We retain your information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
              </section>

              <section className="privacy-block">
                <h3>7. Third-Party Links</h3>
                <p>Our Services may contain links to third-party websites. We are not responsible for the privacy practices or content of such third parties.</p>
              </section>

              <section className="privacy-block">
                <h3>8. Changes to This Privacy Policy</h3>
                <p>We may update this Privacy Policy periodically. If we make significant changes, we will notify you by posting the updated policy on our Services. Your continued use constitutes acceptance of these changes.</p>
              </section>

              <section className="privacy-block">
                <h3>9. Contact Us</h3>
                <p>If you have questions about this Privacy Policy, please contact us at:</p>
                <p>
                  <strong>Email:</strong> privacy@exampleapp.com<br />
                  <strong>Address:</strong> ExampleApp HQ, 123 Main Street, Tirana, Albania
                </p>
              </section>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default PrivacyPolicy;