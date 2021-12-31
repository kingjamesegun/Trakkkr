import React from 'react'

function Faq() {
    return (
        <div className='faq flex flex-col container'>
            <p className='text-blue-500 px-5 md:mx-auto font-semibold'>Have any questions?</p>
            <div className='grid grid-cols-1 md:grid-cols-2 p-5'>
                <div className='md:p-3'>
                    <h3 className='text-xl  tracking-wide'>
                        Is the platform free?
                    </h3>
                    <p className='text-gray-400'>Yes, the platform is free.  </p>
                </div>
                <div className='md:p-3'>
                    <h3 className='text-xl  tracking-wide'>
                        What good is it for?
                    </h3>
                    <p className='text-gray-400'>
                        You probably have wanted to get a product from Jumia, but it's overpriced. You can set a price you want us to help you track.  </p>
                </div>
                <div className='md:p-3'>
                    <h3 className='text-xl  tracking-wide'>
                        How do I track a product on Jumia?
                    </h3>
                    <p className='text-gray-400'>
                        Copy the URL of the prouct from Jumia. Then paste it in the track field. Also enter the desired price to be tracked.
                         </p>
                </div>
                <div className='md:p-3'>
                    <h3 className='text-xl  tracking-wide'>
                        How do I get notified?
                    </h3>
                    <p className='text-gray-400'>
                        A notification will be sent to the email you registered with. 
                         </p>
                </div>
            </div>
            
        </div>
    )
}

export default Faq
