import { deliverables } from "../../config/constants";

export default function Deliverables() {
  const renderDeliverable = (deliverable, index) => {
    return (<div key={index} className="flex justify-center items-center relative">
      <div className={`m-0 border-2 rounded-full h-6 w-6 bg-white ${deliverable.statusClassName}`} style={{ marginLeft: '-13px' }}></div>
      <hr className={`bg-slate-100 border-[1px] w-12`} />
      <div className="border-2 border-slate-200 p-3 rounded-md max-w-[400px] min-w-[400px] flex justify-between items-center">
        <p className="m-0 font-semibold text-slate-600">{deliverable.title}</p>
        <p className={`text-sm ${deliverable.className} p-1 px-4 rounded-2xl`}>{deliverable.status}</p>
      </div>
    </div>)
  }

  return (
    <div className="body-height p-16 flex justify-center items-center">
      <div className="h-full mb-10 border-r-2 border-slate-200"></div>
      <div className="h-full mb-10 flex flex-col justify-between items-center">{deliverables.map(renderDeliverable)}</div>
    </div>
  )
}