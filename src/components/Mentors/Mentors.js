import { EnvelopeSimple } from 'phosphor-react';
import { mentors } from '../../config/constants';
import images from "../../assets/Assets";

export default function Mentors() {
  const renderDescription = (description, index) => {
    return (
      <p className="m-0 text-center mb-2" key={index}>{description}</p>
    )
  }

  const renderMentor = (mentor, index) => {
    const image = images[`${mentor.image}`];
    return (
      <div className='col-span-1 flex justify-center items-center flex-col' key={index}>
        <div className={`h-[300px] w-[300px] ${mentor.background} ring-offset-2 ring-2 mb-4 rounded-full overflow-hidden`}>
          <img className='w-[85%] ml-10 mt-4' src={image} alt="f"/>
        </div>
        <p className="m-0 mb-2 text-2xl font-semibold">{mentor.displayName}</p>
        {mentor.description.map(renderDescription)}
        <p className='mb-2'>Office: {mentor.office}</p>
        <div className="flex justify-center items-center">
          <EnvelopeSimple size={24} className='mr-2'/>
          {mentor.email}
        </div>
      </div>
    )
  }


  return (
    <div className='body-height p-10'>
      <div className="text-4xl font-semibold text-green-900 mb-16 w-full text-center">Meet Our Mentors</div>
      <div className='grid grid-cols-2 grid-rows-1 gap-8'>
        {mentors.map(renderMentor)}
      </div>
    </div>
  )
}