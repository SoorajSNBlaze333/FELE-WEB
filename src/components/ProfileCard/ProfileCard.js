import { LinkedinLogo } from "phosphor-react";
import images from "../../assets/Assets";

const ProfileCard = ({
    profileImage,
    displayName,
    email,
    linkedIn,
    imgClass,
    background
}) => {
    const image = images[`${profileImage}`];

    return (
        <div className="p-6 rounded-lg flex flex-col bg-white justify-between items-center">
            <div className={`h-[220px] w-[220px] ${background} mb-1 rounded-full overflow-hidden`}>
                <img className={imgClass} src={image} alt="f"/>
            </div>
            <div className="mt-1">
                <div className="flex justify-between items-center">
                    <p className="m-0 text-xl font-semibold">{displayName}</p>
                    <a href={linkedIn} target="_blank" rel="noreferrer" className="cursor-pointer">
                        <LinkedinLogo size={30} className="text-blue-400 ml-4" weight="fill" />
                    </a>
                </div>
                <p className="m-0 text-gray-600">{email}</p>
            </div>
        </div>
    );
}

export default ProfileCard;