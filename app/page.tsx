import Navbar from "./components/Navbar/Navbar"
import FillingSystemForm from "./components/inputForm/FillingSystemForm"
export default function Home() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="
        justify-center
        min-h-full
        py-12
        sm:px-6
        lg:px-8">
        <FillingSystemForm/>
      </div>
    </div>
    
  )
}
