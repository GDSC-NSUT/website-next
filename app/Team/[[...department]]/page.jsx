import "../team.css";
import TeamHeroSection from "../TeamHeroSection";
import MembersSection from "../MembersSection";
import DepartmentsSection from "../DepartmentsSection";
import Department from "../Department";

export default function Team({params}) {
  const department = params.department;

  console.log("Dept :- "+department)

  if (!department) {
    return (
      <>
        <div className="team-page">
          <TeamHeroSection />
          <MembersSection /> 
          <DepartmentsSection />
        </div>
      </>
    );
  }else{
    return(
      <Department department={department}/>
    )
  }
}
