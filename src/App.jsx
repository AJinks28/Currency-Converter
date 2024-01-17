/* eslint-disable no-unused-vars */
import { useState } from "react"
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";

function App() {

  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convertedAmnt,setConvertedAmnt]=useState(0);

  const currencyInfo=useCurrencyInfo(from)

  const options=Object.keys(currencyInfo)

  const swap= ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmnt(amount)
    setAmount(convertedAmnt)
  }

  const convert=()=>{
    setConvertedAmnt(amount*currencyInfo[to])
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url(https://media.istockphoto.com/id/1435226158/photo/circuit-board-background-computer-data-technology-artificial-intelligence.jpg?s=612x612&w=is&k=20&c=2PDbsoZ8HfVPQwKF5ABepPvbbQEha74KCgUPZXiidaU=)`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOption={options}
                            // onCurrencyChange={(currency)=> setAmount(amount)}
                            onAmountChange={(amount)=>setAmount(amount)}
                            selectCurrency={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-800 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmnt}
                            currencyOption={options}
                            onCurrencyChange={(currency)=> setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-800 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
)
                  }
export default App


//preventDefault() in form is used bcz whenever form is submitted it goes to some other url , so to prevent this preventDefault() is used