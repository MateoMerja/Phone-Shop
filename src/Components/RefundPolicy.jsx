import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../Css/RefoundPolicy.css";

const RefundPolicy =()=> {
  return (
    <div className="refund-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="refund-card shadow border-0 p-4 p-md-5">
              <h1 className="refund-title mb-4">Refund Policy</h1>
              <p className="refund-updated">Last Updated: September 11, 2025</p>

              <section className="refund-block">
                <p>
                  At <strong>ExampleApp</strong> (“Company”, “we”, “our”, or “us”), your satisfaction is
                  important to us. This Refund Policy describes the conditions under which refunds,
                  cancellations, and exchanges are offered for purchases made through our Services.
                </p>
              </section>

              <section className="refund-block">
                <h3>1. General Eligibility</h3>
                <ul>
                  <li>Refunds are available only for purchases made directly from ExampleApp.</li>
                  <li>A valid proof of purchase (order number, receipt, or invoice) must be provided.</li>
                  <li>Refund requests must be made within <strong>14 calendar days</strong> of the purchase date.</li>
                </ul>
              </section>

              <section className="refund-block">
                <h3>2. Services and Subscriptions</h3>
                <p>For digital services and subscriptions:</p>
                <ul>
                  <li>If the service has not been accessed or used, you may request a full refund.</li>
                  <li>Once a subscription period has started, refunds are only granted in exceptional cases (e.g., service outage).</li>
                  <li>Automatic renewals are non-refundable, but you may cancel future renewals at any time.</li>
                </ul>
              </section>

              <section className="refund-block">
                <h3>3. Products</h3>
                <ul>
                  <li>Physical products may be returned within <strong>30 days</strong> if they are unused and in original packaging.</li>
                  <li>Customers are responsible for return shipping costs unless the product was defective or incorrect.</li>
                  <li>Refunds will be processed once the returned product is received and inspected.</li>
                </ul>
              </section>

              <section className="refund-block">
                <h3>4. Non-Refundable Purchases</h3>
                <ul>
                  <li>Gift cards, vouchers, and promotional credits.</li>
                  <li>Services that have been fully delivered or consumed.</li>
                  <li>Customized or personalized items.</li>
                  <li>Items marked as “final sale.”</li>
                </ul>
              </section>

              <section className="refund-block">
                <h3>5. Refund Process</h3>
                <ul>
                  <li>Submit your request via email to <strong>support@exampleapp.com</strong>.</li>
                  <li>Provide your order details and reason for the request.</li>
                  <li>Our team will review your request within <strong>5–7 business days</strong>.</li>
                </ul>
              </section>

              <section className="refund-block">
                <h3>6. Payment Method</h3>
                <p>
                  Approved refunds will be issued to the original payment method. Depending on your bank
                  or provider, funds may take <strong>7–10 business days</strong> to appear in your account.
                </p>
              </section>

              <section className="refund-block">
                <h3>7. Exchanges</h3>
                <p>
                  We may offer exchanges instead of refunds for certain items. If your product is damaged
                  or defective, contact us to arrange a replacement at no extra cost.
                </p>
              </section>

              <section className="refund-block">
                <h3>8. Disputes</h3>
                <p>
                  If you disagree with a refund decision, you may appeal by contacting our support team.
                  We will re-evaluate your case and provide a final response.
                </p>
              </section>

              <section className="refund-block">
                <h3>9. Policy Updates</h3>
                <p>
                  We reserve the right to amend this Refund Policy at any time. Changes will be posted on
                  this page with an updated “Last Updated” date.
                </p>
              </section>

              <section className="refund-block">
                <h3>10. Contact Us</h3>
                <p>
                  For questions about this Refund Policy, contact us at:
                </p>
                <p>
                  <strong>Email:</strong> support@exampleapp.com<br />
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
export default RefundPolicy;