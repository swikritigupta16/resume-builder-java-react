function ClassicTemplate({ resume }) {
  return (
    <div className="border p-4 rounded">
      {/* Header */}
      <h2 className="mb-1">
        {resume.name || "Your Name"}
      </h2>
      <p className="mb-1">{resume.email}</p>
      <p className="mb-3">{resume.phone}</p>

      {/* Professional Summary */}
      {resume.summary && (
        <>
          <h5 className="mt-3">Professional Summary</h5>
          <p className="mb-3">{resume.summary}</p>
        </>
      )}

      {/* Education */}
      {resume.education && (
        <>
          <h5 className="mt-3">Education</h5>
          <p className="mb-3">{resume.education}</p>
        </>
      )}

      {/* Experience */}
      {resume.experience && (
        <>
          <h5 className="mt-3">Experience</h5>
          <p className="mb-3">{resume.experience}</p>
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
