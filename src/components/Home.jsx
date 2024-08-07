import React, { useState } from 'react'

const Home = () => {
    const [count, setCount] = useState(0)

    const handleIncrease = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {
        setCount(count - 1)
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <div>
            <h1 className='font-semibold text-slate-50 text-4xl mb-12' >Counter App</h1>
            <div className='bg-slate-800 p-9 rounded text-red-600 text-xl text-center' >
                <p className='text-2xl mb-6' >Count : {count} </p>
                <div >
                    <button className='btn1'
                        onClick={handleIncrease}
                        disabled={count > 4 ? true : false} >+</button>
                    <button className='btn2' onClick={handleDecrease}
                        disabled={count < -4 ? true : false}  >-</button>
                    <button className='btn3' onClick={handleReset} >0</button>
                </div>
            </div>
        </div>
    )
}

export default Home