---
sidebar_position: 3
---
# declarations

Declaring is naming.

Here are all the possible declarations:
## qubit:
```
steve : 1
```
This means the qubit number one is now called steve.

## qubit list:
```
steven : [2, 3]
```
This means the qubit 2 and 3 are refered as steven

## gatepipeline:
```
tom : H | Z | Y
```
This means that tom reffers to this pipeline with the gate H, Z and Y

## usage of declared objects
### A declared qubit can be used as a input to a gate:
```
tam : H | CNOT(steve)
```
### A declared qubit can be used in in an action:
```
steve -> tom
```
This makes steve passe all the gates of tom
### A declared list can be used in an action:
```
steven -> tom
```
This makes all the qubits of staven passe all the gates of tom

### A declared qubit can be used in a list
```

steventwo : [steve, 4]
```

### A declared gate pipeline can be used in an other gate pipeline
```
tomtam -> tom | H | tom
```

