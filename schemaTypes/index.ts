import blockContent from './blockContent'
import seo from './seo'
import page from './page'
import post from './post'
import category from './category'
import teamMember from './teamMember'
import clientLogo from './clientLogo'
import siteSettings from './siteSettings'
import hero from './objects/hero'
import servicePillars from './objects/servicePillars'
import logoBar from './objects/logoBar'
import textSection from './objects/textSection'
import ctaSection from './objects/ctaSection'
import teamGrid from './objects/teamGrid'
import blogLatest from './objects/blogLatest'
import impactSection from './objects/impactSection'
import contactForm from './objects/contactForm'

export const schemaTypes = [
  // Document types
  page,
  post,
  category,
  teamMember,
  clientLogo,
  siteSettings,
  // Object types
  blockContent,
  seo,
  hero,
  servicePillars,
  logoBar,
  textSection,
  ctaSection,
  teamGrid,
  blogLatest,
  impactSection,
  contactForm,
]
