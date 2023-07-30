const Block = require('./block');
describe('Block', () =>{
    const timestamp = "a-date";
    const lastHash = "foo-hash";
    const hash = "bar_hash";
    const data = ["block","data"];
    const block= new Block ({timestamp, lastHash, hash, data})
    it("has a timestamp, lasthash, hash, and data ", () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });
});