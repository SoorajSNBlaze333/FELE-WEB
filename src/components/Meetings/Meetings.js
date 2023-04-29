import { minutesOfMeeting } from "../../config/constants"

export default function Meetings() {
  const renderMOM = (mom, index) => {
    return (<a href={mom.filePath} className={`w-full ${!index ? "border-2" : "border-b-2 border-x-2"} ${!index ? "rounded-t-md" : ""} ${index === minutesOfMeeting.length - 1 ? "rounded-b-md" : ""} border-slate-300/60 p-3 cursor-pointer transition duration-200 hover:bg-green-50 hover:text-green-900 flex justify-center items-center select-none`} key={index}>
      <p className="mx-2">{mom.date}</p>
      <p className="">{mom.time}</p>
    </a>)
  }

  return (
    <section className="body-height p-10 flex flex-col justify-start items-center">
      <p className="mb-4 text-2xl font-semibold w-full text-center">Mentor Meetings</p>
      <section className="grid grid-cols-1 grid-rows-14 w-[500px] text-sm">{minutesOfMeeting.map(renderMOM)}</section>
    </section>
  )
}

