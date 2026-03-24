---
sidebar_position: 4
---
# Gate pipelines

A gate pipeline is a list of gates that are traversable in both directions.

## How to use them

### We can name them:

```spinach
name : H | Y
```

### We can execute them directly with an action:

```spinach
1 -> H | Y
```

### Once named they can be traversed in reverse:

```spinach
1 -> name | name <-
```

Here, the first `name` is traversed from left to right and the second time from right to left. It's equivalent to:

```spinach
1 -> H | Y | Y | H
```

---

## Angle convention

Rotation angles are expressed in **half-turns** (multiples of π). So `RX(0.5)` means a rotation of 0.5π = 90°. Decimal literals are accepted: `RZ(0.25)` = π/4 rotation.

---

## Available gates

### Pauli-X (NOT) gate

Flips |0⟩ to |1⟩ and |1⟩ to |0⟩. Equivalent to a classical NOT.

```spinach
N  or  X
```

```
[[0, 1],
 [1, 0]]
```

### Pauli-Y gate

Combines a bit-flip and a phase-flip. Maps |0⟩ → i|1⟩ and |1⟩ → -i|0⟩.

```spinach
Y
```

```
[[0, -i],
 [i,  0]]
```

### Pauli-Z gate

Flips the phase of |1⟩.

```spinach
Z
```

```
[[1,  0],
 [0, -1]]
```

### Hadamard gate

Creates superpositions.

```spinach
H
```

```
[[1/√2,  1/√2],
 [1/√2, -1/√2]]
```

### Phase gate (S)

Applies a phase of i to |1⟩.

```spinach
S
```

```
[[1, 0],
 [0, i]]
```

### Conjugate phase (S†) gate

Inverse of S. Applies -i to |1⟩.

```spinach
ST
```

```
[[1,  0],
 [0, -i]]
```

### π/8 gate (T)

Applies a phase of e^(iπ/4) to |1⟩.

```spinach
T
```

```
[[1, 0],
 [0, e^(iπ/4)]]
```

### Conjugate T (T†) gate

Inverse of T. Applies phase -π/4 to |1⟩.

```spinach
TT
```

```
[[1, 0],
 [0, e^(-iπ/4)]]
```

### √X gate (SX)

Square root of the X gate.

```spinach
SX
```

```
[[1+i, 1-i],
 [1-i, 1+i]] / 2
```

### √X† gate (SXdg)

Inverse of SX.

```spinach
SXDG
```

### V gate

Alias for √X in the TKET convention.

```spinach
V
```

### V† gate

Inverse of V.

```spinach
VDG
```

---

### Rotation-X gate

Rotates around the X axis by angle θ (in half-turns).

```spinach
RX(theta)
```

```
[[cos(θπ/2),   -i·sin(θπ/2)],
 [-i·sin(θπ/2), cos(θπ/2)]]
```

### Rotation-Y gate

Rotates around the Y axis by angle θ.

```spinach
RY(theta)
```

```
[[cos(θπ/2), -sin(θπ/2)],
 [sin(θπ/2),  cos(θπ/2)]]
```

### Rotation-Z gate

Rotates around the Z axis by angle θ.

```spinach
RZ(theta)
```

```
[[e^(-iθπ/2), 0         ],
 [0,           e^(iθπ/2)]]
```

---

### IBM U1(λ) gate

Diagonal single-qubit gate; 1 angle in half-turns.

```spinach
U1(lambda)
```

### IBM U2(φ, λ) gate

Single-qubit gate; 2 angles in half-turns.

```spinach
U2(phi, lambda)
```

### IBM U3(θ, φ, λ) gate

Full SU(2) single-qubit gate; 3 angles in half-turns.

```spinach
U3(theta, phi, lambda)
```

### TKET TK1(α, β, γ) gate

Euler decomposition; 3 angles in half-turns.

```spinach
TK1(alpha, beta, gamma)
```

### PhasedX gate

Rotation around a phase-shifted axis; 2 angles (exponent, phase) in half-turns.

```spinach
PX(exponent, phase)   or   PHASEDX(exponent, phase)
```

---

### Controlled-NOT (CX / CNOT)

Flips the target qubit if the control is |1⟩.

```spinach
CNOT(control)  or  CX(control)
```

```
[[1,0,0,0],
 [0,1,0,0],
 [0,0,0,1],
 [0,0,1,0]]
```

### Controlled-Y (CY)

Applies Y to the target if the control is |1⟩.

```spinach
CY(control)
```

### Controlled-Z (CZ)

Applies Z to the target if the control is |1⟩.

```spinach
CZ(control)
```

### Controlled-Hadamard (CH)

