import './addiotional-repairs.css'


import leftSide from '../../image/left-side.png'
import file from '../../image/file.svg'
import inspection from '../../image/inspection.png'
import download from '../../image/download.png'
import downloadPdf from '../../image/download-pdf.png'
import search from '../../image/search.svg'
import viewReport from '../../image/view-report.png'
import { Link } from 'react-router-dom'

function AddiotionalRepairs() {
    return (
        <div>
        <ul>
            <dd className='nested-list'>
            <img src={leftSide}  widt='15'height='15' />
                In Progress
                <li className='idNumber'>ID 10-3865-625</li>
            </dd>
        </ul>
        <div className='roof-sections-content'>
            <img src={file} />
                <div className='id'>
                    <h1>ID 10-3865-625</h1>
                    <p>ID 10-3865-625</p>
                </div>
            <p className='in-review-01'>In Review</p>
            <h2 className='job-detail-status'>Job Detail Status</h2>
            <div>
               <div className='title-information-01'>
                    <h4 className='customer-title-01'>Job Created</h4>
                    <h4 className='property-title-01'>Assigned</h4>
                    <h4 className='inspection-team-01'>Inspection</h4>
                    <h4 className='note-01'>Report</h4>
                </div>

                <div className='create-01'>
                    <div className="round-01"></div>
                    <div className='line-02'></div>
                    <div className="round-01"></div>
                    <div className='line-02'></div>
                    <div className="round-01"></div>
                    <div className='line-01'></div>
                    <div className="round-2"></div>
                </div>
                <div className='title-information-02'>
                    <h4>Fri, 21st Oct 2022</h4>
                    <h4>Sat, 29th Oct 2022</h4>
                    <h4>Wed, 2nd Nov 2022</h4>
                    <h4>Wed, 2nd Nov</h4>
                 </div>
            </div>
        </div>

        <div className='site-address-container'>
            <div className='site-address-content'>
                <h4>Site Address</h4>
                <p>Sample Name</p>
                <p>Smith. 132, My Street, Kingston, New Youk 12401 <br/>Kingston, New York 12401</p>
                <div className='number-email-content'>
                    <span className='phone-number'>
                        <h4>Phone number</h4>
                        <p>(123)456 8745</p>
                    </span>
                    <span className='email'>
                        <h4>Email</h4>
                        <p>Sample@gmail.com</p>
                    </span>
                </div>
            </div>
            <div className='team-title-item'>
                <h4>Team</h4>
                <h4>Sales person</h4>
                <p>Sample Name</p>
                <h4>Inspector</h4>
                <p>Sample Name</p>
            </div>
            <div>
                <div className='review-now'>
                    <h3>Review is pending</h3>
                    <p>Review Now</p>
                </div>
                <div className='more'>
                    <h5>More actions</h5>
                </div>
                <div className='download-content'>
                    <img src={inspection} width="15" height="15" />
                    <p>Download Inspection Report</p>
                    <img src={download} width="15" height="15" />
                </div>
                <div className='download-pdf-content'>
                    <img src={downloadPdf} width="15" height="15"/>
                    <p>Download Inspection Report.pdf</p>
                    <img src={download} width="15" height="15"/>
                </div>
            </div>
        </div>
        <div>
        <table className='table-container-02'>
            <tr className='table-title-02'>
                <th>Roof sections</th>
                <th>General maintenance</th>
                <Link to='/replacements'>
                    <th className='addiotional-repairs-02'>Addiotional Repairs</th>
                </Link>
                <th>Replacements</th>
                <th>History</th>
            </tr>
            <tr>
                <th>ADDIOTIONAL REPAIRS</th>
            </tr>
            <tr className='heading-item-02'>
                <td>SERVIES TYPE</td>
                <td>ROOF NAME</td>
                <td>INSPECTION DATE AND TIME</td>
                <td>ACTION</td>
            </tr>
            <tr>
                <th>Addiotional Repairs</th>
                <th>Roof name</th>
                <th>7 Novermber 2022 06:25PM</th>
                <th className='text-title-02' ><img src={viewReport} /> View Report</th>
            </tr>
            
        </table>
        </div>
    </div>
    )
}

export default AddiotionalRepairs