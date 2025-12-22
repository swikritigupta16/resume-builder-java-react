function ModernTemplate({ resume }) {
  return (
    <div className="border p-4 rounded" style={{ fontFamily: "Arial" }}>
      <h2 className="text-primary">
        {resume.name || "Your Name"}
      </h2>

      <p className="text-muted">
        {resume.email} | {resume.phone}
      </p>

      {resume.summary && (
        <>
          <h5 className="mt-4 text-primary">Summary</h5>
          <p>{resume.summary}</p>
        </>
      )}

      {resume.education && (
        <>
          <h5 className="mt-4 text-primary">Education</h5>
          <p>{resume.education}</p>
        </>
      )}

      {resume.experience && (
        <>
          <h5 className="mt-4 text-primary">Experience</h5>
          <p>{resume.experience}</p>
        </>
      )}

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
