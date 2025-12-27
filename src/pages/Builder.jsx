import { useState } from "react";
import ResumePreview from "../components/ResumePreview";
import "../App.css";

import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


 function Builder({ darkMode, setDarkMode }) {
  const resumeRef = useRef();

  const [template, setTemplate] = useState("classic"); // ✅ FIXED

  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    address : "",
    summary: "",
    education: [
     { degree: "", institute: "", year: "" }
    ],
    experience: [
     { company: "", role: "", duration: "", description: "" }
    ],

    skills: []
  });

  const downloadPDF = async () => {
  const element = resumeRef.current;
  const appRoot = document.querySelector(".dark-mode");

  // 1️⃣ Temporarily disable dark mode
  if (appRoot) {
    appRoot.classList.remove("dark-mode");
  }

  // 2️⃣ Force light resume
  element.classList.add("force-light");

  // Small delay to apply styles
  await new Promise((resolve) => setTimeout(resolve, 200));

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff"
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("Resume.pdf");

  // 3️⃣ Restore dark mode
  element.classList.remove("force-light");
  if (appRoot) {
    appRoot.classList.add("dark-mode");
  }
};


  return (
    
    <div className="container mt-4">

 {/* 🌙 DARK MODE TOGGLE — STEP 2 */}
    <div className="d-flex justify-content-end mb-3">
      <button
        className="btn btn-sm btn-outline-secondary"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>
    </div>
        
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
          type = "tel"
            className="form-control mb-3"
            placeholder="Phone Number"
            value={resume.phone}
            onChange={(e) =>
              setResume({ ...resume, phone: e.target.value.replace(/\D/g, "") })
            }
          />

          <input
            className="form-control mb-3"
            placeholder="Address"
            value={resume.address}
            onChange={(e) =>
              setResume({ ...resume, address: e.target.value })
            }
          />

          <textarea
            className="form-control mb-3"
            placeholder="Objective"
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

  <select
    className="form-select mb-3"
    value={template}
    onChange={(e) => setTemplate(e.target.value)}
  >
    <option value="classic">Classic Template</option>
    <option value="modern">Modern Template</option>
  </select>

  <div ref={resumeRef}>
    <ResumePreview resume={resume} template={template} />
  </div>

  <button
    className="btn btn-success mt-3 w-100"
    onClick={downloadPDF}
  >
    Download Resume as PDF
  </button>

</div>
</div>
</div>
  );
}

export default Builder;
