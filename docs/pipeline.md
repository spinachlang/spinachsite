---
sidebar_position: 4
---
# Gate pipelines

A gate pipeline is a list of gates that are traversable in both directions.

## how to use them:
### We can name them:
```
name : H | Y
```

### We can execute them directly with an action
```
1 -> H | Y
```

### once named they can be traversed in reverse:
```
1 -> name | name <-
```
Here, the first name is traversed from left to right and the second time it's from right to left. It's the equivalent to:
```
1 = H | Y | Y | H
```

# what gates are available:
Here are all the available gates with explanations and matrix representations:

```
N or X
```
**Pauli-X (NOT) gate**: Flips |0⟩ to |1⟩ and |1⟩ to |0⟩. Equivalent to a classical NOT.
```
[[0, 1],
 [1, 0]]
```

```
Y
```
**Pauli-Y gate**: Combines a bit-flip and a phase-flip. Maps |0⟩ → i|1⟩ and |1⟩ → -i|0⟩.
```
[[0, -i],
 [i, 0]]
```

```
Z
```
**Pauli-Z gate**: Flips the phase of |1⟩.
```
[[1, 0],
 [0, -1]]
```

```
H
```
**Hadamard gate**: Creates superpositions.
```
[[1/√2,  1/√2],
 [1/√2, -1/√2]]
```

```
S
```
**Phase gate**: Applies a phase of i to |1⟩.
```
[[1, 0],
 [0, i]]
```

```
ST
```
**Conjugate phase (S†) gate**: Inverse of the S gate. Applies -i to |1⟩.
```
[[1, 0],
 [0, -i]]
```

```
TT
```
**Conjugate T (T†) gate**: Inverse of the T gate. Applies phase -π/4 to |1⟩.
```
[[1, 0],
 [0, e^(-iπ/4)]]
```

```
T
```
**π/8 gate**: Applies a phase of e^(iπ/4) to |1⟩.
```
[[1, 0],
 [0, e^(iπ/4)]]
```

```
RX(theta)
```
**Rotation-X gate**: Rotates around the X axis by angle θ.
```
[[cos(θ/2), -i·sin(θ/2)],
 [-i·sin(θ/2), cos(θ/2)]]
```

```
RY(theta)
```
**Rotation-Y gate**: Rotates around the Y axis by angle θ.
```
[[cos(θ/2), -sin(θ/2)],
 [sin(θ/2), cos(θ/2)]]
```

```
RZ(theta)
```
**Rotation-Z gate**: Rotates around the Z axis by angle θ.
```
[[e^(-iθ/2), 0],
 [0, e^(iθ/2)]]
```

```
CNOT(control) or CX(control)
```
**Controlled-NOT**: Flips the target qubit if the control is |1⟩.
```
[[1,0,0,0],
 [0,1,0,0],
 [0,0,0,1],
 [0,0,1,0]]
```

```
CY(control)
```
**Controlled-Y**: Applies Y to the target if the control is |1⟩.
```
[[1,0,0,0],
 [0,1,0,0],
 [0,0,0,-i],
 [0,0,i,0]]
```

```
CZ(control)
```
**Controlled-Z**: Applies Z to the target if the control is |1⟩.
```
[[1,0,0,0],
 [0,1,0,0],
 [0,0,1,0],
 [0,0,0,-1]]
```

```
CH(control)
```
**Controlled-Hadamard**: Applies H to the target if the control is |1⟩.
```
[[1,0,0,0],
 [0,1,0,0],
 [0,0,1/√2,1/√2],
 [0,0,1/√2,-1/√2]]
```

```
CU1(phi)
```
**Controlled-U1 (phase) gate**: Applies a phase shift of φ to the target if the control is |1⟩.
```
[[1,0,0,0],
 [0,1,0,0],
 [0,0,1,0],
 [0,0,0,e^(iφ)]]
```

```
SWAP(target)
```
**SWAP gate**: Exchanges the states of two qubits.
```
[[1,0,0,0],
 [0,0,1,0],
 [0,1,0,0],
 [0,0,0,1]]
```

```
TOFFOLI(control1, control2) or CCX(control1, control2)
```
**Toffoli (CCX) gate**: A double-controlled NOT. Flips the target only if both controls are |1⟩.
```
[[1,0,0,0,0,0,0,0],
 [0,1,0,0,0,0,0,0],
 [0,0,1,0,0,0,0,0],
 [0,0,0,1,0,0,0,0],
 [0,0,0,0,1,0,0,0],
 [0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1],
 [0,0,0,0,0,0,1,0]]
```

```
M(bit) or MEASURE(bit)
```
**Measurement**: Measures the qubit in the computational basis and stores the classical result in the given bit.
```
No fixed unitary matrix — corresponds to projectors |0⟩⟨0| and |1⟩⟨1|.
```

```
FCNOT(target) or FCX(target)
```
**Flipped-Control CNOT**: Same as CNOT, but with target/control swapped for pipeline convenience.
```
(Same as CNOT but qubit roles swapped)
```

```
FCY(target)
```
**Flipped-Control CY**: Same as CY, but with target/control swapped.
```
(Same as CY but qubit roles swapped)
```

```
FCZ(target)
```
**Flipped-Control CZ**: Same as CZ, but with target/control swapped.
```
(Same as CZ but qubit roles swapped)
```

```
FCH(target)
```
**Flipped-Control CH**: Same as CH, but with target/control swapped.
```
(Same as CH but qubit roles swapped)

