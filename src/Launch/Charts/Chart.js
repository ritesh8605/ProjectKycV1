import ColumnChart from "./ColumnChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

function Charts() {
  return <>
  <div style={{display:"flex",flexDirection:"row",width:"100%"}}>
              <div><ColumnChart message={"Sensational Candidates"}></ColumnChart></div>
              <div><PieChart message={"Most Liked candidates"}></PieChart></div>
              <div><LineChart message={"Most Problem Raised Candidate "}></LineChart></div>



        <div style={{padding:20}}>
        <p style={{ fontSize: 30 }}>Why KYC...</p>
            <br/>
            <br/>
            
            <p style={{ fontSize: 18 }}>How many pages does 400 words take? A word count of 400 words will result in around four-fifths of a page single spaced and and one and three-fifths of a page double spaced. Although it can vary, with a conventional page setup—Times New Roman or Arial 12 point font and default margins—400 words should be the same across most word processing software. Examples of 400 word count pages might be a curriculum vitae (CV), narrative recipe with ingredient list, or a weekly mailer.
            How many pages does 400 words take? A word count of 400 words will result in around four-fifths of a page single spaced and and one and three-fifths of a page 



        </p>
        </div>

       

        <div name="extra_info">

        </div>

  </div>



  
  
  </>
}

export default Charts;