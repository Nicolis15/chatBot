import logoPerfil from '../../assets/Perfil.jpg';
import { useState, useEffect, useRef } from "react";
import ChatService from '../../Services/ChatService';
import ReactMarkdown from "react-markdown";

export default function Chat() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "bot",
            text: "¡Hola! soy Nicolas Lis Cruz, soy Desarrollador de Software e Ingeniero de Datos👋 ¿En qué puedo ayudarte hoy?",
            avatar: logoPerfil,
        },
        {
            id: 2,
            sender: "user",
            text: "",
            avatar: "https://i.pravatar.cc/40?img=3",
        },
    ]);

    const [newMessage, setNewMessage] = useState("");
    const messagesEndRef = useRef(null);
    const chatService = new ChatService();

    // Enviar mensaje del usuario y pedir respuesta al bot
    const handleSend = async () => {
        if (!newMessage.trim()) return;

        const userMessage = {
            id: messages.length + 1,
            sender: "user",
            text: newMessage,
            avatar: "https://i.pravatar.cc/40?img=3",
        };

        setMessages((prev) => [...prev, userMessage]);
        setNewMessage("");

        // Mensaje temporal del bot mientras responde
        const loadingMessage = {
            id: messages.length + 2,
            sender: "bot",
            text: "Escribiendo...",
            avatar: logoPerfil,
        };
        setMessages((prev) => [...prev, loadingMessage]);

        // Obtener respuesta del modelo
        const botReply = await chatService.get_message(newMessage);

        // Reemplazar el mensaje de "Escribiendo..." con la respuesta real
        setMessages((prev) =>
            prev.map((msg) =>
                msg.id === loadingMessage.id ? { ...msg, text: botReply } : msg
            )
        );
    };

    // Scroll automático al último mensaje
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex flex-col lg:min-h-[75vh] lg:max-h-[75vh] md:min-h-[50vh] md:max-h-[50vh] bg-secundary rounded-xl m-6 shadow-lg">
            {/* Contenedor de mensajes con scroll */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex items-end gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"
                            }`}
                    >
                        {msg.sender !== "user" && (
                            <img
                                src={msg.avatar}
                                alt="avatar"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                        )}

                        <div
                            className={`max-w-[70%] p-3 rounded-2xl shadow-sm prose ${msg.sender === "user"
                                ? "bg-blue-600 text-white rounded-br-none prose-invert"
                                : "bg-white text-gray-800 rounded-bl-none"
                                }`}
                        >
                            <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </div>

                        {msg.sender === "user" && (
                            <img
                                src={msg.avatar}
                                alt="avatar"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                        )}
                    </div>
                ))}

                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white flex items-center gap-3 border-t border-gray-200 rounded-b-xl">
                <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    className="flex-grow border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={handleSend}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                >
                    Enviar
                </button>
            </div>
        </div>
    );
}
