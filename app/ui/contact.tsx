"use client";
import { useState } from "react";
import { toast } from "react-toastify";
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

const Button = () => {
  return (
    <button
      type="submit"
      className="w-full my-2 p-2 rounded-md bg-[#00252d] text-white hover:bg-[#00252d]/90 transition-colors duration-300"
    >
      Enviar
    </button>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error(`Todos los campos son requeridos`);
      return;
    }
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.data) {
        toast.success(`Mensaje enviado correctamente`);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(`Algo salió mal con el envió de correo`);
      }
    } catch (error) {
      console.error(error);
      toast.error(`Algo salió mal con el envió de correo`);
    }
  };

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
        onSubmit={handleSubmit}
        className={clsx(
          "flex flex-col items-center justify-center w-full sm:max-w-[500px]"
        )}
      >
        <Input
          name="name"
          type="text"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          name="email"
          type="email"
          placeholder="Correo"
          value={formData.email}
          onChange={handleChange}
        />
        <TextArea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Mensaje"
        />
        <Button />
      </form>
    </section>
  );
}
