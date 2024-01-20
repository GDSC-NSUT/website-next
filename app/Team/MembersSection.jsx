import React from 'react';
import members from "./members";
import TeamCard from "./TeamCard";

export default function MembersSection() {
  return (
    <section className="team-section team-card-container">
      {members.map(member => {
        return (
          <TeamCard key={member.id}
                    memberImage={member.memberImage}
                    memberName={member.memberName}
                    memberStatus="Core Member"
                    memberAbout={member.memberAbout}
                    memberSocialLinkedinPath={member.memberSocialLinkedinPath}
                    memberSocialGithubPath={member.memberSocialGithubPath}
                    memberSocialMailPath={member.memberSocialMailPath}
          />
        )
      })}
    </section>
  )
}