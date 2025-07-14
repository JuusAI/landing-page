// emails/ConfirmationEmail.tsx
import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Section,
  Text,
  Container,
  Heading,
  Link,
  Img,
} from "@react-email/components";

interface ConfirmationEmailProps {
  name: string;
}

export const ConfirmationEmail = ({ name }: ConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>We’ve received your message — Juus AI</Preview>
      <Section style={styles.main}>
        <Container style={styles.container}>
          <Heading style={styles.heading}>Hello {name || "there"},</Heading>
          <Text style={styles.paragraph}>
            Thanks for reaching out to <strong>Juus AI</strong>.
          </Text>
          <Text style={styles.paragraph}>
            Your message has been received, and our AI experts are reviewing it.
            One of our team members will be in touch within the next 6 - 12
            hours to discuss how we can help automate and accelerate your
            business.
          </Text>
          <Text style={styles.paragraph}>
            We look forward to connecting soon. 🚀
          </Text>
          <Text style={styles.signature}>— The Juus AI Team</Text>
        </Container>
      </Section>
      <Section>
        <Container style={container}>
          <table cellPadding="0" cellSpacing="0" style={table}>
            <tbody>
              <tr>
                <td style={{ paddingRight: "15px" }}>
                  <Img
                    src="https://rf22perauprm1rzu.public.blob.vercel-storage.com/unnamed-no-bg2.png"
                    width="140"
                    height="140"
                    alt="John Doe"
                    style={{ maxWidth: "100%" }}
                  />
                </td>
                <td>
                  <Text style={nameStyle}>John Doe</Text>
                  <Text style={title}>Automation Consultant</Text>
                  <Text style={company}>JUUS AI</Text>
                  <Text style={line}>
                    📧{" "}
                    <Link href="mailto:hello@juus.ai" style={link}>
                      hello@juus.ai
                    </Link>
                  </Text>
                  <Text style={line}>
                    🌐{" "}
                    <Link href="https://www.juus.ai" style={link}>
                      www.juus.ai
                    </Link>
                  </Text>
                  <Text style={line}>
                    📅{" "}
                    <Link href="https://yourcalendarlink.com" style={link}>
                      Schedule a Call
                    </Link>
                  </Text>
                  <Text style={line}>
                    <Link href="https://instagram.com/juus.ai" style={link}>
                      <Img
                        src="https://img.icons8.com/?size=100&amp;id=32323&amp;format=png&amp;color=000000"
                        width="18"
                        alt="Instagram"
                        style={{
                          verticalAlign: "middle",
                          marginRight: "4px",
                          display: "inline-block",
                        }}
                      />
                      Follow us on Instagram
                    </Link>
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Container>
      </Section>
    </Html>
  );
};

export default ConfirmationEmail;

const styles = {
  main: {
    backgroundColor: "#f3f4f6", // light grey background
    padding: "40px 0",
    fontFamily: "'Segoe UI', sans-serif",
  },
  container: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "48px",
    maxWidth: "520px",
    margin: "0 auto",
    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.05)", // subtle futuristic glow
    border: "1px solid #e5e7eb",
  },
  heading: {
    fontSize: "26px",
    color: "#0f172a", // slate-900
    marginBottom: "20px",
    fontWeight: "600",
    letterSpacing: "-0.5px",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#334155", // slate-700
    marginBottom: "18px",
  },
  signature: {
    fontSize: "14px",
    color: "#64748b", // slate-500
    marginTop: "28px",
  },
};

const container = {
  backgroundColor: "#ffffff",
  padding: "20px",
  margin: 0,
};

const table = {
  width: "100%",
};

const nameStyle = {
  margin: "0",
  fontWeight: "bold",
  fontSize: "16px",
};

const title = {
  margin: "2px 0",
};

const company = {
  margin: "2px 0",
};

const line = {
  margin: "6px 0",
};

const link = {
  color: "#0073e6",
  textDecoration: "none",
};
