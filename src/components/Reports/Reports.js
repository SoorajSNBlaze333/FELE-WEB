import { reports } from "../../config/constants"

export default function Reports() {
  const renderReport = (report, index) => {
    return (<a href={report.filePath} className={`w-full ${!index ? "border-2" : "border-b-2 border-x-2"} ${!index ? "rounded-t-md" : ""} ${index === reports.length - 1 ? "rounded-b-md" : ""} border-slate-300/60 p-3 cursor-pointer transition duration-200 hover:bg-green-50 hover:text-green-900 flex justify-center items-center select-none`} key={index}>
      <div className="mx-2">Week {index + 1} - {report.date}</div>
    </a>)
  }

  return (
    <div className="body-height p-10 flex flex-col justify-start items-center">
      <p className="mb-4 text-2xl font-semibold w-full text-center">Weekly Reports</p>
      <div className="grid grid-cols-1 grid-rows-14 w-[500px] text-sm">
        {reports.map(renderReport)}
      </div>
    </div>
  )
}