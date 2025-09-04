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
**Pauli-X (NOT) gate**: Flips |0⟩ to |1⟩ and |1⟩ to |0⟩. Equivalent to a classical NOT.

```
N or X
```
```
[[0, 1],
 [1, 0]]
```
**Pauli-Y gate**: Combines a bit-flip and a phase-flip. Maps |0⟩ → i|1⟩ and |1⟩ → -i|0⟩.

```
Y
```
```
[[0, -i],
 [i, 0]]
```
**Pauli-Z gate**: Flips the phase of |1⟩.

```
Z
```
```
[[1, 0],
 [0, -1]]
```
**Hadamard gate**: Creates superpositions.

```
H
```
```
[[1/√2,  1/√2],
 [1/√2, -1/√2]]
```
**Phase gate**: Applies a phase of i to |1⟩.

```
S
```
```
[[1, 0],
 [0, i]]
```
**Conjugate phase (S†) gate**: Inverse of the S gate. Applies -i to |1⟩.

```
ST
```
```
[[1, 0],
 [0, -i]]
```
**Conjugate T (T†) gate**: Inverse of the T gate. Applies phase -π/4 to |1⟩.

```
TT
```
```
[[1, 0],
 [0, e^(-iπ/4)]]
```
**π/8 gate**: Applies a phase of e^(iπ/4) to |1⟩.

```
T
```
```
[[1, 0],
 [0, e^(iπ/4)]]
```
**Rotation-X gate**: Rotates around the X axis by angle θ.

```
RX(theta)
```
```
[[cos(θ/2), -i·sin(θ/2)],
 [-i·sin(θ/2), cos(θ/2)]]
```
**Rotation-Y gate**: Rotates around the Y axis by angle θ.

```
RY(theta)
```
```
[[cos(θ/2), -sin(θ/2)],
 [sin(θ/2), cos(θ/2)]]
```
**Rotation-Z gate**: Rotates around the Z axis by angle θ.

```
RZ(theta)
```
```
[[e^(-iθ/2), 0],
 [0, e^(iθ/2)]]
```
**Controlled-NOT**: Flips the target qubit if the control is |1⟩.

```
CNOT(control) or CX(control)
```
```
[[1,0,0,0],
 [0,1,0,0],
 [0,0,0,1],
 [0,0,1,0]]
```
**Controlled-Y**: Applies Y to the target if the control is |1⟩.

```
CY(control)
```
```
[[1,0,0,0],
 [0,1,0,0],
 [0,0,0,-i],
 [0,0,i,0]]
```
**Controlled-Z**: Applies Z to the target if the control is |1⟩.

```
CZ(control)
```
```
[[1,0,0,0],
 [0,1,0,0],
 [0,0,1,0],
 [0,0,0,-1]]
```
**Controlled-Hadamard**: Applies H to the target if the control is |1⟩.

```
CH(control)
```
```
[[1,0,0,0],
 [0,1,0,0],
 [0,0,1/√2,1/√2],
 [0,0,1/√2,-1/√2]]
```
**Controlled-U1 (phase) gate**: Applies a phase shift of φ to the target if the control is |1⟩.

```
CU1(phi)
```
```
[[1,0,0,0],
 [0,1,0,0],
 [0,0,1,0],
 [0,0,0,e^(iφ)]]
```
**SWAP gate**: Exchanges the states of two qubits.

```
SWAP(target)
```
```
[[1,0,0,0],
 [0,0,1,0],
 [0,1,0,0],
 [0,0,0,1]]
```
**Toffoli (CCX) gate**: A double-controlled NOT. Flips the target only if both controls are |1⟩.

```
TOFFOLI(control1, control2) or CCX(control1, control2)
```
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
**Measurement**: Measures the qubit in the computational basis and stores the classical result in the given bit.

```
M(bit) or MEASURE(bit)
```
```
No fixed unitary matrix — corresponds to projectors |0⟩⟨0| and |1⟩⟨1|.
```
**Flipped-Control CNOT**: Same as CNOT, but with target/control swapped for pipeline convenience.

```
FCNOT(target) or FCX(target)
```
```
(Same as CNOT but qubit roles swapped)
```
**Flipped-Control CY**: Same as CY, but with target/control swapped.

```
FCY(target)
```
```
(Same as CY but qubit roles swapped)
```
**Flipped-Control CZ**: Same as CZ, but with target/control swapped.

```
FCZ(target)
```
```
(Same as CZ but qubit roles swapped)
```
**Flipped-Control CH**: Same as CH, but with target/control swapped.

```
FCH(target)
```
```
(Same as CH but qubit roles swapped)

