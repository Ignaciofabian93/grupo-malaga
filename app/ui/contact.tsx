"use client";
import clsx from "clsx";

type Input = {
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "email";
  placeholder: string;
};

type TextArea = {
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
};

const Input = ({ name, value, onChange, type, placeholder }: Input) => {
  return (
    <input
      type={type}
      className="w-full my-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#00252d] shadow-sm"
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

const TextArea = ({ name, value, onChange, placeholder }: TextArea) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full min-h-[200px] my-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#00252d] shadow-sm resize-none"
    />
  );
};

export default function Contact() {
  return (
    <section
      id="contact"
      className={clsx(
        "w-full flex items-center justify-evenly",
        "p-4 flex flex-col items-center justify-center"
      )}
    >
      <div className="w-10/12 my-8">
        <h2 className="text-center text-lg font-medium">
          Déjanos un mensaje y responderemos a la brevedad
        </h2>
      </div>
      <form
        className={clsx(
          "flex flex-col items-center justify-center w-full sm:max-w-[500px]"
        )}
      >
        <Input
          name="name"
          type="text"
          placeholder="Nombre"
          value={""}
          onChange={() => {}}
        />
        <Input
          name="email"
          type="email"
          placeholder="Correo"
          value={""}
          onChange={() => {}}
        />
        <TextArea
          name="message"
          value={""}
          onChange={() => {}}
          placeholder="Mensaje"
        />
      </form>
    </section>
  );
}
