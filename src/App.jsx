import { useState } from "react";

function App() {
  const [photos, setPhotos] = useState([]);
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotos([...photos, { src: reader.result, caption }]);
      setFile(null);
      setCaption("");
    };
    if (file) reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6">📸 Photo Share</h1>

      <div className="bg-white max-w-md mx-auto p-4 rounded-xl shadow space-y-4">
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
        <input
          className="w-full border px-2 py-1 rounded"
          type="text"
          value={caption}
          placeholder="Add a caption..."
          onChange={(e) => setCaption(e.target.value)}
        />
        <button
          onClick={handleUpload}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Upload Photo
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 px-4">
        {photos.map((photo, idx) => (
          <div key={idx} className="bg-white p-2 rounded shadow">
            <img src={photo.src} alt={`img-${idx}`} className="w-full h-60 object-cover rounded" />
            <p className="mt-2 text-sm text-gray-700">{photo.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
