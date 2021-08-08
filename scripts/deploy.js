async function main() {
  // We get the contract to deploy
  const UserCrud = await ethers.getContractFactory("UserCrud");
  const userCrud = await UserCrud.deploy();

  console.log("Greeter deployed to:", userCrud.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
