import ClassicTemplate from "../templates/ClassicTemplate";
import ModernTemplate from "../templates/ModernTemplate";
import TwoColumnTemplate from "../templates/TwoColumnTemplate";


function ResumePreview({ resume, template, sections }) {
const renderSection = (section) => {
  switch (section) {
    case "summary":
      return resume.summary && (
        <>
          <h5>Objective</h5>
          <p>{resume.summary}</p>
        </>
      );

    case "education":
      return resume.education?.some(e =>
        e.degree || e.institute || e.year
      ) && (
        <>
          <h5>Education</h5>
          {resume.education.map((edu, i) => (
            <div key={i}>
              <strong>{edu.degree}</strong> – {edu.institute}
            </div>
          ))}
        </>
      );

    case "experience":
      return resume.experience?.some(e =>
        e.company || e.role
      ) && (
        <>
          <h5>Experience</h5>
          {resume.experience.map((exp, i) => (
            <div key={i}>
              <strong>{exp.role}</strong> – {exp.company}
            </div>
          ))}
        </>
      );

    case "skills":
      return resume.skills.length > 0 && (
        <>
          <h5>Skills</h5>
          <ul>
            {resume.skills.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </>
      );

    case "projects":
      return resume.projects?.length > 0 && (
        <>
          <h5>Projects</h5>
        </>
      );

    case "certifications":
      return resume.certifications?.length > 0 && (
        <>
          <h5>Certifications</h5>
        </>
      );

    default:
      return null;
  }
};


  return (
    <div className="resume-preview light-resume">

      {template === "classic" && (
        <ClassicTemplate resume={resume} sections={sections} />
      )}

      {template === "modern" && (
        <ModernTemplate resume={resume} sections={sections} />
      )}

      {template === "two-column" && (
       <TwoColumnTemplate resume={resume} sections={sections} />
      )}

    </div>
  );
}

export default ResumePreview;
