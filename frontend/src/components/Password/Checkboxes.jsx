

const Checkboxes = () => {
    return (
        <div className="flex gap-10 mt-5">
        <div  className='flex items-center space-x-1'>
          <input
            type="checkbox"
          
            // checked={checkbox.state}
            className=" h-5 w-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
          />
          <label className="text-sm text-black-400">Uppercase</label>
        </div>
        <div  className='flex items-center space-x-1'>
          <input
            type="checkbox"
          
            // checked={checkbox.state}
            className=" h-5 w-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
          />
          <label className="text-sm text-black-400">Lowercase</label>
        </div>
        <div  className='flex items-center space-x-1'>
          <input
            type="checkbox"
          
            // checked={checkbox.state}
            className=" h-5 w-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
          />
          <label className="text-sm text-black-400">Numbers</label>
        </div>
        <div  className='flex items-center space-x-1'>
          <input
            type="checkbox"
          
            // checked={checkbox.state}
            className=" h-5 w-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
          />
          <label className="text-sm text-black-400">Symbols</label>
        </div>
        </div>
      );
}

export default Checkboxes