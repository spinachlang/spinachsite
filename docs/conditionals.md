---
sidebar_position: 6
---
# Conditional Actions

Spinach supports classically conditioned quantum operations. After measuring a qubit into a classical bit, you can apply gates conditionally on that measured value — without leaving the `.sph` file.

## Declaring a classical bit

Before using a condition you must declare the classical bit that holds the measurement result:

```spinach
b0 : b 0
```

## `if` — apply when bit is 1

```spinach
target -> gate if bit_name
```

The gate is applied only when `bit_name` holds the value `1`.

```spinach
q0 : q 0
b0 : b 0

q0 -> M        # measure into b0
q0 -> X if b0  # flip q0 back only if the measurement was 1
```

## `if / else` — branch on both outcomes

```spinach
target -> gate_a if bit_name else gate_b
```

`gate_a` runs when the bit is `1`; `gate_b` runs when it is `0`.

```spinach
q0 : q 0
b0 : b 0

q0 -> M
q0 -> X if b0 else Z   # X on |1⟩ result, Z on |0⟩ result
```

## Multi-gate branches

Wrap multiple gates in parentheses when a branch contains more than one gate:

```spinach
q0 -> (H  X) if b0
q0 -> (H  X) if b0 else (Z  S)
```

## Named instructions in conditions

Named pipelines work in conditional branches too:

```spinach
q0   : q 0
b0   : b 0
flip : X  Z

q0 -> M
q0 -> flip if b0   # applies X then Z when b0 = 1
```

## Quantum teleportation — classical feedforward

Classical feedforward (applying corrections based on measurement results) is a core pattern in quantum teleportation and error correction:

```spinach
# Quantum Teleportation
msg   : q 0
alice : q 1
bob   : q 2
bmsg  : b 0
balic : b 1

# Share a Bell pair between alice and bob
alice -> H  FCX(q 2)

# Bell measurement on msg and alice
msg   -> FCX(q 1)  H
[msg, alice] -> M

# Classical feedforward: bob applies corrections
bob -> X if balic
bob -> Z if bmsg
```

## Notes

- The condition bit must be declared with `b` before it is used in `if`.
- Conditional actions compile to pytket `Conditional` operations and are fully supported in JSON output. QASM 2.0 export only supports conditions on the full classical register (not individual bits); use `spinachlang -l json` for full fidelity.
- The `*` wildcard is supported as a target for conditional actions.
