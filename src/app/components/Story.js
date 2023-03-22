export default function Story({ img, userName }) {
  return (
    <div>
      <img src={img} alt='' />
      <p>{userName}</p>
    </div>
  );
}
