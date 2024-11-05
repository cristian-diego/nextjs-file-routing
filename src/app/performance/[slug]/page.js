import Hero from '@/components/hero'
import performanceImg from '@/../public/performance.jpg'
export default async function Page({ params }) {
  const slug = (await params).slug
  return (
    <Hero imgData={performanceImg} title={slug} imgAlt='Performance Image' />
  )
}
