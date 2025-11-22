import { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Loader2,
} from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import type { ChatMessage, ChatRequest } from "@shared/schema";

type Mode = "developer" | "aiml_aspirant" | "mentor";

const modeConfig = {
  developer: {
    label: "Developer Me",
    description: "Coding & full-stack development",
  },
  aiml_aspirant: {
    label: "AI/ML Aspirant Me",
    description: "AI/ML journey & concepts",
  },
  mentor: {
    label: "Mentor Me",
    description: "Career advice & learning guidance",
  },
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("developer");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const mutation = useMutation({
    mutationFn: async (request: ChatRequest) => {
      const res = await apiRequest("POST", "/api/chat", request);
      return res.json() as Promise<{ reply: string }>;
    },
    onSuccess: (data: { reply: string }) => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    },
    onError: () => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    },
  });

  const handleSend = () => {
    if (!input.trim() || mutation.isPending) return;

    const userMessage: ChatMessage = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");

    const contextMessages = newMessages.slice(-10);

    mutation.mutate({
      messages: contextMessages,
      mode,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <Button
        size="icon"
        className="fixed bottom-6 left-6 z-50 h-16 w-16 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-chat-bubble"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-50"
          >
            <Card className="w-96 h-[600px] flex flex-col shadow-xl" data-testid="card-chat-window">
              <div className="px-6 py-4 border-b flex items-center justify-between">
                <div>
                  <h3 className="font-semibold" data-testid="text-chat-title">
                    Chat with My AI Twin
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Ask me about my projects & skills
                  </p>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsOpen(false)}
                  data-testid="button-close-chat"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="px-4 py-2 border-b flex gap-2 overflow-x-auto">
                {(Object.keys(modeConfig) as Mode[]).map((m) => (
                  <Badge
                    key={m}
                    variant={mode === m ? "default" : "secondary"}
                    className="cursor-pointer whitespace-nowrap hover-elevate active-elevate-2"
                    onClick={() => setMode(m)}
                    data-testid={`button-mode-${m}`}
                  >
                    {modeConfig[m].label}
                  </Badge>
                ))}
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {messages.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    <Bot className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-sm" data-testid="text-chat-welcome">
                      Hi! I'm an AI assistant representing Agasya Butolia.
                    </p>
                    <p className="text-xs mt-2">
                      {modeConfig[mode].description}
                    </p>
                  </div>
                )}

                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${
                      message.role === "user" ? "justify-end" : ""
                    }`}
                    data-testid={`message-${message.role}-${index}`}
                  >
                    {message.role === "assistant" && (
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarFallback className="bg-primary/10">
                          <Bot className="h-4 w-4 text-primary" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">
                        {message.content}
                      </p>
                    </div>
                    {message.role === "user" && (
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarFallback className="bg-secondary">
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}

                {mutation.isPending && (
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8 flex-shrink-0">
                      <AvatarFallback className="bg-primary/10">
                        <Bot className="h-4 w-4 text-primary" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-muted">
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              <div className="px-6 py-4 border-t">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Ask me anything..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={2}
                    className="resize-none"
                    data-testid="input-chat-message"
                  />
                  <Button
                    size="icon"
                    onClick={handleSend}
                    disabled={!input.trim() || mutation.isPending}
                    data-testid="button-send-message"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
