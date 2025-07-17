(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/personal-ai/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PersonalAIPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PersonalAIPage() {
    _s();
    const [stream, setStream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [recognitionResult, setRecognitionResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSpeaking, setIsSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [textInput, setTextInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [chatHistory, setChatHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [internetConnected, setInternetConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [systemPrompt, setSystemPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showPromptEditor, setShowPromptEditor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExecutingCommand, setIsExecutingCommand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recognition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Check internet connectivity and API availability
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PersonalAIPage.useEffect": ()=>{
            checkInternetConnectivity();
            initializeSpeechRecognition();
            loadSystemPrompt();
        }
    }["PersonalAIPage.useEffect"], []);
    const checkInternetConnectivity = async ()=>{
        try {
            const response = await fetch('/api/chat');
            if (response.ok) {
                const data = await response.json();
                setInternetConnected(true);
                console.log('PAGE Internet Capabilities:', data.capabilities);
            }
        } catch (error) {
            console.log('Operating in offline mode');
            setInternetConnected(false);
        }
    };
    const loadSystemPrompt = ()=>{
        const defaultPrompt = `You are PAGE (Personal AI Guidance Engine), an advanced AI assistant with comprehensive capabilities:

CORE ABILITIES:
- Real-time internet access and web search
- Computer system control and monitoring
- Voice command processing and execution
- File system operations
- Application management
- Network diagnostics and control
- Advanced image and document analysis
- Code generation and debugging
- Research and fact-checking
- Creative writing and content generation

PERSONALITY:
- Professional yet friendly female AI assistant
- Proactive and solution-oriented
- Clear, concise communication
- Anticipates user needs
- Provides detailed explanations when requested

You can execute system commands, manage files, control applications, and access real-time information. Always confirm before executing potentially destructive operations.`;
        setSystemPrompt(defaultPrompt);
    };
    const initializeSpeechRecognition = ()=>{
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
            recognition.current = new SpeechRecognition();
            recognition.current.continuous = false;
            recognition.current.interimResults = false;
            recognition.current.lang = 'en-US';
            recognition.current.onresult = (event)=>{
                const transcript = event.results[0][0].transcript;
                setTextInput(transcript);
                handleVoiceCommand(transcript);
            };
            recognition.current.onerror = (event)=>{
                console.error('Speech recognition error:', event.error);
                setIsListening(false);
            };
            recognition.current.onend = ()=>{
                setIsListening(false);
            };
        }
    };
    // Enhanced text-to-speech function with female voice
    const speakText = (text)=>{
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            const voices = window.speechSynthesis.getVoices();
            const femaleVoice = voices.find((voice)=>voice.name.toLowerCase().includes('female') || voice.name.toLowerCase().includes('woman') || voice.name.toLowerCase().includes('samantha') || voice.name.toLowerCase().includes('karen') || voice.name.toLowerCase().includes('victoria') || voice.name.toLowerCase().includes('zira')) || voices.find((voice)=>voice.lang.startsWith('en'));
            if (femaleVoice) {
                utterance.voice = femaleVoice;
            }
            utterance.rate = 0.9;
            utterance.pitch = 1.1;
            utterance.volume = 0.8;
            utterance.onstart = ()=>setIsSpeaking(true);
            utterance.onend = ()=>setIsSpeaking(false);
            utterance.onerror = ()=>setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
        }
    };
    // Request camera and microphone access
    const handleEnableMedia = async ()=>{
        try {
            setError("");
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: {
                        ideal: 1280
                    },
                    height: {
                        ideal: 720
                    },
                    facingMode: 'user'
                },
                audio: true
            });
            setStream(mediaStream);
            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
            }
            // Enhanced PAGE introduction
            const welcomeMessage = internetConnected ? "Hello! I'm PAGE, your Personal AI Guidance Engine with full internet access and computer control capabilities. I can see you through the camera, execute system commands, access real-time information, manage files, and control applications through voice commands. I'm ready to assist with any task!" : "Hello! I'm PAGE, your Personal AI Guidance Engine. I can see you through the camera, perform object detection and face recognition, and help with various tasks. For full internet access and computer control, please configure your OpenRouter API key.";
            setChatHistory((prev)=>[
                    ...prev,
                    {
                        type: 'ai',
                        message: welcomeMessage,
                        timestamp: new Date(),
                        source: internetConnected ? 'internet-connected' : 'offline'
                    }
                ]);
            speakText(welcomeMessage);
        } catch (err) {
            console.error("Media access error:", err);
            setError("Failed to access camera and microphone. Please ensure permissions are granted.");
        }
    };
    // Stop media stream
    const handleStopMedia = ()=>{
        if (stream) {
            stream.getTracks().forEach((track)=>track.stop());
            setStream(null);
            setRecognitionResult(null);
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        }
    };
    // Clear conversation
    const handleClearConversation = ()=>{
        setChatHistory([]);
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
    };
    // Handle voice command processing
    const handleVoiceCommand = async (command)=>{
        const lowerCommand = command.toLowerCase();
        // Check if it's a system command
        if (lowerCommand.includes('execute') || lowerCommand.includes('run') || lowerCommand.includes('open') || lowerCommand.includes('close') || lowerCommand.includes('create') || lowerCommand.includes('delete')) {
            await handleSystemCommand(command);
        } else {
            // Regular chat command
            await handleTextSubmit(undefined, command);
        }
    };
    // Handle system command execution
    const handleSystemCommand = async (command)=>{
        setIsExecutingCommand(true);
        setLoading(true);
        setChatHistory((prev)=>[
                ...prev,
                {
                    type: 'user',
                    message: `[SYSTEM COMMAND] ${command}`,
                    timestamp: new Date()
                }
            ]);
        try {
            const response = await fetch('/api/execute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    command: command,
                    type: 'system'
                })
            });
            const data = await response.json();
            setChatHistory((prev)=>[
                    ...prev,
                    {
                        type: 'ai',
                        message: data.response,
                        timestamp: new Date(),
                        source: 'system-execution'
                    }
                ]);
            speakText(`Command executed: ${data.response}`);
        } catch (error) {
            const errorMessage = "I encountered an error while executing the system command. Please try again.";
            setChatHistory((prev)=>[
                    ...prev,
                    {
                        type: 'ai',
                        message: errorMessage,
                        timestamp: new Date(),
                        source: 'error'
                    }
                ]);
            speakText(errorMessage);
        } finally{
            setIsExecutingCommand(false);
            setLoading(false);
        }
    };
    // Handle text input submission
    const handleTextSubmit = async (e, voiceCommand)=>{
        if (e) e.preventDefault();
        const userMessage = voiceCommand || textInput.trim();
        if (!userMessage) return;
        setTextInput("");
        setLoading(true);
        setChatHistory((prev)=>[
                ...prev,
                {
                    type: 'user',
                    message: userMessage,
                    timestamp: new Date()
                }
            ]);
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: userMessage,
                    systemPrompt: systemPrompt
                })
            });
            const data = await response.json();
            setChatHistory((prev)=>[
                    ...prev,
                    {
                        type: 'ai',
                        message: data.response,
                        timestamp: new Date(),
                        source: data.source
                    }
                ]);
            speakText(data.response);
        } catch (error) {
            console.error('Chat error:', error);
            const fallbackResponse = "I'm having trouble processing your request right now. Please try again.";
            setChatHistory((prev)=>[
                    ...prev,
                    {
                        type: 'ai',
                        message: fallbackResponse,
                        timestamp: new Date(),
                        source: 'error'
                    }
                ]);
            speakText(fallbackResponse);
        } finally{
            setLoading(false);
        }
    };
    // Capture frame and analyze
    const handleCaptureAndIdentify = async ()=>{
        if (!videoRef.current || !canvasRef.current) return;
        setLoading(true);
        setError("");
        try {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = canvas.toDataURL("image/jpeg", 0.8);
                // Try internet-connected analysis first
                try {
                    const chatResponse = await fetch('/api/chat', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            message: "Please analyze this image in detail and tell me what you see.",
                            imageData: imageData,
                            systemPrompt: systemPrompt
                        })
                    });
                    if (chatResponse.ok) {
                        const chatData = await chatResponse.json();
                        setChatHistory((prev)=>[
                                ...prev,
                                {
                                    type: 'ai',
                                    message: chatData.response,
                                    timestamp: new Date(),
                                    source: chatData.source
                                }
                            ]);
                        speakText(chatData.response);
                    }
                } catch (chatError) {
                    console.log('Internet analysis failed, using local recognition');
                }
                // Also run local object detection
                const response = await fetch("/api/recognize", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        imageData
                    })
                });
                const data = await response.json();
                if (response.ok) {
                    setRecognitionResult(data);
                } else {
                    setError(data.message || "Recognition failed. Please try again.");
                }
            }
        } catch (err) {
            console.error("Capture error:", err);
            setError("An error occurred during recognition. Please try again.");
        } finally{
            setLoading(false);
        }
    };
    // Voice listening toggle
    const handleToggleListening = ()=>{
        if (!recognition.current) {
            speakText("Speech recognition is not supported in this browser.");
            return;
        }
        if (isListening) {
            recognition.current.stop();
            setIsListening(false);
        } else {
            recognition.current.start();
            setIsListening(true);
        }
    };
    // Quick system queries
    const handleQuickQuery = async (query)=>{
        setLoading(true);
        setChatHistory((prev)=>[
                ...prev,
                {
                    type: 'user',
                    message: query,
                    timestamp: new Date()
                }
            ]);
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: query,
                    systemPrompt: systemPrompt
                })
            });
            const data = await response.json();
            setChatHistory((prev)=>[
                    ...prev,
                    {
                        type: 'ai',
                        message: data.response,
                        timestamp: new Date(),
                        source: data.source
                    }
                ]);
            speakText(data.response);
        } catch (error) {
            const fallbackResponse = "I'm having trouble accessing that information right now.";
            setChatHistory((prev)=>[
                    ...prev,
                    {
                        type: 'ai',
                        message: fallbackResponse,
                        timestamp: new Date(),
                        source: 'error'
                    }
                ]);
            speakText(fallbackResponse);
        } finally{
            setLoading(false);
        }
    };
    // Stop media stream on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PersonalAIPage.useEffect": ()=>{
            return ({
                "PersonalAIPage.useEffect": ()=>{
                    if (stream) {
                        stream.getTracks().forEach({
                            "PersonalAIPage.useEffect": (track)=>track.stop()
                        }["PersonalAIPage.useEffect"]);
                    }
                    window.speechSynthesis.cancel();
                }
            })["PersonalAIPage.useEffect"];
        }
    }["PersonalAIPage.useEffect"], [
        stream
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen p-6 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none opacity-5",
                children: Array.from({
                    length: 50
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-px h-px bg-blue-400 rounded-full",
                        style: {
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animation: `dataStream ${2 + Math.random() * 3}s infinite linear`
                        }
                    }, i, false, {
                        fileName: "[project]/src/app/personal-ai/page.tsx",
                        lineNumber: 452,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/personal-ai/page.tsx",
                lineNumber: 450,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-bold neon-text mb-2",
                                        children: "PAGE Control Center"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                        lineNumber: 469,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-300",
                                                children: "Advanced AI • System Control • Voice Commands"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                lineNumber: 471,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex items-center px-3 py-1 rounded-full text-sm font-medium futuristic-card ${internetConnected ? 'border-green-400' : 'border-yellow-400'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `status-indicator mr-2 ${internetConnected ? 'status-online' : 'status-offline'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 477,
                                                        columnNumber: 17
                                                    }, this),
                                                    internetConnected ? 'Internet Connected' : 'Offline Mode'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                lineNumber: 472,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                        lineNumber: 470,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                lineNumber: 468,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "neon-button px-4 py-2 rounded-lg transition-all duration-300",
                                children: "Back to Home"
                            }, void 0, false, {
                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                lineNumber: 484,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/personal-ai/page.tsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 futuristic-card border-red-400 p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "status-indicator status-error mr-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/personal-ai/page.tsx",
                                    lineNumber: 496,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-red-400",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/app/personal-ai/page.tsx",
                                    lineNumber: 497,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/personal-ai/page.tsx",
                            lineNumber: 495,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/personal-ai/page.tsx",
                        lineNumber: 494,
                        columnNumber: 11
                    }, this),
                    showPromptEditor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 modal-backdrop flex items-center justify-center z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-content p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-blue-400 mb-4",
                                    children: "System Prompt Editor"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/personal-ai/page.tsx",
                                    lineNumber: 506,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: systemPrompt,
                                    onChange: (e)=>setSystemPrompt(e.target.value),
                                    className: "futuristic-textarea w-full h-64 p-4 text-sm",
                                    placeholder: "Enter your custom system prompt..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/personal-ai/page.tsx",
                                    lineNumber: 507,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end space-x-4 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowPromptEditor(false),
                                            className: "px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                            lineNumber: 514,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowPromptEditor(false),
                                            className: "neon-button px-4 py-2 rounded-lg",
                                            children: "Save Prompt"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                            lineNumber: 520,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/personal-ai/page.tsx",
                                    lineNumber: 513,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/personal-ai/page.tsx",
                            lineNumber: 505,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/personal-ai/page.tsx",
                        lineNumber: 504,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 futuristic-card p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-blue-400 mb-4",
                                children: "Quick Actions"
                            }, void 0, false, {
                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                lineNumber: 533,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleQuickQuery("What's the current system status?"),
                                        disabled: loading,
                                        className: "neon-button px-4 py-2 text-sm rounded-lg disabled:opacity-50",
                                        children: "System Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                        lineNumber: 535,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleQuickQuery("Show me the latest news"),
                                        disabled: loading,
                                        className: "neon-button px-4 py-2 text-sm rounded-lg disabled:opacity-50",
                                        children: "Latest News"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                        lineNumber: 542,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleQuickQuery("What's the weather like today?"),
                                        disabled: loading,
                                        className: "neon-button px-4 py-2 text-sm rounded-lg disabled:opacity-50",
                                        children: "Weather Update"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                        lineNumber: 549,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowPromptEditor(true),
                                        className: "neon-button px-4 py-2 text-sm rounded-lg",
                                        children: "Edit System Prompt"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                        lineNumber: 556,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleClearConversation,
                                        className: "px-4 py-2 text-sm border border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-black transition-colors",
                                        children: "Clear Conversation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                        lineNumber: 562,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                lineNumber: 534,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/personal-ai/page.tsx",
                        lineNumber: 532,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 futuristic-card p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-blue-400 mb-4",
                                children: "Media & Voice Control"
                            }, void 0, false, {
                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                lineNumber: 573,
                                columnNumber: 11
                            }, this),
                            !stream ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleEnableMedia,
                                className: "neon-button px-6 py-3 text-lg font-semibold rounded-lg",
                                children: "Initialize Camera & Microphone"
                            }, void 0, false, {
                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                lineNumber: 575,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleStopMedia,
                                        className: "px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors",
                                        children: "Stop Media"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                        lineNumber: 583,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCaptureAndIdentify,
                                        disabled: loading,
                                        className: "neon-button px-6 py-3 font-semibold rounded-lg disabled:opacity-50",
                                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "loading-dots mr-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "loading-dot"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                            lineNumber: 597,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "loading-dot"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                            lineNumber: 598,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "loading-dot"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                            lineNumber: 599,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/personal-ai/page.tsx",
                                                    lineNumber: 596,
                                                    columnNumber: 21
                                                }, this),
                                                "Analyzing..."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                            lineNumber: 595,
                                            columnNumber: 19
                                        }, this) : "Capture & Analyze"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                        lineNumber: 589,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleToggleListening,
                                        className: `px-6 py-3 font-semibold rounded-lg transition-colors ${isListening ? "neon-button active" : "neon-button"}`,
                                        children: isListening ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "voice-visualizer mr-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "voice-bar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                            lineNumber: 616,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "voice-bar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                            lineNumber: 617,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "voice-bar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                            lineNumber: 618,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "voice-bar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                            lineNumber: 619,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "voice-bar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                            lineNumber: 620,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/personal-ai/page.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 21
                                                }, this),
                                                "Listening..."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                            lineNumber: 614,
                                            columnNumber: 19
                                        }, this) : "Voice Command"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                        lineNumber: 605,
                                        columnNumber: 15
                                    }, this),
                                    isSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>window.speechSynthesis.cancel(),
                                        className: "px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors",
                                        children: "Stop Speaking"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                        lineNumber: 627,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                lineNumber: 582,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/personal-ai/page.tsx",
                        lineNumber: 572,
                        columnNumber: 9
                    }, this),
                    stream && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "futuristic-card p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-blue-400 mb-4",
                                                children: "Live Camera Feed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                lineNumber: 644,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                        ref: videoRef,
                                                        autoPlay: true,
                                                        playsInline: true,
                                                        className: "w-full rounded-lg border border-blue-400/30 shadow-lg",
                                                        style: {
                                                            transform: 'scaleX(-1)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 646,
                                                        columnNumber: 19
                                                    }, this),
                                                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-black/70 flex items-center justify-center rounded-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "loading-dots mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "loading-dot"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                            lineNumber: 657,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "loading-dot"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                            lineNumber: 658,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "loading-dot"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                            lineNumber: 659,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                    lineNumber: 656,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-blue-400 font-semibold",
                                                                    children: "PAGE Processing..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                    lineNumber: 661,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                            lineNumber: 655,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 654,
                                                        columnNumber: 21
                                                    }, this),
                                                    isListening && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-4 right-4 bg-blue-500/80 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "voice-visualizer mr-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "voice-bar"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                            lineNumber: 669,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "voice-bar"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                            lineNumber: 670,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "voice-bar"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                            lineNumber: 671,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                    lineNumber: 668,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Listening"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                            lineNumber: 667,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 666,
                                                        columnNumber: 21
                                                    }, this),
                                                    isSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-4 left-4 bg-purple-500/80 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse",
                                                        children: "Speaking"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 678,
                                                        columnNumber: 21
                                                    }, this),
                                                    isExecutingCommand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-4 right-4 bg-green-500/80 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse",
                                                        children: "Executing Command"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 683,
                                                        columnNumber: 21
                                                    }, this),
                                                    internetConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-4 left-4 bg-green-500/80 text-white px-3 py-1 rounded-full text-sm font-semibold",
                                                        children: "Internet Active"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 688,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                lineNumber: 645,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                                ref: canvasRef,
                                                className: "hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                lineNumber: 693,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                        lineNumber: 643,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "futuristic-card p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-blue-400 mb-4",
                                                children: [
                                                    "Chat with PAGE",
                                                    internetConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-400 ml-2",
                                                        children: "(Internet Connected)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 700,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                lineNumber: 698,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleTextSubmit,
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: textInput,
                                                        onChange: (e)=>setTextInput(e.target.value),
                                                        placeholder: internetConnected ? "Ask PAGE anything - system commands, research, analysis..." : "Type your message to PAGE...",
                                                        className: "futuristic-input flex-1 px-4 py-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 703,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: !textInput.trim() || loading,
                                                        className: "neon-button px-6 py-2 font-semibold rounded-lg disabled:opacity-50",
                                                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "loading-dots",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "loading-dot"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                    lineNumber: 720,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "loading-dot"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                    lineNumber: 721,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "loading-dot"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                    lineNumber: 722,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                            lineNumber: 719,
                                                            columnNumber: 23
                                                        }, this) : "Send"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 713,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                lineNumber: 702,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                        lineNumber: 697,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                lineNumber: 642,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "futuristic-card p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-blue-400 mb-4",
                                                children: "Conversation History"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                lineNumber: 734,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-64 overflow-y-auto space-y-3 mb-4",
                                                children: chatHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center py-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 bg-white rounded-full animate-pulse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                lineNumber: 739,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                            lineNumber: 738,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-400",
                                                            children: "Start a conversation with PAGE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                            lineNumber: 741,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500 mt-1",
                                                            children: internetConnected ? "Full capabilities available!" : "Enable camera to begin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                            lineNumber: 742,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/personal-ai/page.tsx",
                                                    lineNumber: 737,
                                                    columnNumber: 21
                                                }, this) : chatHistory.map((chat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${chat.type === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm",
                                                                    children: chat.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                    lineNumber: 754,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between text-xs opacity-70 mt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: chat.timestamp.toLocaleTimeString()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                            lineNumber: 756,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        chat.source && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `px-2 py-1 rounded text-xs ${chat.source === 'internet-connected' ? 'bg-green-200 text-green-800' : chat.source === 'system-execution' ? 'bg-blue-200 text-blue-800' : chat.source === 'offline-enhanced' ? 'bg-yellow-200 text-yellow-800' : 'bg-gray-200 text-gray-600'}`,
                                                                            children: chat.source === 'internet-connected' ? '🌐' : chat.source === 'system-execution' ? '⚙️' : chat.source === 'offline-enhanced' ? '📱' : '🔧'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                            lineNumber: 758,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                    lineNumber: 755,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                            lineNumber: 749,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, index, false, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 748,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                lineNumber: 735,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                        lineNumber: 733,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "futuristic-card p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-blue-400 mb-4",
                                                children: "Visual Analysis"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                lineNumber: 779,
                                                columnNumber: 17
                                            }, this),
                                            recognitionResult ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    recognitionResult.detectedObjects && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-medium text-green-400 mb-2",
                                                                children: "Detected Objects:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                lineNumber: 784,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1",
                                                                children: recognitionResult.detectedObjects.map((obj, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between items-center bg-gray-800/50 p-2 rounded border border-green-400/20",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-200",
                                                                                children: obj.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                                lineNumber: 788,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm text-green-400",
                                                                                children: [
                                                                                    (obj.confidence * 100).toFixed(0),
                                                                                    "%"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                                lineNumber: 789,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                        lineNumber: 787,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                lineNumber: 785,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 783,
                                                        columnNumber: 23
                                                    }, this),
                                                    recognitionResult.faceRecognition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-medium text-purple-400 mb-2",
                                                                children: "Face Recognition:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                lineNumber: 798,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gray-800/50 p-3 rounded border border-purple-400/20",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-200",
                                                                                children: recognitionResult.faceRecognition.status
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                                lineNumber: 801,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `status-indicator ${recognitionResult.faceRecognition.status === 'Verified' ? 'status-online' : 'status-offline'}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                                lineNumber: 802,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                        lineNumber: 800,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    recognitionResult.faceRecognition.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-400 mt-1",
                                                                        children: [
                                                                            "Welcome, ",
                                                                            recognitionResult.faceRecognition.name
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                        lineNumber: 807,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                lineNumber: 799,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 797,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                lineNumber: 781,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 bg-gray-600 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/personal-ai/page.tsx",
                                                            lineNumber: 818,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 817,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-400",
                                                        children: "No visual analysis yet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 820,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 mt-1",
                                                        children: 'Click "Capture & Analyze" to start'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 821,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                lineNumber: 816,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                        lineNumber: 778,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "futuristic-card p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-blue-400 mb-4",
                                                children: "PAGE System Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                lineNumber: 828,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "Internet Access"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                lineNumber: 831,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `flex items-center ${internetConnected ? 'text-green-400' : 'text-yellow-400'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `status-indicator mr-2 ${internetConnected ? 'status-online' : 'status-offline'}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                        lineNumber: 833,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    internetConnected ? 'Connected' : 'Configure API Key'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                lineNumber: 832,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 830,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "Camera"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                lineNumber: 838,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `flex items-center ${stream ? 'text-green-400' : 'text-gray-400'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `status-indicator mr-2 ${stream ? 'status-online' : 'status-offline'}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                        lineNumber: 840,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    stream ? 'Active' : 'Inactive'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                lineNumber: 839,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 837,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "Microphone"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                lineNumber: 845,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `flex items-center ${stream ? 'text-green-400' : 'text-gray-400'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `status-indicator mr-2 ${stream ? 'status-online' : 'status-offline'}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                        lineNumber: 847,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    stream ? 'Active' : 'Inactive'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                lineNumber: 846,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 844,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "Voice Synthesis"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                lineNumber: 852,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `flex items-center ${isSpeaking ? 'text-purple-400' : 'text-green-400'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `status-indicator mr-2 ${isSpeaking ? 'status-error' : 'status-online'}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                        lineNumber: 854,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    isSpeaking ? 'Speaking' : 'Ready'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                lineNumber: 853,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 851,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "AI Processing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                lineNumber: 859,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `flex items-center ${loading ? 'text-blue-400' : 'text-green-400'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `status-indicator mr-2 ${loading ? 'status-error' : 'status-online'}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                        lineNumber: 861,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    loading ? 'Processing' : 'Ready'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                lineNumber: 860,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 858,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "Command Execution"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                lineNumber: 866,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `flex items-center ${isExecutingCommand ? 'text-orange-400' : 'text-green-400'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `status-indicator mr-2 ${isExecutingCommand ? 'status-error' : 'status-online'}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                        lineNumber: 868,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    isExecutingCommand ? 'Executing' : 'Ready'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                                lineNumber: 867,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                                        lineNumber: 865,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                                lineNumber: 829,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/personal-ai/page.tsx",
                                        lineNumber: 827,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/personal-ai/page.tsx",
                                lineNumber: 731,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/personal-ai/page.tsx",
                        lineNumber: 640,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/personal-ai/page.tsx",
                lineNumber: 465,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/personal-ai/page.tsx",
        lineNumber: 448,
        columnNumber: 5
    }, this);
}
_s(PersonalAIPage, "stbE5oRC5kGSUNCUpmGcjFm/Kd8=");
_c = PersonalAIPage;
var _c;
__turbopack_context__.k.register(_c, "PersonalAIPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_personal-ai_page_tsx_b5919647._.js.map