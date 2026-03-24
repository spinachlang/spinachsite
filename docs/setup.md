---
sidebar_position: 2
---

# Setup

## For normal usage

Install spinachlang from PyPI:

```bash
pip install spinachlang
```

This installs the CLI and the Python library.

## For development

### Initial setup

Clone the repo:

```bash
git clone https://github.com/spinachlang/spinachlang.git
cd spinachlang
```

Create and activate a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
```

Install the package in editable mode:

```bash
pip install -e .
```

You're ready to go! 🚀

---

## Using the CLI

Create a simple example file:

```bash
cat > example.sph << 'EOF'
# Bell state
alice : q 0
bob   : q 1
alice -> H | FCX(q 1)
* -> M
EOF
```

Compile it to a target language:

```bash
spinachlang -l qasm example.sph
```

This creates `example.qasm` in the same directory.

### Supported output languages

| Flag | Format |
|------|--------|
| `qasm` | OpenQASM 2.0 |
| `json` | pytket JSON |
| `cirq` | Cirq Python |
| `quil` | Quil (Rigetti) |
| `latex` | LaTeX/TikZ |
| `qir` | QIR (LLVM IR) |
| `braket` | Braket OpenQASM 3.0 |

### Read from stdin / write to stdout

Pass `-` as the filename to read from stdin and print to stdout:

```bash
echo "q 0 -> H | M" | spinachlang -l json -
```

This makes spinachlang composable in shell pipelines.

---

## Using the Python library

### `create_tket_circuit`

Takes a code string and returns a pytket `Circuit` object that you can simulate, optimise, or convert further:

```python
import spinachlang

circuit = spinachlang.create_tket_circuit(code="q 0 -> H | FCX(q 1)  M")
print(circuit.get_commands())
```

For more on what you can do with a pytket `Circuit`, see the [pytket documentation](https://docs.quantinuum.com/tket/api-docs/).

### `compile_code`

Compiles Spinach source directly to a target language string:

```python
import spinachlang

qasm = spinachlang.compile_code(code="q 0 -> H | M", language="qasm")
print(qasm)
```

### `Spinach` class — native framework objects

The `Spinach` class provides methods that return native objects for each supported framework, ready to run on simulators or hardware:

```python
from spinachlang import Spinach

# pytket Circuit (always available)
circuit = Spinach.to_tket(code)

# Qiskit QuantumCircuit (requires pytket-qiskit)
qc = Spinach.to_qiskit(code)
from qiskit_aer import AerSimulator
result = AerSimulator().run(qc.measure_all(inplace=False), shots=1000).result()

# Cirq Circuit (requires pytket-cirq)
cirq_circuit = Spinach.to_cirq(code)

# Amazon Braket Circuit (requires pytket-braket)
braket_circuit = Spinach.to_braket(code)

# PyQuil Program (requires pytket-pyquil, Python ≤3.12)
pyquil_program = Spinach.to_pyquil(code)
```

---

## LSP server (editor integration)

Spinachlang ships a built-in Language Server Protocol (LSP) server for IDE integration. It provides diagnostics (syntax errors highlighted in real time) and auto-completions for gate names and declared identifiers.

### Start in stdio mode (default, for editors like Neovim/VS Code):

```bash
spinachlang-lsp
```

### Start in TCP mode (useful for debugging):

```bash
spinachlang-lsp --tcp --port 2087
```

Configure your editor to connect to `spinachlang-lsp` as an LSP server for `.sph` files.
