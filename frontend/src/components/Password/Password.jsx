/* eslint-disable react/prop-types */
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

const Password = ({password}) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
      const text = document.getElementById('npm-install-copy-text').value;
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    };
  
    return (
        <div className="flex items-center justify-center">
        <div className="w-full max-w-[36rem]">
          <div className="relative">
            <label htmlFor="npm-install-copy-text" className="sr-only">Label</label>
            <input 
              id="npm-install-copy-text" 
              type="text" 
              className="col-span-6 text-black bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              value={password} 
              disabled 
            
            />
            
            <div className="flex space-x-2 absolute right-2.5 top-1/2 transform -translate-y-1/2">
              <button 
                onClick={copyToClipboard} 
                className="text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border"
              >
                <span id="default-message" className={`inline-flex items-center ${copied ? 'hidden' : ''}`}>
                  <svg className="w-3 h-3 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                  </svg>
                  <span className="text-xs font-semibold">Copy</span>
                </span>
                <span id="success-message" className={`inline-flex items-center ${copied ? '' : 'hidden'}`}>
                  <svg className="w-3 h-3 text-blue-700 dark:text-blue-500 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917L5.724 10.5 15 1.5"/>
                  </svg>
                  <span className="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>
                </span>
              </button>
              <button 
                
                className="text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border"
              >
                 <FontAwesomeIcon className='cursor-pointer'  icon={faRefresh} />
              </button>
            </div>
          
          </div>
          {/* <input type="range" min="4" max="50" value={length} readOnly  className='col-span-6 w-full -mt-1 h-2'/> */}
        </div>
      </div>
    );
}

export default Password