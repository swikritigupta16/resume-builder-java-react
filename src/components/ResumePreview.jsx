import ClassicTemplate from "../templates/ClassicTemplate";
import ModernTemplate from "../templates/ModernTemplate";


function ResumePreview({ resume, template }) {
  return (
    <div className="resume-preview light-resume">

      {template === "classic" && (
        <ClassicTemplate resume={resume} />
      )}

      {template === "modern" && (
        <ModernTemplate resume={resume} />
      )}
    </div>
  );
}

export default ResumePreview;
