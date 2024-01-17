/* eslint-disable react/prop-types */


function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption=[],
  selectCurrency="usd",
  amountDisable=false,
  currencyDisable=false,
  
  className = "",
}) {
 

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
          <div className="w-1/2">
              <label  className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled={amountDisable}
                  value={amount}
                  onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency}
                  onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                  disabled={currencyDisable}
              >
                  
                     {currencyOption.map((currency)=>(
                      <option key={currency} value={currency}>
                          {currency}
                      </option>
                     ))}
              
              </select>
          </div>
      </div>
  );
}

export default InputBox;


//line 31:  onChange={(e)=> onAmountChange && onAmountChange():
// here we are checking if function is available or NOT by passing 'onAmountChange' and after using && we are running onAmountChange()

//whenever we use loops in jsx, remeber to use key for improving performance