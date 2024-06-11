import React from 'react'
import "./OverView.css"

const OverView = () => {
  return (
    <div className="header mt-96 bg-black border border-gray-800 relative p-4 md:flex justify-center">
    <div>
      {/* left section */}
      <h1 className="text-center text-2xl">
        Our Fream is Your Satisfaction
      </h1>
      <p className="text-center text-lg">
        Save Money, Without Thinking About It
      </p>
      <div id="stats">
        <div className="mx-auto">
          <dl className="grid grid-cols-1 sm:grid-cols-3 m-5 text-center">
           
            <div className="mx-auto flex flex-col">
              <dt className="text-base leading-7 text-gray-600">Clients</dt>
              <dd className="order-first text-xl md:text-3xl font-semibold tracking-tight">
                <span className="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-transactions)] before:content-[counter(num)] flex justify-center">
                  {" "}
                  <span className="sr-only">44</span>+
                </span>
              </dd>
            </div>


            <div className="mx-auto flex flex-col">
              <dt className="text-base leading-7 text-gray-600">
                Successfull projects
              </dt>
              <dd className="order-first text-xl md:text-3xl font-semibold tracking-tight">
                <span className="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-assets)] before:content-[counter(num)] flex justify-center">
                
                  <span className="sr-only">11</span>+{" "}
                </span>
              </dd>
            </div>


            <div className="mx-auto flex flex-col">
              <dt className="text-base leading-7 text-gray-600">
                Countries
              </dt>
              <dd className="order-first text-xl md:text-3xl font-semibold tracking-tight">
                <span className="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-users)] before:content-[counter(num)] before:left-[calc(0.4em * var(--n, 1))] flex justify-center">
                  <span className="sr-only">46</span>+
                </span>
              </dd>
            </div>

            
          </dl>
        </div>
      </div>
    </div>
    <div className='md:w-1/2'>
      {/* right section */}
      <div className="w-full flex flex-col gap-2 p-2">
       <span className="flex justify-between"><p>Digital Marketing</p><p>95%</p></span>
       <div className="bg-blue-400 h-2.5 rounded-full my-1" style={{width:'95%'}} ></div>

       <span className="flex justify-between"><p>Digital Marketing</p><p>95%</p></span>
       <div className="bg-blue-400 h-2.5 rounded-full my-1" style={{width:'96%'}} ></div>

       <span className="flex justify-between"><p>Digital Marketing</p><p>98%</p></span>
       <div className="bg-blue-400 h-2.5 rounded-full my-1" style={{width:'98%'}} ></div>

       <span className="flex justify-between"><p>Digital Marketing</p><p>96%</p></span>
       <div className="bg-blue-400 h-2.5 rounded-full my-1" style={{width:'96%'}} ></div>

      </div>
    </div>
    <div>

    </div>
  </div>
  )
}

export default OverView
