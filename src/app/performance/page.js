import Hero from '@/components/hero'
import performanceImg from '@/../public/performance.jpg'

export default function Performance() {
  return (
    <Hero
      imgData={performanceImg}
      title='We serve high performance applications'
      imgAlt='Performance Image'
    />
  )
}
