export default function Contact({ email, phone }) {
  return (
    <div>
      <h1 className="mainHeading">Contact Us</h1>
      <section>{email}</section>
      <section>{phone}</section>
    </div>
  );
}
