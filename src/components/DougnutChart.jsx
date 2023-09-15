import React from 'react'
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js'
import { Doughnut } from "react-chartjs-2";


ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,

)

const DougnutChart = () => {
const data = {
  labels:['Loc. 1', 'Loc. 2', 'Loc. 3', 'Loc. 4', 'Loc. 5'], 
  datasets: [{
    label: 'Poll', 
    data: [3,5,4,7,9],
    backgroundColor:['#65451F','#765827','#C8AE7D','#EAC696', '#F2EAD3'], 
    borderColor:['#65451F','#765827','#C8AE7D','#EAC696', '#F2EAD3']
  }]
}

const options = {}

  return (
    <div className="w-[300px] h-[300px] mx-20 mt-5">
      <Doughnut data={data} options={options}>

      </Doughnut>
    </div>
  )
}

export default DougnutChart