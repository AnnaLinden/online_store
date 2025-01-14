import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
function Cart() {
    return 
    <div>
    <h1 className='text-4xl'>Cart Page</h1>;
    <Link to='/' className="text-7xl text-red-900">
        Back Home
    </Link> 
    <Button asChild size="lg">
        <Link to='/'>Home Button</Link>
    </Button>
    </div>
  };
  export default Cart;