export default function Download() {
  const handleDownload = () => {
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
  };
  return (
    <button className="download-button" onClick={handleDownload}>
      DL
    </button>
  );
}