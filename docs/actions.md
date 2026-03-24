---
sidebar_position: 5
---
# Actions

Actions are what actually build the circuit — they apply a gate pipeline to one or more qubits or classical bits.

The general syntax is:

```spinach
target -> gate_pipeline
```

## Target types

### A named qubit

```spinach
alice : q 0
alice -> H
```

### A direct qubit index (bare number)

```spinach
0 -> H
```

### An explicit qubit reference (`q N`)

```spinach
q 0 -> H
q 0 -> CX(q 1)
```

### An inline list

```spinach
[q 0, q 1] -> H
```

### A named list

```spinach
pair : [q 0, q 1]
pair -> H
```

### All qubits in the circuit (`*`)

The `*` wildcard targets every qubit that has been added to the circuit so far:

```spinach
q 0 -> H
q 1 -> X
* -> M   # measures both q0 and q1
```

This is the most common way to add a global measurement at the end of a circuit.

## Inline gate pipelines

Write a pipeline directly in the action without naming it first:

```spinach
q 0 -> H  CX(q 1)
```

## Using a named pipeline

```spinach
bell_prep : H  FCX(q 1)
q 0 -> bell_prep
```

## Repeat count

Prefix the pipeline with a number to repeat the action N times:

```spinach
q 0 -> 3 X   # applies X three times (net identity for odd repeats)
q 0 -> 2 H   # applies H twice (returns to original state)
```

The repeat count sits between `->` and the pipeline, and works with multi-gate pipelines and named instructions too:

```spinach
prep : H  S
q 0 -> 4 prep   # runs H S four times
```

This also applies to classical bit operations:

```spinach
b0 : b 0
b0 -> 3 SET(1)  # redundantly sets b0 to 1 three times
```

## Reverse pipeline (`<-`)

Append `<-` after a named pipeline to traverse it in the opposite direction:

```spinach
diffuse_in : H  X

[q 0, q 1] -> diffuse_in          # forward:  H then X
[q 0, q 1] -> diffuse_in <-       # backward: X then H
```

This is the Spinach equivalent of applying the inverse (unitary adjoint) of a pipeline — essential for algorithms like Grover's diffuser.

## Full example: Grover's algorithm (2 qubits)

```spinach
# Grover's Search — target state |11⟩
diffuse_in : H  X

# Uniform superposition
[q 0, q 1] -> H

# Oracle: phase flip on |11⟩
q 0 -> CZ(q 1)

# Diffuser: inversion about the mean
[q 0, q 1] -> diffuse_in
q 0 -> CZ(q 1)
[q 0, q 1] -> diffuse_in <-

* -> M
```
