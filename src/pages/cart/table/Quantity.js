import React from 'react'
import { useDispatch } from 'react-redux';
import { DecIcon } from "../../../assets/icons/Icons";
import { IncIcon } from "../../../assets/icons/Icons";
import { incCartItem } from "./../../../redux/actions/Actions";
import { decCartItem } from "./../../../redux/actions/Actions";

const Quantity = ({item}) => {
	const dispatch = useDispatch();
	return (
		<div className="flex items-center">
          <div className="flex items-center">
            <button
              className="ml-auto  bg-white text-gray-400 hover:text-gray-900 rounded-sm  p-1 hover:bg-gray-100 inline-flex dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-warning"
              ariaLabel="Close"
            >
              <IncIcon />
            </button>
            <span className="text-[20px] mx-6">{item.quantity}</span>
            <button
              onClick={() => dispatch(incCartItem(item))}
              className="ml-auto bg-white text-gray-400 hover:text-gray-900 rounded-sm  p-1 hover:bg-gray-100 inline-flex dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-warning"
              ariaLabel="Close"
            >
              <DecIcon />
            </button>
          </div>
        </div>
	)
}

export default Quantity