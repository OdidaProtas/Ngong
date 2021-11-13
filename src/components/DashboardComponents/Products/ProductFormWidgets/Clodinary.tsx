import { useRef } from "react";

export default function ImageUploader() {
  const fileSelect = useRef(null);

  async function handleImageUpload() {
    if (fileSelect) {
      fileSelect.current.click();
    }
  }

  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
    }
  }

  return (
    <div
      className="bg-gray-200 border-4 border-dashed border-gray-400 rounded-lg"
      style={{ height: 400, width: 600 }}
    >
      <form className="flex justify-center items-center h-full">
        <div className="text-gray-700 text-center">
          <button
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded block m-auto"
            onClick={handleImageUpload}
            type="button"
          >
            Browse
          </button>
        </div>

        <input
          ref={fileSelect}
          type="file"
          accept="image/*"
          style={{ display: "block" }}
          onChange={(e) => handleFiles(e.target.files)}
        />
      </form>
    </div>
  );
}