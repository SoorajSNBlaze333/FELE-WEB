import ProfileCard from '../ProfileCard/ProfileCard';
import { teamMembers } from '../../config/constants';

const renderProfileCards = () => {
    return (
        teamMembers.map((member, key) => {
            return <ProfileCard 
                profileImage= {member.image}
                displayName= {member.displayName}
                key={"member-" + key}
                email={member.email}
                linkedIn={member.linkedIn}
                imgClass={member.classname}
                background={member.background}
            />
        })
    ) 
}

const Team = () => {
    return (    
        <div className='p-10 body-height'>
            <div className="text-4xl font-semibold text-green-900 w-full text-center">Meet Our Team</div>
            <div className="grid grid-cols-3 grid-rows-2 gap-4"> 
                {renderProfileCards()}      
            </div>
        </div>
    );
}

export default Team;