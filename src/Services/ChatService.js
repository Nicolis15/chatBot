
export default class ChatService {
  async get_message(content) {
    try {
      const res = await fetch(`https://chatbot-backend-gfes.onrender.com/?prompt=${encodeURIComponent(content)}`);

      if (!res.ok) throw new Error("Error al conectar con el API");

      const data = await res.json();
      return data.message;
    } catch (err) {
      console.error("Error en get_message:", err);
      return "Ocurrió un error al procesar tu mensaje.";
    }
  }
}


    //   const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    //     method: "POST",
    //     headers: {
    //       "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       model: "llama-3.1-8b-instant",
    //       messages: [{ role: "user", content }],
    //     }),
    //   });

    //   const data = await res.json();
    //   return data.choices?.[0]?.message?.content || "";
    // }
