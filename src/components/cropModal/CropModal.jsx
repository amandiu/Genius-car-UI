const CropModal = ({
  image,
  crop,
  zoom,
  setCrop,
  setZoom,
  onCropComplete,
  onCancel,
  onSave,
}) => {
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-lg">
        <h3 className="font-bold mb-4">Crop Profile Photo</h3>

        <div className="relative h-72 bg-slate-900 rounded-lg overflow-hidden">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </div>

        <input
          type="range"
          min={1}
          max={3}
          step={0.1}
          value={zoom}
          onChange={(e) => setZoom(e.target.value)}
          className="w-full mt-4"
        />

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onCancel} className="px-4 py-2 rounded-lg border">
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-5 py-2 rounded-lg bg-orange-500 text-white font-semibold"
          >
            Save Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropModal;
