function ModernTemplate({ resume }) {
  return (
    <div className="border p-4 rounded" style={{ fontFamily: "Arial" }}>
      <h2 className="text-primary">
        {resume.name || "Your Name"}
      </h2>

      <p className="text-muted">
        {resume.email} | {resume.phone}
      </p>

      {/*Summary*/}
      {resume.summary && (
        <>
          <h5 className="mt-4 text-primary">Summary</h5>
          <p>{resume.summary}</p>
        </>
      )}
        
      {/*Education */}
      {resume.education?.some(
      edu =>
        edu.degree ||
        edu.institute ||
        edu.year
) && (
  <>
    <h5 className="mt-3">Education</h5>
    {resume.education.map((edu, index) => (
      <div key={index} className="mb-2">
        <strong>{edu.degree}</strong><br />
        {edu.institute} | {edu.year}
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
    <h5 className="mt-3">Experience</h5>
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
    </div>
  );
}

export default ModernTemplate;
