function ClassicTemplate({ resume }) {
  return (
    <div className="border p-4 rounded">
      {/* Header */}
      <h2 className="mb-1">
        {resume.name || "Your Name"}
      </h2>
      <p className="mb-1">{resume.email}</p>
      <p className="mb-1">{resume.phone}</p>
      <p className="mb-3">{resume.address}</p>


      {/* Professional Summary */}
      {resume.summary && (
        <>
          <h5 className="mt-3">Objective</h5>
          <p className="mb-3">{resume.summary}</p>
        </>
      )}

      {/* Education */}
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


      {/* Skills */}
      {resume.skills && resume.skills.length > 0 && (
        <>
          <h5 className="mt-3">Skills</h5>
          <ul>
            {resume.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default ClassicTemplate;
