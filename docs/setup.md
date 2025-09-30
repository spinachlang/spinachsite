---
sidebar_position: 2
---

# setup

## for normal usage
Install spinachlang from pypi:
```bach
pip install spinachlang
```
This installs the CLI and the library.
## for developement

### Initial setup
Clone the repo:
```bach
git clone https://github.com/spinachlang/spinachlang.git
```
Go to the new folder:
```bach
cd spinachlang
```
Create a venv:
```bach
python3 -m venv venv
```
Use the venv:
```bach
source venv/bin/activate
```

Install the package for testing:
```bach
pip install -e .
```
And that's it! You're ready to go! 🚀 Now let's see how to use Spinach's CLI.
## use the CLI
To test let's create a simple example:
```bach
cat > example_code.sph <<EOF
qubitA : 1
qubitB : 2
pipelineA : X | H
pipelineB : Y | Z
qubitA -> pipelineB | pipelineA <-
qubitB -> pipelineA
qubitA -> M
qubitB -> M
EOF
```
Then let's compile the code:
```bach
spinachlang -l qasm example_code.sph
```
This will create a new file with a representation of the circuit in qasm. You can look at it:
```bach
cat example_code.qasm
```
At the moment, we can compile to qasm, quil, cirq python and json.

## use the library
At the moment, two functions are exposed from the library.
### create_tket_circuit
This takes a code as string and returns a tket circuit that you can then transform to other representations and use for simulation.
For more information about tket circuit look at the [documentation for pytket](https://docs.quantinuum.com/tket/api-docs/).
```python
import spinachlang

c = spinachlang.create_tket_circuit(code="1 -> H | FCNOT(0) | M")
```
### compile_code
This compiles a code directly into an other language.
```python
import spinachlang

qasm_code = spinachlang.compile_code(code="1 -> H | FCNOT | M", language="qasm")
print(qasm_code)
```
