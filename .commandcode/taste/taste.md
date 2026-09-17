# Taste

- When something isn't working, wants to understand the root cause and underlying mechanics (asks "why is this not working?"), not just receive a one-off fix — explain the reason and the generalizable rule behind the behavior. Confidence: 0.6
- Wants to be told where/how to fix code rather than having the assistant apply the changes directly — explicitly asks "don't do it but let me know" and asks to see proposed code in the terminal/chat without modifying the actual script. Confidence: 1.0
- Cares that test assertions are genuinely valid — a test should fail when the actual state doesn't match the expectation (e.g., "this test should be failing after sorting"), and passes only for the right reason, not incidentally because of a wrong selector or stale snapshot. Confidence: 0.6
- Prefers simple, plain-language explanations with concrete step-by-step examples — a long multi-point technical explanation left them confused ("I didn't get exactly?"), and the simplified version with explicit before/after code was what landed. Confidence: 0.5
