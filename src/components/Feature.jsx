import React from 'react'

function Feature() {
    return (
        <>
            

            <div id="feature" class="flex items-center justify-center m-5">

                <div class="w-full max-w-sm p-4 bg-white rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Starting From</h5>
                    <div class="flex items-baseline text-gray-900 dark:text-white">
                        {/* <span class="text-4xl font-semibold">₹</span> */}
                        <span class="text-5xl font-extrabold tracking-tight">₹ 1000</span>
                        {/* <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">Starting From</span> */}
                    </div>
                    {/* <!-- List --> */}
                    <ul role="list" class="space-y-5 my-7">
                        <li class="flex space-x-3">
                            {/* <!-- Icon --> */}
                            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Free Project Source Code</span>
                        </li>
                        <li class="flex space-x-3">
                            {/* <!-- Icon --> */}
                            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Free Hosting</span>
                        </li>
                        <li class="flex space-x-3">
                            {/* <!-- Icon --> */}
                            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Free Domain</span>
                        </li>
                        <li class="flex space-x-3">
                            {/* <!-- Icon --> */}
                            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Malayalam Explanation Video </span>
                        </li>
                        <li class="flex space-x-3">
                            {/* <!-- Icon --> */}
                            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Free Support For 6 Month</span>
                        </li>
                        <li class="flex space-x-3">
                            {/* <!-- Icon --> */}
                            <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Customisable for your need</span>
                        </li>
                        {/* <li class="flex space-x-3 line-through decoration-gray-500">
                                <!-- Icon -->
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="text-base font-normal leading-tight text-gray-500">Malayalam Explanation Video</span>
                                </li> */}
                    </ul>
                    <a href='https://wa.me/message/5XWWJKY6UH5EG1' class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-green-600 text-gray-50">Book Project Now</a>
                </div>
            </div>

        </>
    )
}

export default Feature