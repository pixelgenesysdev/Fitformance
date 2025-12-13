import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Searchfeild() {
  return (
    <div className="my-5 flex items-center relative">
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg py-3 px-4 text-xl focus:outline-none focus:border-[#0AB4FF]"
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#0AB4FF] ml-2 absolute cursor-pointer text-2xl" style={{top:'50%',right:'20px',transform:'translateY(-50%)'}}/>
    </div>
  );
}

export default Searchfeild;
