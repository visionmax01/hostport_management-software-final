import React from 'react'
import AdminNavBar from '../Components/AdminNavBar'
import SideNav from '../Components/Sidenav'
import { Box } from '@mui/material'
import "./paymentForm.css"
const PaymentForm = () => {
  return (
    <>
     <AdminNavBar />
      <Box sx={{ display: "flex" }}>
        <SideNav />

        <Box component="main" sx={{ flexGrow: 1, pl: 10 , pt: 5 }}>
        <Box height={50} />
    <div className="main_container-form">
        <form >
            <h3>User Payment form </h3>
             <div className="form-fields">
             <h5>Note : <span>Fill all the detail correctely!</span></h5>

             <div className="formSection">
                <div className="formGroop">    
                        <label htmlFor="accountNo">Account No :</label>
                    <div className="input-Formgroup">
                    <i class="fa-solid fa-building-columns"></i>
                        <input type="text"  className="formInputField" placeholder="AV0001" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="formGroop">    
                        <label htmlFor="fullname">Customer name :</label>
                    <div className="input-Formgroup">
                        <i className="fas fa-user"></i>
                        <input type="text"  className="formInputField" placeholder="Santosh Sah" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>

                
            </div>

            <div className="formSection">
                <div className="formGroop">    
                        <label htmlFor="startFrom">Started Form :</label>
                    <div className="input-Formgroup">
                        <i class="fa-solid fa-calendar-days"></i>
                        <input type="date" id='startFrom' name='startFrom'  className="formInputField"aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="formGroop">    
                        <label htmlFor="endedDate">Ended To :</label>
                    <div className="input-Formgroup">
                        <i class="fa-solid fa-calendar-days"></i>
                        <input type="date" id='endedDate' name='endedDate'  className="formInputField"  aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>

                
            </div>
            <div className="formSection">
                <div className="formGroop">    
                        <label htmlFor="amountPaid">Paying Amount :</label>
                    <div className="input-Formgroup">
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                        <input type="number" id='amountPaid' name='amountPaid'  className="formInputField" placeholder="500.." aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="formGroop">    
                        <label htmlFor="fullname">Recieved By :</label>
                    <div className="input-Formgroup">
                        <i className="fas fa-user"></i>
                        <input type="text"  className="formInputField" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                
            </div>

            <div className="formSection-btn">
                <button className='btnPayment'>Make Payment</button>
            </div>
             </div>
            



        </form>
    </div>
    </Box>
    </Box>
    </>

  )
}

export default PaymentForm