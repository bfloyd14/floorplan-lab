import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

const FloorPlan = (props) => {
  
  return ( 
    <>
    <div>
    <Bath size="Half" />
    <Kitchen name="Kitchen" />
    <Bedroom bedNum={3}/>
    <LivingRoom name="LivingRoom" />
    <Bedroom bedNum={1}/>
    <Bath size="Full" />
    <Bedroom bedNum={2}/>
    </div>
    </>  
  )
}

export default FloorPlan