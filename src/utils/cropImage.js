export default function getCroppedImg(imageSrc, crop) {
  const image = new Image();
  image.src = imageSrc;

  const canvas = document.createElement("canvas");
  canvas.width = crop.width;
  canvas.height = crop.height;

  const ctx = canvas.getContext("2d");

  return new Promise((resolve) => {
    image.onload = () => {
      ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
      );
      canvas.toBlob((blob) => resolve(blob), "image/jpeg");
    };
  });
}
