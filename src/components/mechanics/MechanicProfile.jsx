



// 🖼️ Professional Mechanic Photo যোগ করার নিয়ম
// Option 1: Backend থেকে
// mechanic = {
//   name: "Rahim Auto",
//   email: "rahim@gmail.com",
//   phone: "017xxxxxxx",
//   location: "Dhaka",
//   photo: "https://your-domain.com/uploads/mechanic.jpg",
// };

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
  FaCamera,
  FaCheckCircle,
} from "react-icons/fa";
import { useRef, useState } from "react";
import CropModal from "../cropModal/CropModal";
import getCroppedImg from "../../utils/cropImage";

const MechanicProfile = ({ mechanic, onEdit, onUpload }) => {
  const fileRef = useRef(null);

  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showCrop, setShowCrop] = useState(false);

  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      setShowCrop(true);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);

    await onUpload(croppedImage, setUploadProgress);

    setShowCrop(false);
    setUploadProgress(0);
  };

  return (
    <div className="bg-gradient-to-br from-white via-orange-50 to-white rounded-3xl shadow-xl p-8 border border-orange-100">
      
      {/* Header */}
      <div className="flex items-center gap-6 mb-8">
        <div
          onClick={() => fileRef.current.click()}
          className="relative group cursor-pointer"
        >
          <img
            src={mechanic.photo || "/avatar-mechanic.png"}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />

          <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold">
            <FaCamera className="mr-2" /> Change
          </div>

          {mechanic.verified && (
            <span className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1.5 rounded-full shadow">
              <FaCheckCircle size={14} />
            </span>
          )}

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleSelectImage}
          />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
            {mechanic.name}
            {mechanic.verified && (
              <span className="text-blue-600 text-lg">
                <FaCheckCircle />
              </span>
            )}
          </h2>
          <p className="text-slate-500">Certified Auto Mechanic</p>
        </div>

        <button
          onClick={onEdit}
          className="px-5 py-2.5 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition"
        >
          <FaEdit /> Edit
        </button>
      </div>

      {/* Upload Progress */}
      {uploadProgress > 0 && (
        <div className="mb-4">
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 transition-all"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Uploading {uploadProgress}%
          </p>
        </div>
      )}

      {/* Info */}
      <div className="grid sm:grid-cols-2 gap-6">
        <ProfileItem icon={<FaEnvelope />} label="Email" value={mechanic.email} />
        <ProfileItem icon={<FaPhone />} label="Phone" value={mechanic.phone} />
        <ProfileItem icon={<FaMapMarkerAlt />} label="Location" value={mechanic.location} />
        <ProfileItem icon={<FaUser />} label="Experience" value={`${mechanic.experience}+ Years`} />
      </div>

      {/* Crop Modal */}
      {showCrop && (
        <CropModal
          image={imageSrc}
          crop={crop}
          zoom={zoom}
          setCrop={setCrop}
          setZoom={setZoom}
          onCancel={() => setShowCrop(false)}
          onCropComplete={(_, pixels) => setCroppedAreaPixels(pixels)}
          onSave={handleUpload}
        />
      )}
    </div>
  );
};

const ProfileItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow hover:shadow-md transition">
    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
      {icon}
    </div>
    <div>
      <p className="text-xs uppercase text-slate-400">{label}</p>
      <p className="font-semibold text-slate-700">{value}</p>
    </div>
  </div>
);

export default MechanicProfile;
