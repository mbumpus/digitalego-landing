```mermaid
flowchart LR
    A[Client Intake Form<br/>(Tally / Typeform)]
    B[Mapped to Traits<br/>(Directed Q&A → Fields)]
    C[Generate YAML Persona File]
    D[YAML → Prompt Converter]
    E[System Prompt Injected into GPT]
    F[Chatbot Output to User]
    G[Updates via Evolution Plan<br/>(Future: YAML refresh)]

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
