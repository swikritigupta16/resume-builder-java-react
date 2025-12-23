import { useState } from "react";
import ResumePreview from "../components/ResumePreview";

 function Builder() {
  const [template, setTemplate] = useState("classic"); // ✅ FIXED

  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    education: [
     { degree: "", institute: "", year: "" }
    ],
    experience: [
     { company: "", role: "", duration: "", description: "" }
    ],

    skills: []
  });

  return (
    <div className="container mt-4">
      <div className="row">

        {/* FORM SECTION */}
        <div className="col-md-6">

          <input
            className="form-control mb-3"
            placeholder="Full Name"
            value={resume.name}
            onChange={(e) =>
              setResume({ ...resume, name: e.target.value })
            }
          />

          <input
            className="form-control mb-3"
            placeholder="Email"
            value={resume.email}
            onChange={(e) =>
              setResume({ ...resume, email: e.target.value })
            }
          />

          <input
            className="form-control mb-3"
            placeholder="Phone Number"
            value={resume.phone}
            onChange={(e) =>
              setResume({ ...resume, phone: e.target.value })
            }
          />

          <textarea
            className="form-control mb-3"
            placeholder="Professional Summary"
            rows="3"
            value={resume.summary}
            onChange={(e) =>
              setResume({ ...resume, summary: e.target.value })
            }
          />

    <h5 className="mt-4">Education</h5>

    {resume.education.map((edu, index) => (
         <div key={index} className="border p-2 mb-3 rounded">

    <input
      className="form-control mb-2"
      placeholder="Degree"
      value={edu.degree}
      onChange={(e) => {
        const newEdu = [...resume.education];
        newEdu[index].degree = e.target.value;
        setResume({ ...resume, education: newEdu });
      }}
    />

    <input
      className="form-control mb-2"
      placeholder="Institute"
      value={edu.institute}
      onChange={(e) => {
        const newEdu = [...resume.education];
        newEdu[index].institute = e.target.value;
        setResume({ ...resume, education: newEdu });
      }}
    />

    <input
      className="form-control mb-2"
      placeholder="Year"
      value={edu.year}
      onChange={(e) => {
        const newEdu = [...resume.education];
        newEdu[index].year = e.target.value;
        setResume({ ...resume, education: newEdu });
      }}
    />

  </div>
))}

<button
  className="btn btn-sm btn-outline-primary"
  onClick={() =>
    setResume({
      ...resume,
      education: [
        ...resume.education,
        { degree: "", institute: "", year: "" }
      ]
    })
  }
>
  + Add Education
</button>


        <h5 className="mt-4">Experience</h5>

   {resume.experience.map((exp, index) => (
     <div key={index} className="border p-2 mb-3 rounded">
 
    <input
      className="form-control mb-2"
      placeholder="Company"
      value={exp.company}
      onChange={(e) => {
        const newExp = [...resume.experience];
        newExp[index].company = e.target.value;
        setResume({ ...resume, experience: newExp });
      }}
    />

    <input
      className="form-control mb-2"
      placeholder="Role"
      value={exp.role}
      onChange={(e) => {
        const newExp = [...resume.experience];
        newExp[index].role = e.target.value;
        setResume({ ...resume, experience: newExp });
      }}
    />

    <input
      className="form-control mb-2"
      placeholder="Duration (e.g. 2023–2024)"
      value={exp.duration}
      onChange={(e) => {
        const newExp = [...resume.experience];
        newExp[index].duration = e.target.value;
        setResume({ ...resume, experience: newExp });
      }}
    />

    <textarea
      className="form-control"
      placeholder="Description"
      value={exp.description}
      onChange={(e) => {
        const newExp = [...resume.experience];
        newExp[index].description = e.target.value;
        setResume({ ...resume, experience: newExp });
      }}
    />

  </div>
))}

<button
  className="btn btn-sm btn-outline-primary"
  onClick={() =>
    setResume({
      ...resume,
      experience: [
        ...resume.experience,
        {
          company: "",
          role: "",
          duration: "",
          description: ""
        }
      ]
    })
  }
>
  + Add Experience
</button>

    <h5 className="mt-4">Skills</h5>
          <input
            className="form-control mb-3"
            placeholder="Add skill & press Enter"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setResume({
                  ...resume,
                  skills: [...resume.skills, e.target.value]
                });
                e.target.value = "";
              }
            }}
          />
        </div>

        {/* PREVIEW SECTION */}
        <div className="col-md-6">

          {/* ✅ TEMPLATE DROPDOWN */}
          <select
            className="form-select mb-3"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
          >
            <option value="classic">Classic Template</option>
            <option value="modern">Modern Template</option>
          </select>

          {/* ✅ PASS TEMPLATE */}
          <ResumePreview resume={resume} template={template} />

        </div>

      </div>
    </div>
  );
}

export default Builder;
