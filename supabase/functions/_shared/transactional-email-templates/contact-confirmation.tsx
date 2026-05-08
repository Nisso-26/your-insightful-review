import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Hunters Immobilier'

interface ContactConfirmationProps {
  firstName?: string
}

const ContactConfirmationEmail = ({ firstName }: ContactConfirmationProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Votre demande a bien été reçue — {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={brand}>HUNTERS</Text>
          <Hr style={goldRule} />
        </Section>

        <Heading style={h1}>
          {firstName ? `Bonjour ${firstName},` : 'Bonjour,'}
        </Heading>

        <Text style={text}>
          Nous vous remercions pour votre prise de contact. Votre demande nous est
          bien parvenue et a retenu toute notre attention.
        </Text>

        <Text style={text}>
          Un conseiller Hunters reviendra vers vous sous{' '}
          <strong>24 heures ouvrées</strong> afin d'échanger sur votre projet et
          d'identifier ensemble les opportunités les mieux adaptées à vos
          objectifs patrimoniaux.
        </Text>

        <Section style={infoBox}>
          <Text style={infoTitle}>Nous joindre</Text>
          <Text style={infoLine}>
            <Link href="tel:0259160337" style={link}>02 59 16 03 37</Link>
          </Text>
          <Text style={infoLine}>
            <Link href="mailto:hunters@huntersimmobilier.fr" style={link}>
              hunters@huntersimmobilier.fr
            </Link>
          </Text>
          <Text style={infoLine}>45 rue Michel Colombe, 37000 Tours</Text>
        </Section>

        <Text style={text}>
          Dans l'attente de cet échange, nous vous prions d'agréer l'expression
          de nos salutations distinguées.
        </Text>

        <Hr style={hr} />
        <Text style={signature}>L'équipe {SITE_NAME}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'Votre demande a bien été reçue — Hunters Immobilier',
  displayName: 'Confirmation contact',
  previewData: { firstName: 'Camille' },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: "'Montserrat', Arial, sans-serif",
  color: '#1A4D2E',
}
const container = {
  maxWidth: '560px',
  margin: '0 auto',
  padding: '40px 32px',
}
const header = { textAlign: 'center' as const, marginBottom: '32px' }
const brand = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: '28px',
  letterSpacing: '6px',
  color: '#1A4D2E',
  margin: '0 0 12px',
  fontWeight: 500,
}
const goldRule = {
  border: 'none',
  borderTop: '2px solid #F5A800',
  width: '48px',
  margin: '0 auto',
}
const h1 = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: '26px',
  fontWeight: 400,
  color: '#1A4D2E',
  margin: '0 0 20px',
}
const text = {
  fontSize: '15px',
  lineHeight: '1.7',
  color: '#3a3a3a',
  margin: '0 0 18px',
}
const infoBox = {
  backgroundColor: '#F8F7F3',
  borderLeft: '3px solid #F5A800',
  padding: '20px 24px',
  margin: '28px 0',
}
const infoTitle = {
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '2px',
  textTransform: 'uppercase' as const,
  color: '#1A4D2E',
  margin: '0 0 12px',
}
const infoLine = {
  fontSize: '14px',
  color: '#3a3a3a',
  margin: '0 0 6px',
  lineHeight: '1.5',
}
const link = { color: '#1A4D2E', textDecoration: 'none' }
const hr = {
  border: 'none',
  borderTop: '1px solid #e5e5e0',
  margin: '32px 0 20px',
}
const signature = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: '15px',
  fontStyle: 'italic',
  color: '#1A4D2E',
  margin: 0,
}
