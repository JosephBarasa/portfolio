const Checkmate = () => {
    return ( 
        // 1. Apply 'flex' to the parent div containing the heading and the image group
        <div className="flex flex-col md:flex-row p-4"> 
            
            {/* Image Group (Left Side) */}
            <div className="flex-shrink-0 mr-6 mb-4 md:mb-0">
                <img 
                    src={'/art/checkmate1.png'} 
                    alt="checkmate"
                    // Added 'rounded-lg' for a nicer look and kept size
                    className="w-80 h-80 rounded-lg object-cover" 
                />
            </div>

            {/* Content Group (Right Side) */}
            <div>
                <h1 className="text-3xl font-light mb-4">Mic Cheque Pod</h1>
                
                {/* Add any other text or content here */}
                <p className="text-lg md:text-xl font-light text-gray-800 leading-relaxed text-center md:text-left">
                    {`A contemporary painting of the Mic Cheque Podcast's crew.`}
                </p>

                <p className="text-sm text-gray-600 mb-2 font-bold italic">
                    Check details in the visual arts catalogue section.
                </p>
            </div>
        </div>
    );
}
 
export default Checkmate;