Applies H to the target if the control is |1⟩.

```spinach
CH(control)
```

### Flipped-Control variants (FCX, FCY, FCZ, FCH)

These are the same as their `C*` counterparts but with **control and target swapped**. Useful when writing pipelines where the qubit flowing through the pipeline is the *control* rather than the target:

```spinach
FCNOT(target)  or  FCX(target)
FCY(target)
FCZ(target)
FCH(target)
```

### Controlled-U1 phase gate (CU1)

Applies a phase shift of φ to the target if the control is |1⟩.

```spinach
CU1(phi, control)
```

### SWAP gate

Exchanges the states of two qubits.

```spinach
SWAP(target)
```

### Controlled-Rx (CRX)

Controlled rotation around X; 1 angle + control qubit.

```spinach
CRX(angle, ctrl)
```

### Controlled-Ry (CRY)

Controlled rotation around Y; 1 angle + control qubit.

```spinach
CRY(angle, ctrl)
```

### Controlled-Rz (CRZ)

Controlled rotation around Z; 1 angle + control qubit.

```spinach
CRZ(angle, ctrl)
```

### Echoed Cross-Resonance gate (ECR)

Native 2-qubit gate for IBM superconducting hardware.

```spinach
ECR(ctrl)
```

### iSWAP gate

Parameterised imaginary-SWAP; angle in half-turns.

```spinach
ISWAP(angle, other)
```

### Maximal iSWAP (ISWAPMAX)

Equivalent to `ISWAP(1)`.

```spinach
ISWAPMAX(other)
```

### ZZMax gate

Maximum ZZ interaction (≡ ZZPhase(1)).

```spinach
ZZMAX(other)
```

### ZZPhase gate

exp(-i·angle·π/2 · ZZ); angle in half-turns.

```spinach
ZZPH(angle, other)
```

### XXPhase gate

exp(-i·angle·π/2 · XX); angle in half-turns.

```spinach
XXPH(angle, other)
```

### YYPhase gate

exp(-i·angle·π/2 · YY); angle in half-turns.

```spinach
YYPH(angle, other)
```

### Fermionic Simulation gate (FSim)

2 angles + partner qubit.

```spinach
FSIM(theta, phi, other)
```

### TKET TK2 gate

Canonical 2-qubit interaction; 3 angles + partner qubit.

```spinach
TK2(a, b, c, other)
```

### PhasedISWAP gate

2 angles + partner qubit.

```spinach
PHISWAP(p, t, other)
```

---

### Toffoli (CCX / TOFFOLI) gate

Double-controlled NOT. Flips the target only if both controls are |1⟩.

```spinach
TOFFOLI(ctrl1, ctrl2)  or  CCX(ctrl1, ctrl2)
```

```
8×8 identity with the bottom-right 2×2 swapped (|110⟩ ↔ |111⟩)
```

### CSWAP / Fredkin gate

Controlled-SWAP: swaps target ↔ other when ctrl=|1⟩.

```spinach
CSWAP(ctrl, other)  or  FREDKIN(ctrl, other)
```

### XXPhase3 gate

3-qubit simultaneous XX interactions on all pairs; 1 angle + 2 partner qubits.

```spinach
XXP3(angle, q1, q2)
```

---

### Measurement

Measures the qubit in the computational basis and stores the result in a classical bit.

```spinach
M(bit)  or  MEASURE(bit)
```

If no bit argument is given, the result is stored in the default bit for that qubit index. When the target is `*` with no argument, `measure_all()` is used.

```spinach
* -> M        # measure every qubit
q 0 -> M      # measure qubit 0 into default bit
q 0 -> M(b0)  # measure qubit 0 into named classical bit b0
```

### Reset

Resets a qubit to |0⟩.

```spinach
R  or  RESET
```

```spinach
q 0 -> RESET   # return qubit to ground state
```

---

### BARRIER

Prevents the compiler from reordering gates across this point. One joint barrier is placed across all targeted qubits:

```spinach
q 0 -> BARRIER
[q 0, q 1] -> BARRIER
* -> BARRIER
```

### PHASE (global phase)

Adds a global phase of `angle·π` to the whole circuit. Global phase is not physically observable but is useful for circuit identities.

```spinach
q 0 -> PHASE(0.5)    # adds a global phase of π/2
```

### CIRCBOX (sub-circuit box)

Wraps a named instruction pipeline into a pytket `CircBox` sub-circuit:

```spinach
bell_prep : H  FCX(q 1)
[q 0, q 1] -> CIRCBOX(bell_prep)
```

The named pipeline is compiled into an isolated sub-circuit and embedded as an opaque box in the parent circuit. This is useful for hierarchical circuit design.
