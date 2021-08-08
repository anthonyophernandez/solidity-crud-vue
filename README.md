# solidity-crud-vue

## Description

The goal of this project was to **learn how to perform CRUD operations in Solidity** and to **learn how to implement a simple notification system** with Vue.
The smart contracts are based on the work of [Rob Hitchens](https://medium.com/@robhitchens):

- [Solidity CRUD- Part 1](https://medium.com/robhitchens/solidity-crud-part-1-824ffa69509a)
- [Solidity CRUD- Part 2](https://medium.com/robhitchens/solidity-crud-part-2-ed8d8b4f74ec)
- [Code](https://bitbucket.org/rhitchens2/soliditycrud/src/master/contracts/)

And they're in `Solidity ^0.8.6.`

## Rob Hitchens Code Observations

### Context

In [Solidity CRUD- Part 1](https://medium.com/robhitchens/solidity-crud-part-1-824ffa69509a), Rob Hitches defines a `Struct` `userStruct` which stores some user details and an `index`. This `index` points to `the position of the user` in the dynamic array `userIndex`. And this dynamic array stores the keys that we currently have.
In [Solidity CRUD- Part 2](https://medium.com/robhitchens/solidity-crud-part-2-ed8d8b4f74ec), Rob Hitches implements the `deleteUser(userAddress)` function.

### Error

When you delete the last user and want to re-insert it, you will get an error, the common `IndexOutOfRangeException`, but in Solidity.

### Solution

The origin of this `IndexOutOfRangeException` is in the function `isUser(userAddress)`. And the solution is as simple as adding the following check: `userIndex.length <= userStructs[userAddress].index`

## Testing

```
// install dependencies
npm install
// run hardhat local blockchain
npx hardhat node
// deploy smart contract to hardhat local blockchain
npx hardhat run scripts/deploy.js --network localhost
// run in dev mode on port 3000
npm run dev
```

Make sure to set up Hardhat (Chain ID: 31337) in MetaMask. And import at least one account from those provided by `npx hardhat node`.
When you're done, don't forget to reset the imported account, or you'll get a `Nonce too high. Nonce was expected to be 0, but got X` next time you use it.
