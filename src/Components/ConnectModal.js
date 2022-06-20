import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useNetwork } from "../hooks/useNetwork";
import { connectors } from "../utils/connectors";
export const ConnectModal = (props) => {
  const [showModal, setShowModal] = React.useState(true);
  const { switchNetwork } = useNetwork();
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Connect Wallet
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 px-10 rounded-t">
                  <div>
                    <h3 className="text-2xl font-bold text-left mb-3">
                      Connect your wallet
                    </h3>
                    <p className="text-[#63666a]">
                      Select what network and wallet your want to connect below
                    </p>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-[20%] float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black">
                      <IoMdClose color="#000" size={24} />
                    </span>
                  </button>
                </div>
                {/* Choose Network */}
                <div className="flex items-start justify-between p-2 px-10 rounded-t">
                  <div>
                    <h3 className="text-2xl font-bold text-left mb-2">
                      Choose your Network
                    </h3>
                  </div>
                </div>
                <div className="relative p-6 flex gap-3 justify-around ">
                  <div
                    onClick={() => switchNetwork(Number(97))}
                    className="hover:border-slate-400  hover:ease-in hover:duration-300 cursor-pointer border flex-1 jsutify-between text-xl items-center p-5  rounded-md mb-2  font-semibold flex gap-4"
                  >
                    <div>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Binance_Logo.svg"
                        width={"28px"}
                        alt="metamask_logo"
                      />
                    </div>
                    <div>Binance</div>
                  </div>
                  <div
                    onClick={() => switchNetwork(1)}
                    className="hover:border-slate-400  hover:ease-in hover:duration-300 cursor-pointer border flex-1  jsutify-between text-xl items-center p-5 rounded-md mb-2  font-semibold flex gap-4"
                  >
                    <div>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg"
                        width={"25px"}
                        alt="Coinbase_logo"
                      />
                    </div>
                    <div>Ethereum</div>
                  </div>{" "}
                </div>
                {/* Choose Wallet */}
                <div className="flex items-start justify-between p-2 px-10 rounded-t">
                  <div>
                    <h3 className="text-2xl font-bold text-left mb-3">
                      Choose your Wallet
                    </h3>
                  </div>
                </div>

                <div className="relative p-6 flex-col justify-between ">
                  <div
                    onClick={() => props.login(connectors.injected)}
                    className="cursor-pointer hover:border-slate-400  hover:ease-in hover:duration-300 border text-xl items-center p-5 pl-10 rounded-md mb-2  font-semibold flex gap-4"
                  >
                    <div>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                        width={"28px"}
                        alt="metamask_logo"
                      />
                    </div>
                    <div> Metamask</div>
                  </div>
                  <div
                    onClick={() => props.login(connectors.coinbaseWallet)}
                    className="cursor-pointer hover:border-slate-400  hover:ease-in hover:duration-300 border text-xl items-center p-5 pl-10 rounded-md mb-2  font-semibold flex gap-4"
                  >
                    <div>
                      <img
                        src="https://avatars.githubusercontent.com/u/18060234"
                        width={"28px"}
                        alt="Coinbase_logo"
                      />
                    </div>
                    <div> Coinbase Wallet</div>
                  </div>{" "}
                  <div
                    onClick={() => props.login(connectors.walletConnect)}
                    className="cursor-pointer hover:border-slate-400  hover:ease-in hover:duration-300 border text-xl items-center p-5 pl-10 rounded-md mb-2  font-semibold flex gap-4"
                  >
                    <div>
                      <img
                        src="https://logosarchive.com/wp-content/uploads/2022/02/WalletConnect-icon.svg"
                        width={"28px"}
                        alt="Wallet_logo"
                      />
                    </div>
                    <div> Wallet Connect</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" fixed inset-0 z-40 bg-[#f0f2f4]"></div>
        </>
      ) : null}
    </>
  );
};
