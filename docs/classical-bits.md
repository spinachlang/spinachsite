---
sidebar_position: 7
---
# Classical Bit Operations

Spinach lets you manipulate classical bits directly using logical operations. This is useful for post-processing measurement results inside the circuit itself — for example, combining two measured bits before using the result in a conditional gate.

All classical operations require classical bits declared with `b`.

## Declaring classical bits

```spinach
b0 : b 0
b1 : b 1
b2 : b 2
```

## SET — assign a constant

Force a classical bit to a fixed value:

```spinach
b0 -> SET(0)   # force b0 = 0
b0 -> SET(1)   # force b0 = 1
```

## NOT — invert a bit

```spinach
b1 -> NOT        # b1 = NOT b1  (in-place)
b1 -> NOT(b0)    # b1 = NOT b0
```

## COPY — copy one bit to another

```spinach
b1 -> COPY(b0)   # b1 = b0
```

## AND, OR, XOR — binary logic

```spinach
b2 -> AND(b0, b1)   # b2 = b0 AND b1
b2 -> OR(b0, b1)    # b2 = b0 OR b1
b2 -> XOR(b0, b1)   # b2 = b0 XOR b1
```

## Combining quantum and classical operations

Classical bit operations can appear anywhere in a program and mix freely with quantum gates:

```spinach
q0 : q 0
q1 : q 1
b0 : b 0
b1 : b 1
bout : b 2

q0 -> H
q0 -> M          # result → b0
q1 -> M          # result → b1
bout -> AND(b0, b1)   # bout = 1 only if both measured 1
```

## Using bit results in conditional actions

Classical bit operations pair naturally with [conditional actions](conditionals.md):

```spinach
b0     : b 0
b1     : b 1
bparity : b 2
q2     : q 2

bparity -> XOR(b0, b1)   # compute parity of two bits
q2 -> Z if bparity        # flip phase only if parity is odd
```

## Repeat count

Like any action, classical bit operations support a repeat count:

```spinach
b0 : b 0
b0 -> 3 NOT   # NOT three times = net identity (still 0)
```

## Reference

| Operation      | Syntax                  | Effect                       |
|----------------|-------------------------|------------------------------|
| SET            | `b -> SET(0)` or `SET(1)` | Assign constant value        |
| NOT (in-place) | `b -> NOT`              | `b = NOT b`                  |
| NOT (copy)     | `b -> NOT(src)`         | `b = NOT src`                |
| COPY           | `b -> COPY(src)`        | `b = src`                    |
| AND            | `b -> AND(b0, b1)`      | `b = b0 AND b1`              |
| OR             | `b -> OR(b0, b1)`       | `b = b0 OR b1`               |
| XOR            | `b -> XOR(b0, b1)`      | `b = b0 XOR b1`              |

