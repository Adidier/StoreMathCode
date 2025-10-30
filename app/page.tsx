"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import { Footer } from "./ui/Footer";
import type { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  return (
    <>
      <main className="flex flex-col items-center pb-20 gap-16 sm:p-20 overflow-x-hidden">
        <section>
          <header>
            <h1 className="text-4xl font-bold mb-6 text-sky-600">Descuentos</h1>
          </header>
        </section>
        <section>
          <header>
            <h1 className="text-4xl font-bold mb-6 text-sky-600">Populares</h1>
          </header>
        </section>
        <section>
          <header>
            <h1 className="text-4xl font-bold mb-6 text-sky-600">Nuevos</h1>
          </header>
        </section>
      </main>
      <Footer />
    </>
  );
}
