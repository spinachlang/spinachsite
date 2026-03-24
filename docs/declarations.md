---
sidebar_position: 3
---
# Declarations

Declaring is naming — it gives a label to a qubit, a classical bit, a list of qubits, or a gate pipeline so you can reference it later.

## Comments

Lines starting with `#` are comments and are ignored by the compiler. Inline comments are supported too.

```spinach
# This is a comment
q 0 -> H  # inline comment
```

## Qubit declaration

The standard way to declare a qubit uses the `q` keyword followed by an index:

```spinach
alice : q 0
bob   : q 1
```

This maps `alice` to qubit index 0 and `bob` to qubit index 1.

You can also give a qubit a **custom register name** for clarity:

```spinach
alice : q ancilla 0
```

This maps to `Qubit("ancilla", 0)` in pytket instead of the default `Qubit("q", 0)`.

The shorthand without `q` is also valid:

```spinach
alice : 0
```

## Classical bit declaration

Declare a classical bit (used to store measurement results) with the `b` keyword:

```spinach
result : b 0
```

Custom register names are supported:

```spinach
result : b outcomes 0
```

Classical bits are essential for [conditional actions](conditionals.md) and [classical bit operations](classical-bits.md).

## Qubit reference without a name (`q N`)

You can refer to a qubit by its index directly in actions, lists, and gate arguments using the `q` prefix — no declaration needed:

```spinach
q 0 -> H
q 0 -> CX(q 1)
```

This is identical to declaring `alice : q 0` and then writing `alice -> H` or `alice -> CX(bob)`.

## Qubit list declaration

Group qubits together under one name:

```spinach
pair : [alice, bob]
```

Mix named qubits with direct indices:

```spinach
all3 : [alice, q 1, q 2]
```

Once declared, the list acts as a multi-qubit target in actions:

```spinach
pair -> H   # applies H to both alice and bob
```

## Gate pipeline declaration

A pipeline is a named sequence of gates that can be applied to a qubit and also traversed in reverse:

```spinach
bell_prep : H  FCX(q 1)
```

Pipelines can reference named qubits as gate arguments:

```spinach
alice    : q 0
bob      : q 1
entangle : H | FCX(bob)
```

Pipelines can also reference other pipelines by name:

```spinach
diffuse_in : H | X
```

When used in an action, write `diffuse_in <-` to traverse it in reverse.

## Using declared objects together

### Named qubit in a gate argument

```spinach
alice : q 0
bob   : q 1

alice -> CX(bob)
```

### Named qubit in an action

```spinach
alice -> bell_prep
```

### Named qubit added to a list

```spinach
alice : q 0
group : [alice, q 1, q 2]
```

### Named pipeline inside another pipeline

```spinach
prep   : H | S
expand : prep | X | prep <-
```
