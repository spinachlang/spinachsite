---
sidebar_position: 2
---

# setup
There is no package yet so you need to use the source code for now.

## Initial setup
Clone the repo:
```
git clone https://github.com/spinachlang/spinachlang.git
```
Go to the new folder:
```
cd spinachlang
```
Create a venv:
```
python3 -m venv venv
```
Use the venv:
```
source venv/bin/activate
```
Install the dependencies
```
pip install -r requirements.txt
```
And that's it! You're ready to go! 🚀 Now let's see how to use Spinach's CLI.
## use the CLI
To test let's create a simple example:
```
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
```
python . -l qasm example_code.sph
```
This will create a new file with a representation of the circuit in qasm. You can look at it:
```
cat example_code.qasm
```
At the moment, we can compile to qasm, quil, cirq python and json.

## use as a python library:
Spinach is also made to be a Python library to simplify circuit creation. Spinach.creat_circuit(code) creates a tket circuit that's usable for simulations. Other kinds of circuits will be featured in the futur.
