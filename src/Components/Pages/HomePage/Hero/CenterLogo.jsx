import Logo from "../../../../assets/logo/logo.jpg";

const CenterLogo = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"> 
      <div className="relative flex items-center justify-center"> 
        {/* Animated Rings */} 
        <div className="absolute w-40 h-40 lg:w-100 lg:h-100 border border-white/60 rounded-full animate-[spin_20s_linear_infinite]" /> 
        <div className="absolute w-32 h-32 lg:w-88 lg:h-88 border border-white/50 rounded-full animate-[spin_15s_linear_infinite_reverse]" /> 
        <div className="w-20 h-20 lg:w-60 lg:h-60 rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl flex items-center justify-center border border-white/40">
          
          <img
            src={Logo}
            alt="Logo"
            className="rounded-2xl w-full h-full object-cover"
          /> 
        </div> 
        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-orange-400/40 to-amber-300/40 blur-xl -z-10" />{" "}
      </div> 
    </div>
  );
};

export default CenterLogo;
