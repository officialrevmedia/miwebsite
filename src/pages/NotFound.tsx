import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo } from '../lib/seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you are looking for does not exist." path="/404" />
      <section className="bg-cream pb-24 pt-40 lg:pt-52">
        <div className="container-site max-w-2xl text-center">
          <p lang="ar" dir="rtl" className="font-arabic text-6xl text-sand" aria-hidden="true">مُراقَبة</p>
          <h1 className="mt-6 font-display text-5xl font-semibold text-deep">This page does not exist.</h1>
          <p className="prose-mq mx-auto mt-5 text-center">
            The address may have changed, or the page may have moved. Everything we offer can be
            reached from the home page.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/" className="btn-primary">Return home <ArrowRight size={15} aria-hidden="true" /></Link>
            <Link to="/programs" className="btn-outline">View programs</Link>
          </div>
        </div>
      </section>
    </>
  )
}
