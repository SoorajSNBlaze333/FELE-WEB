import NotFoundImage from '../../assets/404.jpeg';

export default function NotFound() {
  return (<div className="body-height flex flex-col justify-center items-center">
    <img src={NotFoundImage} alt="Not Found" className='h-[50%]' />
    <p className="text-slate-400 text-lg">Sorry, the page that you are looking for does not exist or has been removed</p>
  </div>)
}