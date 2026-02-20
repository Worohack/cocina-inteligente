"use client";

import { useState } from "react";

export default function Recetas() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [recetas, setRecetas] = useState<any[]>([]);

  const agregarReceta = () => {
    if (!nombre || !descripcion) return;
    setRecetas([...recetas, { nombre, descripcion }]);
    setNombre("");
    setDescripcion("");
  };

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>📖 Recetas</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Nombre de la receta"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={agregarReceta}>Agregar</button>
      </div>

      <ul>
        {recetas.map((r, i) => (
          <li key={i}>
            <strong>{r.nombre}</strong>: {r.descripcion}
          </li>
        ))}
      </ul>
    </main>
  );
}
