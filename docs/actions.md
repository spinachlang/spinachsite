---
sidebar_position: 5
---
# actions
With only declarations, nothing actually happens. It's when we do actions that the circuit is created.
An action takes a qubit or a list of qubit and makes it pass in a gate pipeline.
The syntax is simple
```
qubit or list of qubit -> gate pipeline
```
Everything can be named of not.
```
my_qubit -> my_pipeline
1 -> H | CX(2)
```

We can also use "*" to execute and action on all qubit used so far.
```
* -> H
```
