# Technical Document: Creating a Simple Blockchain in Python

## Overview

Today, we developed a simple blockchain implementation using Python. The objective was to simulate a minimalistic blockchain system and introduce the concept of a consensus mechanism via Proof of Work (PoW).

## Table of Contents

- [Introduction](#introduction)
- [Implementation](#implementation)
    - [Block Class](#block-class)
    - [Blockchain Class](#blockchain-class)
    - [Mining Algorithm](#mining-algorithm)
    - [Time Measurement](#time-measurement)
- [Troubleshooting and Debugging](#troubleshooting-and-debugging)
- [Conclusion](#conclusion)

## Introduction

Blockchain is a distributed ledger technology that allows multiple parties to have simultaneous access to a constantly updated digital ledger that is secure and immutable. The most common consensus mechanism used to secure the network and validate transactions is called "Proof of Work".

## Implementation

### Block Class

We started by creating a `Block` class to encapsulate the properties and behaviors of a single block in the blockchain. A block has the following properties:

- `index`: Position of the block in the chain.
- `timestamp`: Time the block was created.
- `data`: Information contained in the block.
- `previous_hash`: Hash of the previous block.
- `hash`: Hash of the current block.
- `nonce`: A nonce used for the Proof of Work mechanism.

Here's how the `Block` class was implemented:

```python
import hashlib
import json

class Block:
    def __init__(self, index, timestamp, data, previous_hash):
        self.nonce = 0
        self.index = index
        self.timestamp = timestamp
        self.data = data
        self.previous_hash = previous_hash
        self.hash = self.calculate_hash()
        
    def calculate_hash(self):
        block_string = json.dumps({
            "index": self.index,
            "timestamp": self.timestamp,
            "data": self.data,
            "previous_hash": self.previous_hash,
            "nonce": self.nonce
        }, sort_keys=True).encode()
        return hashlib.sha256(block_string).hexdigest()
```

### Blockchain Class

The `Blockchain` class manages a list of blocks. The first block is a "Genesis Block," a special block that is hardcoded and always the first in any blockchain.

Methods include:

- `create_genesis_block()`: Creates the first block of the chain.
- `add_block()`: Adds a new block to the chain.
- `mine_block()`: Mining operation based on Proof of Work.

### Mining Algorithm

To simulate a basic consensus mechanism, we implemented a simple PoW algorithm. A new block's hash must start with a specific number of leading zeros to be considered valid. The difficulty level, represented by the number of leading zeros, can be adjusted. The nonce is incremented until a valid hash is found.

```python
def mine_block(self, block, difficulty):
    prefix = "0"*difficulty
    while not block.hash.startswith(prefix):
        block.nonce += 1
        block.hash = block.calculate_hash()
        print("Block mined: ", block.hash)
```

### Time Measurement

To measure how long each block takes to be mined, we incorporated Python's `time` module. The time taken to mine each block is calculated and printed.

## Troubleshooting and Debugging

- We encountered an issue where the same hash was being printed repeatedly. This was fixed by including the `nonce` in the hash calculation.
  
- We also ran into errors related to the `time` module, which were fixed by specifying `time.time()` instead of `time()`.

## Conclusion

This project is a simplified model and should be seen as an educational example. The mining algorithm and data structures are basic and do not cover many other essential aspects of a real-world blockchain, like distributed consensus, transaction validation, etc.

Nevertheless, this basic example successfully demonstrates the core components of a blockchain and how a Proof of Work consensus mechanism can be implemented.