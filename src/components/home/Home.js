import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/Actions'
import Hero from '../hero/Hero';
import { data } from '../../utils/data';

const Home = () => {

	const dispatch = useDispatch()
  const {products} = useSelector(s => s)

  useEffect(() => {
    dispatch(getProducts(data))
	},[])

	return (
		<div>
			<Hero/>
			<div>
       {products}
			</div>
		</div>
	)
}

export default Home;