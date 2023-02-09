import { deliverables } from "../../config/constants";

export default function Deliverables() {
  const renderDeliverable = (deliverable, index) => {
    return (<div key={index} className="flex justify-center items-center">
      <div className="m-0 border-2 border-slate-300 rounded-full h-6 w-6 bg-white" style={{ marginLeft: '-13px' }}></div>
      <div className="border-2 border-slate-300 p-3 rounded-md max-w-[400px] min-w-[400px] ml-10 flex justify-between items-center">
        <p className="m-0 font-semibold">{deliverable.title}</p>
        <p className="text-sm bg-green-50 text-green-500 p-1 px-4 rounded-lg">{deliverable.status}</p>
      </div>
    </div>)
  }

  return (
    <div className="body-height p-16 flex justify-center items-center">
      <div className="h-full mb-10 border-r-2 border-slate-300"></div>
      <div className="h-full mb-10 flex flex-col justify-between items-center">{deliverables.map(renderDeliverable)}</div>
    </div>
  )
}