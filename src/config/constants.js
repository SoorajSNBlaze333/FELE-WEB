export const teamMembers = [{
    image: "ramachandra",
    linkedIn: "https://www.linkedin.com/in/ramachandrapetla/",
    email: "petlar5488@uhcl.edu",
    displayName: "Ramachandra Petla",
    classname: "w-[95%] mt-3 ml-2",
    background: 'bg-emerald-200 ring-offset-2 ring-2 ring-emerald-200'
}, {
    image: "sesha",
    linkedIn: "https://www.linkedin.com/in/sesha-kumar-400ab1120/",
    email: "nallamillis8471@uhcl.edu",
    displayName: "Sesha Kumar Reddy",
    classname: "w-[100%] mt-2",
    background: 'bg-pink-200 ring-offset-2 ring-2 ring-pink-200'
}, {
    image: "shiva",
    linkedIn: "https://www.linkedin.com/in/shiva-phaneendra-reddy-m-108062103/",
    email: "medapatis8525@uhcl.edu",
    displayName: "Shiva Phaneendra Reddy",
    classname: "w-[100%]",
    background: 'bg-cyan-200 ring-offset-2 ring-2 ring-cyan-200'
}, {
    image: "preethi",
    linkedIn: "https://www.linkedin.com/in/preethi-vuchuru/",
    email: "vuchurup6722@uhcl.edu",
    displayName: "Preethi Vuchuru",
    classname: "w-[100%]",
    background: 'bg-amber-200 ring-offset-2 ring-2 ring-amber-200'
}, {
    image: "sooraj",
    linkedIn: "https://www.linkedin.com/in/sooraj-sivadasan-nair-a81543172/",
    email: "sivadasannais6723@uhcl.edu",
    displayName: "Sooraj Sivadasan Nair",
    classname: "w-[100%]",
    background: 'bg-red-300 ring-offset-2 ring-2 ring-red-200'
}, {
    image: "thomas",
    linkedIn: "https://www.linkedin.com/in/thomas-p-j-7b934b192/",
    email: "pulickaljoset6534@uhcl.edu",
    displayName: "Thomas Pulickal Joseph",
    classname: "w-[100%] ml-2 mt-2",
    background: 'bg-blue-300 ring-offset-2 ring-2 ring-blue-200'
}];

export const minutesOfMeeting = [{ 
  date: '01/31/2023', time: '9:30 AM to 10:30 AM CST', filePath: `${process.env.PUBLIC_URL}/meetings/meeting-01-31-2023.pdf` 
}];

export const reports = [
  { date: '02/02/2023', filePath: `${process.env.PUBLIC_URL}/reports/report-02-02-2023.pdf` },
  { date: '02/09/2023', filePath: `${process.env.PUBLIC_URL}/reports/report-02-09-2023.pdf` },
  { date: '02/16/2023', filePath: `${process.env.PUBLIC_URL}/reports/report-02-16-2023.pdf` },
  { date: '02/23/2023', filePath: `${process.env.PUBLIC_URL}/reports/report-02-23-2023.pdf` },
  { date: '03/02/2023', filePath: `${process.env.PUBLIC_URL}/reports/report-03-02-2023.pdf` },
  { date: '03/09/2023', filePath: `${process.env.PUBLIC_URL}/reports/report-03-09-2023.pdf` },
  { date: '03/15/2023', filePath: `${process.env.PUBLIC_URL}/reports/report-03-15-2023.pdf` },
  { date: '03/29/2023', filePath: `${process.env.PUBLIC_URL}/reports/report-03-29-2023.pdf` },
  { date: '04/06/2023', filePath: `${process.env.PUBLIC_URL}/reports/report-04-06-2023.pdf` },
  { date: '04/13/2023', filePath: `${process.env.PUBLIC_URL}/reports/report-04-13-2023.pdf` },
  { date: '04/20/2023', filePath: `${process.env.PUBLIC_URL}/reports/report-04-20-2023.pdf` },
  { date: '04/27/2023', filePath: `${process.env.PUBLIC_URL}/reports/report-04-27-2023.pdf` },
  { date: '05/04/2023', filePath: `${process.env.PUBLIC_URL}/reports/report-05-04-2023.pdf` },
  { date: '05/11/2023', filePath: `${process.env.PUBLIC_URL}/reports/report-05-11-2023.pdf` }
];

export const mentors = [{
    displayName: "Dr. Kwok-Bun Yue",
    description: ["Professor of Computer Science and Computer Information Systems,", "College of Science and Engineering"],
    office: "Delta 163",
    email: "yue@uhcl.edu",
    image: "yue",
    background: "bg-amber-200 ring-amber-200"
}, {
    displayName: "Dr. Kewei Sha",
    description: ["Associate Professor of Computer Science,", "College of Science and Engineering"],
    office: "Delta 148",
    email: "sha@uhcl.edu",
    image: "sha",
    background: "bg-emerald-200 ring-emerald-200"
}]

const getStatusInfo = (status) => {
    if (status === "completed") {
        return {
            status: "Completed",
            statusClassName: "border-green-400",
            className: "bg-green-100 text-green-600"
        }
    } else if (status === "inprogress") {
        return {
            status: "In-Progress",
            statusClassName: "border-yellow-300",
            className: "bg-amber-100 text-yellow-600"
        }
    } else {
        return {
            status: "Yet to start",
            statusClassName: "border-blue-300",
            className: "bg-blue-100 text-blue-500"
        }
    }
}

export const deliverables = [{
    title: "Project Website",
    ...getStatusInfo("completed")
}, {
    title: "Requirement Analysis",
    ...getStatusInfo("completed")
}, {
    title: "Design Document",
    ...getStatusInfo("completed")
}, {
    title: "FELE Command Line Interface",
    ...getStatusInfo("completed")
}, {
    title: "FELE Restful API services",
    ...getStatusInfo("completed")
}, {
    title: "FELE Client UI",
    ...getStatusInfo("completed")
}, {
    title: "Final Presentation",
    ...getStatusInfo("completed")
}, {
    title: "Final Report",
    ...getStatusInfo("inprogress")
}]