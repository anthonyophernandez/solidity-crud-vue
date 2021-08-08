import { store } from "../store/index.js";
import { ethers } from "ethers";
import UserCrud from "../../artifacts/contracts/UserCrud.sol/UserCrud.json";

const userCrudAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const userCrud = {
  insertUser: async (address, email, age) => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        userCrudAddress,
        UserCrud.abi,
        signer
      );
      email = ethers.utils.formatBytes32String(email);
      try {
        const tx = await contract.insertUser(address, email, age);
        tx.wait().then((txReceipt) => {
          store.dispatch("addNotification", {
            type: "success",
            message: "LogNewUser",
          });
        });
      } catch (err) {
        console.error(err);
        store.dispatch("addNotification", {
          type: "error",
          message: "ErrorLogNewUser",
        });
      }
    }
  },
  deleteUser: async (address) => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        userCrudAddress,
        UserCrud.abi,
        signer
      );
      try {
        const tx = await contract.deleteUser(address);
        tx.wait().then((txReceipt) => {
          store.dispatch("addNotification", {
            type: "success",
            message: "LogDeleteUser",
          });
        });
      } catch (err) {
        console.error(err);
        store.dispatch("addNotification", {
          type: "error",
          message: "ErrorLogDeleteUser",
        });
      }
    }
  },
  updateUserEmail: async (address, email) => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        userCrudAddress,
        UserCrud.abi,
        signer
      );
      email = ethers.utils.formatBytes32String(email);
      try {
        const tx = await contract.updateUserEmail(address, email);
        tx.wait().then((txReceipt) => {
          store.dispatch("addNotification", {
            type: "success",
            message: "LogUpdateUser",
          });
        });
      } catch (err) {
        console.error(err);
        store.dispatch("addNotification", {
          type: "error",
          message: "ErrorLogUpdateUser",
        });
      }
    }
  },
  updateUserAge: async (address, age) => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        userCrudAddress,
        UserCrud.abi,
        signer
      );
      try {
        const tx = await contract.updateUserAge(address, age);
        tx.wait().then((txReceipt) => {
          store.dispatch("addNotification", {
            type: "success",
            message: "LogUpdateUser",
          });
        });
      } catch (err) {
        console.error(err);
        store.dispatch("addNotification", {
          type: "error",
          message: "ErrorLogUpdateUser",
        });
      }
    }
  },
  getUserCount: async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        userCrudAddress,
        UserCrud.abi,
        provider
      );
      const userCount = (await contract.getUserCount()).toNumber();
      return userCount;
    }
  },
  getUserAtIndex: async (index) => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        userCrudAddress,
        UserCrud.abi,
        provider
      );
      const address = await contract.getUserAtIndex(index);
      return address;
    }
  },
  getUser: async (address) => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        userCrudAddress,
        UserCrud.abi,
        provider
      );
      const [email, age, index] = await contract.getUser(address);
      const user = {
        id: index.toNumber(),
        address: address,
        email: ethers.utils.parseBytes32String(email),
        age: age.toNumber(),
      };
      return user;
    }
  },
};
