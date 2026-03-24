---
sidebar_position: 1
---

# Why Spinach

I made Spinach because the other quantum languages are not shaped the way quantum computing actually works.

The best existing approach is using Python to describe circuits with pytket or similar libraries. While Python gets the job done, quantum computing still feels like a second-class citizen — you're forcing inherently quantum concepts into a general-purpose language.

Spinach's strength is a frontend designed specifically around how quantum circuits are built and reasoned about.

A good example is the **pipeline** concept. In classical programming, the reusability primitive is a function. In quantum computing, functions feel awkward — the real unit of reuse is a sequence of gates applied to a qubit, and that sequence has a natural inverse. Spinach pipelines are exactly that: a named sequence of gates that can be run forward or **reversed** in a single token (`<-`). A lot of quantum algorithms, including Grover's diffuser and quantum teleportation, require undoing a sequence of gates — that's a first-class operation in Spinach.

Spinach also handles **classical control** natively. You can measure a qubit, manipulate the resulting classical bits with logical operations, and gate later quantum operations on those results — all in `.sph` syntax, without leaving the quantum description level.

Spinach code is hardware-agnostic: it compiles to OpenQASM, Cirq, Quil, Braket, QIR, LaTeX and more — so your circuits run on any quantum computer or simulator.

## Documentation index

| Page | What you'll learn |
|------|-------------------|
| [Setup](setup.md) | Install, CLI, Python library, LSP server |
| [Declarations](declarations.md) | Qubits, bits, lists, pipelines, `q N` syntax |
| [Gate Pipelines](pipeline.md) | All available gates, angle convention, BARRIER, CIRCBOX |
| [Actions](actions.md) | Targets, repeat count, wildcard `*`, reverse `<-` |
| [Conditional Actions](conditionals.md) | `if` / `if-else`, classical feedforward |
| [Classical Bit Ops](classical-bits.md) | NOT, SET, AND, OR, XOR, COPY |
| [API Server](api.md) | GraphQL API for remote compilation |
