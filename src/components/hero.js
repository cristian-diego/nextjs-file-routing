import Image from 'next/image'

/**
 *
 * @param props
 * @param props.title is a  title
 * @param props.imgData is a StaticImage component
 * @param props.imgAlt is alt for image
 * @returns
 */
export default function Hero(props) {
  console.log(props)

  return (
    <div className='relative h-screen'>
      <div className='absolute -z-10 inset-0'>
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className='pt-48 flex justify-center items-center'>
        <h1 className='text-white text-6xl'> {props.title}</h1>
      </div>
    </div>
  )
}
