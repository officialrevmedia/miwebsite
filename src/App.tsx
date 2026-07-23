import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Teachers = lazy(() => import('./pages/Teachers'))
const TeacherProfile = lazy(() => import('./pages/TeacherProfile'))
const Programs = lazy(() => import('./pages/Programs'))
const ProgramPage = lazy(() => import('./pages/ProgramPage'))
const Impact = lazy(() => import('./pages/Impact'))
const ImpactRamadan = lazy(() => import('./pages/ImpactRamadan'))
const Research = lazy(() => import('./pages/Research'))
const Article = lazy(() => import('./pages/Article'))
const Media = lazy(() => import('./pages/Media'))
const Donate = lazy(() => import('./pages/Donate'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Accessibility = lazy(() => import('./pages/Accessibility'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Redirect helpers for old site paths.
function ScholarRedirect() {
  const { slug } = useParams()
  const map: Record<string, string> = {
    'shaykh-zakaria': 'shaykh-zakaria-abdilaziz',
    'ustadh-nuh-sanders': 'shaykh-nuh-sanders',
  }
  return <Navigate to={`/teachers/${map[slug ?? ''] ?? slug}`} replace />
}
function BlogRedirect() {
  const { slug } = useParams()
  return <Navigate to={`/research/${slug}`} replace />
}

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-paper" aria-hidden="true" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/:slug" element={<TeacherProfile />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:slug" element={<ProgramPage />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/impact/ramadan-2026" element={<ImpactRamadan />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:slug" element={<Article />} />
          <Route path="/media" element={<Media />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/accessibility" element={<Accessibility />} />

          {/* Redirects from the previous website's structure */}
          <Route path="/scholars" element={<Navigate to="/teachers" replace />} />
          <Route path="/scholars/:slug" element={<ScholarRedirect />} />
          <Route path="/blog" element={<Navigate to="/research" replace />} />
          <Route path="/blog/:slug" element={<BlogRedirect />} />
          <Route path="/academics" element={<Navigate to="/programs" replace />} />
          <Route path="/donations" element={<Navigate to="/donate" replace />} />
          <Route path="/campaigns/ramadan-2026" element={<Navigate to="/impact/ramadan-2026" replace />} />
          <Route path="/community" element={<Navigate to="/contact" replace />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
