const Loader = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        
        {/* Text */}
        <p className="text-lg font-semibold text-gray-700">Talent Pool Resources International</p>
      </div>
    );
  };
  
  export default Loader;