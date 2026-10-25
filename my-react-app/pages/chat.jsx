import { useState } from "react";
import "./chat.css";

const initialMessages = [
    {
        id: 1,
        sender: "candidate",
        content: "Hi! Thanks for reaching out. I'd love to hear more about the role.",
        time: "10:32 AM",
    },
    {
        id: 2,
        sender: "me",
        content: "Of course, Jordan. The team is looking for a product designer to help shape our candidate experience.",
        time: "10:36 AM",
    },
    {
        id: 3,
        sender: "candidate",
        content: "That sounds like a great fit. What would the next steps look like?",
        time: "10:41 AM",
    },
];

function Chat() {
    const [messages, setMessages] = useState(initialMessages);
    const [draft, setDraft] = useState("");

    function handleSend(event) {
        event.preventDefault();
        const content = draft.trim();
        if (!content) return;

        setMessages((currentMessages) => [
            ...currentMessages,
            {
                id: Date.now(),
                sender: "me",
                content,
                time: new Date().toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                }),
            },
        ]);
        setDraft("");
    }

    return (
        <section className="candidate-chat" aria-label="Conversation with Jordan Lee">
            <header className="candidate-chat__header">
                <div className="candidate-avatar" aria-hidden="true">JL</div>
                <div className="candidate-chat__identity">
                    <h2>Jordan Lee</h2>
                    <p>Product Designer <span aria-hidden="true">·</span> 4 years' experience</p>
                </div>
                <div className="candidate-status">
                    <span className="candidate-status__dot" aria-hidden="true" />
                    Available
                </div>
            </header>

            <div className="candidate-chat__messages" aria-live="polite" aria-relevant="additions">
                <p className="candidate-chat__date">Today</p>
                {messages.map((message) => (
                    <div
                        className={`message-row message-row--${message.sender}`}
                        key={message.id}
                    >
                        <article className={`message message--${message.sender}`}>
                            <p>{message.content}</p>
                            <time>{message.time}</time>
                        </article>
                    </div>
                ))}
            </div>

            <form className="candidate-chat__composer" onSubmit={handleSend}>
                <label className="visually-hidden" htmlFor="candidate-message">
                    Message Jordan Lee
                </label>
                <input
                    id="candidate-message"
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    placeholder="Write a message..."
                    autoComplete="off"
                />
                <button type="submit" disabled={!draft.trim()}>
                    Send
                </button>
            </form>
        </section>
    );
}

export default Chat;