import { Seo } from '../lib/seo'
import { organizationSchema } from '../lib/schema'
import { GardensHero } from '../components/hero/GardensHero'
import {
  MeaningSection,
  TeachersSection,
  ProgramsSection,
  ImpactSection,
  MediaSection,
  ResearchSection,
  SupportSection,
} from '../components/home/sections'

export default function Home() {
  return (
    <>
      <Seo
        title="Muraqabah Initiative | Traditional Islamic Education in the GTA and Online"
        description="Traditional Islamic education, spiritual formation, and sincere community service. Join Gardens of Paradise, a weekly study circle with Shaykh Zakaria AbdilAziz, launching September 2026."
        path="/"
        jsonLd={organizationSchema}
      />
      <GardensHero />
      <MeaningSection />
      <TeachersSection />
      <ProgramsSection />
      <ImpactSection />
      <MediaSection />
      <ResearchSection />
      <SupportSection />
    </>
  )
}
