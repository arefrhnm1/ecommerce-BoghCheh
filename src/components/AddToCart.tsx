'use client'
import React, { useContext } from 'react'
import { useShoppingCartContext } from '../context/ShoppingCartContext'

export default function AddToCart() {


    const {cartItems} = useShoppingCartContext()

  return (
    <div className='w-fit flex gap-5'>
        <button className='bg-green-200 px-4 py-2 rounded-xl'>+</button>
        <span className='px-4 py-2'>3</span>
        <button className='bg-rose-200 px-4 py-2 rounded-xl'>-</button>
    </div>
  )
}
