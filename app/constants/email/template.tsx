export default function EmailTemplate({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return (
    <div>
      <h3>Nuevo mensaje de: {name}</h3>
      <h4>Email: {email}</h4>
      <p>
        <strong>Mensaje: </strong>
        {message}
      </p>
    </div>
  );
}
