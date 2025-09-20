import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../Css/TermsOfService.css";

const  TermsOfService=()=> {
return (
<div className="tos-section py-5">
<Container>
<Row className="justify-content-center">
<Col lg={10}>
<Card className="tos-card shadow border-0 p-4 p-md-5">
<h1 className="tos-title mb-4">Terms of Service</h1>
<p className="tos-updated">Last Updated: September 11, 2025</p>


<section className="tos-block">
<p>
Welcome to <strong>ExampleApp</strong> (“Company”, “we”, “our”, or “us”). These Terms of Service (“Terms”) govern your use of our website, mobile application, and related services (collectively, the “Services”). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, you must not use our Services.
</p>
</section>


<section className="tos-block">
<h3>1. Eligibility</h3>
<p>You must be at least 13 years old (or the age of majority in your jurisdiction) to use our Services. By using our Services, you represent that you meet this requirement.</p>
</section>


<section className="tos-block">
<h3>2. Accounts</h3>
<ul>
<li>You may be required to create an account to access certain features.</li>
<li>You are responsible for maintaining the confidentiality of your account and password.</li>
<li>You agree to notify us immediately of any unauthorized use of your account.</li>
</ul>
</section>


<section className="tos-block">
<h3>3. Acceptable Use</h3>
<p>You agree <strong>not</strong> to:</p>
<ul>
<li>Use the Services for unlawful purposes.</li>
<li>Upload viruses, malicious code, or attempt to disrupt our systems.</li>
<li>Infringe on the intellectual property rights of others.</li>
<li>Harass, abuse, or harm other users.</li>
</ul>
</section>


<section className="tos-block">
<h3>4. Intellectual Property</h3>
<p>All content, trademarks, and data associated with the Services are owned by or licensed to us. You may not copy, distribute, or create derivative works without our prior written consent.</p>
</section>


<section className="tos-block">
<h3>5. Third-Party Services</h3>
<p>Our Services may contain links to third-party websites or integrate with third-party tools. We are not responsible for the content, policies, or practices of those third parties.</p>
</section>


<section className="tos-block">
<h3>6. Termination</h3>
<p>We reserve the right to suspend or terminate your account at any time, without notice, if you violate these Terms or engage in conduct harmful to the Services or other users.</p>
</section>


<section className="tos-block">
<h3>7. Disclaimer of Warranties</h3>
<p>The Services are provided “as is” and “as available,” without warranties of any kind, whether express or implied. We do not guarantee that the Services will be uninterrupted, secure, or error-free.</p>
</section>


<section className="tos-block">
<h3>8. Limitation of Liability</h3>
<p>To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits or revenues, whether incurred directly or indirectly.</p>
</section>


<section className="tos-block">
<h3>9. Governing Law</h3>
<p>These Terms are governed by and construed under the laws of [Your Country/State], without regard to conflict of law provisions.</p>
</section>


<section className="tos-block">
<h3>10. Changes to These Terms</h3>
<p>We may update these Terms from time to time. If we make significant changes, we will notify you by posting the updated Terms on our Services. Continued use of the Services constitutes acceptance of the revised Terms.</p>
</section>


<section className="tos-block">
<h3>11. Contact Us</h3>
<p>If you have questions about these Terms, please contact us at:</p>
<p>
<strong>Email:</strong> legal@exampleapp.com<br />
<strong>Address:</strong> ExampleApp HQ, 123 Main Street, Tirana, Albania
</p>
</section>
</Card>
</Col>
</Row>
</Container>
</div>
)
}
export default TermsOfService;