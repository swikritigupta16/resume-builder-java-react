function ModernTemplate({ resume }) {
  return (
    <div className="border p-4 rounded" style={{ fontFamily: "Arial" }}>
      <h2 className="text-primary">
        {resume.name || "Your Name"}
      </h2>

      <p className="contact-info">
        {resume.email} | {resume.phone} | {resume.address}
      </p>

      {/*Summary*/}
      {resume.summary && (
        <>
          <h5 className="mt-4 text-primary">Objective</h5>
          <p>{resume.summary}</p>
        </>
      )}
        
      {/*Education */}
      {resume.education?.some(
      edu =>
        edu.degree ||
        edu.institute ||
        edu.year ||
        edu.grade
) && (
  <>
    <h5 className="mt-3 text-primary">Education</h5>
    {resume.education.map((edu, index) => (
      <div key={index} className="mb-2">
        <strong>{edu.degree} - Grade: {edu.grade} </strong><br />
        {edu.institute} , {edu.year}
      </div>
    ))}
  </>
)}

     {/*Experience */}
    {resume.experience?.some(
      exp =>
        exp.company ||
        exp.role ||
        exp.duration ||
        exp.description
) && (   
  <>
    <h5 className="mt-3 text-primary">Experience</h5>
    {resume.experience.map((exp, index) => (
      <div key={index} className="mb-3">
        <strong>{exp.role}</strong> – {exp.company}<br />
        <small>{exp.duration}</small>
        <p>{exp.description}</p>
      </div>
    ))}
  </>
)}

     {/*Skills */}
      {resume.skills && resume.skills.length > 0 && (
        <>
          <h5 className="mt-4 text-primary">Skills</h5>
          <div className="d-flex flex-wrap gap-2">
            {resume.skills.map((skill, index) => (
              <span
                key={index}
                className="badge bg-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </>
      )}
    
    {/*Projects */}
     {resume.projects?.some(
      proj =>
        proj.title ||
        proj.technology ||
        proj.description
) && (
  <>
    <h5 className="mt-3 text-primary">Projects</h5>
    {resume.projects.map((proj, index) => (
      <div key={index} className="mb-3">
        <strong>{proj.title}</strong> – {proj.technology}<br />
        <p>{proj.description}</p>
      </div>
    ))}
  </>
)}


 

    </div>
  );
}

export default ModernTemplate;
