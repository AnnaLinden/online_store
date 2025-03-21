import { Link } from "react-router-dom";
import { Dumbbell } from "lucide-react";

function Logo() {
  return (
    <Link
      to='/'
      className='hidden lg:flex justify-center items-center bg-primary p-2 rounded-lg text-w>
   text-white'
    >
      <Dumbbell className='w-8 h-8' />
    </Link>
  );
}

export default Logo;
