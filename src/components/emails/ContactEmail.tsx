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
            One of our team members will be in touch within the next few days to
            discuss how we can help automate and accelerate your business.
          </Text>
          <Text style={styles.paragraph}>
            We look forward to connecting soon. 🚀
          </Text>
          <Text style={styles.signature}>— The Juus AI Team</Text>
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
