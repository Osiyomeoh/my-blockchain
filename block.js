class Block {
    constructor(timestamp, lastHash, hash, data){
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
    }
}

const block1 = new Block('01/02/2023', 'new-lastHash', 'new-hash', 'data-hash');

console.log('block1', block1);