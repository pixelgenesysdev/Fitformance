import Toptitle from '../layouts/top_title'
import clientlibrary from "../../assets/images/dashboardimages/dashboardimage1.png";

function viewprotocol() {
  return (
<>

<Toptitle title="View Protocol" />

<img src={clientlibrary} className='max-w-[500px] w-full mt-10' alt="" />



</>
  )
}

export default viewprotocol
