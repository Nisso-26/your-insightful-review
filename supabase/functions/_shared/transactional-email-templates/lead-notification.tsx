import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface LeadNotificationProps {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  budget?: string
  projectType?: string
  message?: string
  submittedAt?: string
  source?: string
}

const formatDate = (value?: string) => {
  const date = value ? new Date(value) : new Date()
  if (isNaN(date.getTime())) return value ?? ''
  return new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'Europe/Paris',
  }).format(date)
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <Text style={line}>
      <span style={lineLabel}>{label} : </span>
      <span style={lineValue}>{value}</span>
    </Text>
  ) : null

const LeadNotificationEmail = ({
  firstName,
  lastName,
  email,
  phone,
  budget,
  projectType,
  message,
  submittedAt,
  source,
}: LeadNotificationProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>
      Nouvelle demande — {[firstName, lastName].filter(Boolean).join(' ') || 'prospect'}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={brand}>HUNTERS</Text>
          <Hr style={goldRule} />
        </Section>

        <Heading style={h1}>Nouvelle demande reçue</Heading>

        <Section style={infoBox}>
          <Row label="Prénom" value={firstName} />
          <Row label="Nom" value={lastName} />
          <Row label="Email" value={email} />
          <Row label="Téléphone" value={phone} />
          <Row label="Ville de résidence" value={city} />
          <Row label="Budget" value={budget} />
          <Row label="Objectif / type de projet" value={projectType} />
          <Row label="Message" value={message} />
          <Row label="Date de la demande" value={formatDate(submittedAt)} />
          <Row label="Source" value={source} />
        </Section>

        <Hr style={hr} />
        <Text style={signature}>Notification automatique — site huntersimmobilier.fr</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: LeadNotificationEmail,
  subject: (data: Record<string, any>) =>
    `Nouvelle demande — ${[data?.firstName, data?.lastName].filter(Boolean).join(' ') || 'nouveau prospect'}`,
  to: 'hunters@huntersimmobilier.fr',
  displayName: 'Notification interne — nouveau lead',
  previewData: {
    firstName: 'Camille',
    lastName: 'Durand',
    email: 'camille.durand@example.fr',
    phone: '06 12 34 56 78',
    budget: '200 000 € — 400 000 €',
    projectType: 'Rendement locatif',
    message: 'Je souhaite investir à Tours.',
    submittedAt: new Date().toISOString(),
    source: 'Formulaire étude',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: "'Montserrat', Arial, sans-serif",
  color: '#1A4D2E',
}
const container = { maxWidth: '560px', margin: '0 auto', padding: '40px 32px' }
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
const infoBox = {
  backgroundColor: '#F8F7F3',
  borderLeft: '3px solid #F5A800',
  padding: '20px 24px',
  margin: '20px 0',
}
const line = { fontSize: '14px', color: '#3a3a3a', margin: '0 0 8px', lineHeight: '1.6' }
const lineLabel = { fontWeight: 700, color: '#1A4D2E' }
const lineValue = { color: '#3a3a3a' }
const hr = { border: 'none', borderTop: '1px solid #e5e5e0', margin: '32px 0 20px' }
const signature = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: '14px',
  fontStyle: 'italic',
  color: '#1A4D2E',
  margin: 0,
}
