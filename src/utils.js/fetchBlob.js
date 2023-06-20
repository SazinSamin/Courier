export const fetchBlob = async (url) => {
  const response = await fetch(url);
  const data = await response.blob();
  const blob = new File([data], "userPhoto.jpg", {type : 'image/jpeg'})
  
  return blob;
}
