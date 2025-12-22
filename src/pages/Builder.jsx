import { useState } from "react";
import ResumePreview from "../components/ResumePreview";

function Builder() {
  const [template, setTemplate] = useState("classic"); // ✅ FIXED

  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    education: "",
    experience: "",
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

          <input
            className="form-control mb-3"
            placeholder="Education"
            value={resume.education}
            onChange={(e) =>
              setResume({ ...resume, education: e.target.value })
            }
          />

          <textarea
            className="form-control mb-3"
            placeholder="Experience"
            rows="3"
            value={resume.experience}
            onChange={(e) =>
              setResume({ ...resume, experience: e.target.value })
            }
          />

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
