```mermaid
flowchart LR
    A[Client Intake Form (Tally or Typeform)]
    B[Mapped to Traits (Directed Q&A to Fields)]
    C[Generate YAML Persona File]
    D[YAML to Prompt Converter]
    E[System Prompt Injected into GPT]
    F[Chatbot Output to User]
    G[Updates via Evolution Plan (Future: YAML refresh)]

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
