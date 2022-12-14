import React from "react";
import Graph from "./graph";
import ProgressBar from "./progressBar";
import ApexChart from "./area.jsx";

const Cards = () => {    
    return (
        <div className="container">
            <div className="card_container">
                <div className="inner_card">
                    <div>
                        <h2 className="heading">No of files</h2>
                        <div className="center_div">
                            <div>
                                <ProgressBar />
                            </div>
                            <div>
                                <button className="btn"> <button style={{backgroundColor:'#5494a3',height:'10px',width:'10px',border:'2px solid #5494a3'}}></button> UPLOAD FILES</button>
                                <br />
                                <br />
                                <button className="btn"><button style={{backgroundColor:'silver',height:'10px',width:'10px',border:'2px solid silver'}}></button> TOTAL FILES</button>
                                <div className="percentage_div">
                                    <h4 className="percentage">77.8%</h4>
                                    <span style={{ fontSize: '24px' }} className="fa">&#xf0d8;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inner_card">
                    <div>
                        <h2 className="heading">No of Insights</h2>
                        <div className="center_div">
                            <div>
                                <ProgressBar />
                            </div>
                            <div>
                                <button className="btn"><button style={{backgroundColor:'#5494a3',height:'10px',width:'10px',border:'2px solid #5494a3'}}></button> INSIGHTS</button>
                                <br />
                                <br />
                                <button className="btn"><button style={{backgroundColor:'silver',height:'10px',width:'10px',border:'2px solid silver'}}></button>ARTIFACTS</button>
                                <div className="percentage_div">
                                    <h4 className="percentage">77.8%</h4>
                                    <span style={{ fontSize: '24px' }} className="fa">&#xf0d8;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inner_card">
                    <div>
                        <h2 className="heading">TIME SAVED</h2>
                        <div className="center_div">
                            <div>
                                <ProgressBar />
                            </div>
                            <div>
                                <button className="btn"><button style={{backgroundColor:'#5494a3',height:'10px',width:'10px',border:'2px solid #5494a3'}}></button> TIME SAVED</button>
                                <br />
                                <br />
                                <button className="btn"><button style={{backgroundColor:'silver',height:'10px',width:'10px',border:'2px solid silver'}}></button>TIME</button>
                                <div className="percentage_div">
                                    <h4 className="percentage">77.8%</h4>
                                    <span style={{ fontSize: '24px' }} className="fa">&#xf0d8;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Apex_chart_div">
                    <ApexChart/>
                </div>
            </div>
            <div className="graph_cards">
                <div className="cards">
                    <div className="cards_inner_div">
                        <div><h2 className='recent'>Recent Files</h2></div>
                        <div className="input_div"><input placeholder='Search...' type="text" /></div>
                    </div>
                    <table>
                        <thead>
                            <tr className='tr'>
                                <th>File Name</th>
                                <th>Project</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td className='row_2'>File_new</td>
                                <td className='row_2'>new_123</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <tr >
                                <td className='row_2'>File_new</td>
                                <td className='row_2'>new_123</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <tr >
                                <td className='row_2'>File_new</td>
                                <td className='row_2'>new_123</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <tr >
                                <td className='row_2'>File_new</td>
                                <td className='row_2'>new_123</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="cards">
                    <div className="cards_inner_div">
                        <div><h2 className='recent'>Recent Files</h2></div>
                        <div className="input_div"><input placeholder='Search...' type="text" /></div>
                    </div>
                    <table>
                        <thead>
                            <tr className='tr'>
                                <th>File Name</th>
                                <th>Project</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td className='row_2'>File_new</td>
                                <td className='row_2'>new_123</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <tr >
                                <td className='row_2'>File_new</td>
                                <td className='row_2'>new_123</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <tr >
                                <td className='row_2'>File_new</td>
                                <td className='row_2'>new_123</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <tr >
                                <td className='row_2'>File_new</td>
                                <td className='row_2'>new_123</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="div">
                    <h2 className="graph_heading">Active Collaborators</h2>
                    <div className="graph_div">
                        <Graph />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards