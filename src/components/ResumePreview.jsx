import ClassicTemplate from "../templates/ClassicTemplate";
import ModernTemplate from "../templates/ModernTemplate";

function ResumePreview({ resume, template }) {
  return (
    <>
      {template === "classic" && (
        <ClassicTemplate resume={resume} />
      )}

      {template === "modern" && (
        <ModernTemplate resume={resume} />
      )}
    </>
  );
}

export default ResumePreview;
