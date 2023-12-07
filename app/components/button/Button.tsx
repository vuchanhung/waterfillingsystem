
import { useRouter } from "next/navigation"
const Button = () => {
    const router = useRouter()

    const hanndleTransfer = (e:any) =>{
        router.push('/outputForm/outputForm')
    }
  return (
    <button 
        type="submit" 
        className="
              text-white 
              bg-blue-700 
              hover:bg-blue-800 
                focus:ring-4 
                focus:outline-none 
              focus:ring-blue-300 
                font-medium 
                rounded-lg 
                text-sm 
                w-full 
                sm:w-auto 
                px-5 
                py-2.5 
                text-center
                transition 
                duration-300 
                ease-in-out 
              dark:bg-blue-600 
              dark:hover:bg-blue-700
              dark:focus:ring-blue-800"
        onClick={hanndleTransfer}>
        Submit
    </button>
  )
}

export default Button
