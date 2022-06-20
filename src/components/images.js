const Images = (v) => {
  return (
    <div>
      <img src={v.images} alt="..." />
      <p>Name: {v.name}</p>
      <p>Age: {v.age}</p>
    </div>
  );
};
export default Images;
