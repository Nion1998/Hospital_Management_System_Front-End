import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Home/Home';
import MedicineHome from './PharmacyComponent/Medicine/MedicineHome';
import MedicineAdd from './PharmacyComponent/Medicine/MedicineAdd';
import MedicineUpdate from './PharmacyComponent/Medicine/MedicineUpdate';
import CabinHome from './CabinComponent/CabinHome';
import CabinAdd from './CabinComponent/CabinAdd';
import CabinUpdate from './CabinComponent/CabinUpdate';
import MaterialHome from './MaterialComponent/MaterialHome';
import MaterialAdd from './MaterialComponent/MaterialAdd';
import MaterialUpdate from './MaterialComponent/MaterialUpdate';
import DoctorHome from './DoctorComponent/DoctorHome';
import DoctorAdd from './DoctorComponent/DoctorAdd';
import DoctorUpdate from './DoctorComponent/DoctorUpdate';
import PatientIPDHome from './PatientIPDComponent/PatientIPDHome';
import PatientIPDAdd from './PatientIPDComponent/PatientIPDAdd';
import PatientIPDUpdate from './PatientIPDComponent/PatientIPDUpdate';
import ItemExamHome from './ItemExamComponent/ItemExamHome';
import ItemExamAdd from './ItemExamComponent/ItemExamAdd';
import ItemExamUpdate from './ItemExamComponent/ItemExamUpdate';
import SupplierHome from './SupplierComponent/SupplierHome';
import SupplierAdd from './SupplierComponent/SupplierAdd';
import SupplierUpdate from './SupplierComponent/SupplierUpdate';
import OTDetailsHome from './OTDetailsComponent/OTDetailsHome';
import OTDetailsAdd from './OTDetailsComponent/OTDetailsAdd';
import OTDetailsUpdate from './OTDetailsComponent/OTDetailsUpdate';
import CustomerOPDHome from './CustomerOPDComponent/CustomerOPDHome';
import CustomerOPDAdd from './CustomerOPDComponent/CustomerOPDAdd';
import CustomerOPDUpdate from './CustomerOPDComponent/CustomerOPDUpdate';
import EmployeeHome from './EmployeeComponent/EmployeeHome';
import EmployeeAdd from './EmployeeComponent/EmployeeAdd';
import EmployeeUpdate from './EmployeeComponent/EmployeeUpdate';
import Login from './LoginComponent/Login';
import CustomerPharmacyAdd from './PharmacyComponent/SaleComponent/CustomerPharmacyAdd';
import PharmacyCustomerList from './PharmacyComponent/SaleComponent/PharmacyCustomerList';
import PharmacyCart from './PharmacyComponent/SaleComponent/PharmacyCart';
import HomeNav from './Navbar/HomeNav';
import CustomerOPDCart from './CustomerOPDComponent/CustomerOPDCart';
import SaleReport from './PharmacyComponent/SaleComponent/SaleReport';
import OPDSaleReport from './CustomerOPDComponent/OPDSaleReport';


function App() {
  return (
    <Router>
    <div>
    <Switch>


    <Route path="/pharmacy/sale/report"><SaleReport/></Route>

    <Route path="/customeropd/sale/report"><OPDSaleReport/></Route>
    <Route path="/customeropd/cart/:id"><CustomerOPDCart/></Route>

    <Route path="/homenav"><HomeNav/></Route>

    <Route path="/customerpharmacy/cart/:id"><PharmacyCart/></Route>
    <Route path="/customerpharmacy/list"><PharmacyCustomerList/></Route>
    <Route path="/customerpharmacy"><CustomerPharmacyAdd/></Route>

    <Route path="/login"><Login/></Route>

    <Route path="/employee/update/:id"><EmployeeUpdate/></Route>
    <Route path="/employee/add"><EmployeeAdd/></Route>
    <Route path="/employee"><EmployeeHome/></Route>

    <Route path="/customeropd/update/:id"><CustomerOPDUpdate/></Route>
    <Route path="/customeropd/add"><CustomerOPDAdd/></Route>
    <Route path="/customeropd"><CustomerOPDHome/></Route>

    <Route path="/otdetails/update/:id"><OTDetailsUpdate/></Route>
    <Route path="/otdetails/add"><OTDetailsAdd/></Route>
    <Route path="/otdetails"><OTDetailsHome/></Route>

    <Route path="/supplier/update/:id"><SupplierUpdate/></Route>
    <Route path="/supplier/add"><SupplierAdd/></Route>
    <Route path="/supplier"><SupplierHome/></Route>
    
    <Route path="/itemexam/update/:id"><ItemExamUpdate/></Route>
    <Route path="/itemexam/add"><ItemExamAdd/></Route>
    <Route path="/itemexam"><ItemExamHome/></Route>

    <Route path="/patientIPD/update/:id"><PatientIPDUpdate/></Route>
    <Route path="/patientIPD/add"><PatientIPDAdd/></Route>
    <Route path="/patientIPD"><PatientIPDHome/></Route>

    <Route path="/doctor/update/:id"><DoctorUpdate/></Route>
    <Route path="/doctor/add"><DoctorAdd/></Route>
    <Route path="/doctor"><DoctorHome/></Route>

    <Route path="/material/update/:id"><MaterialUpdate/></Route>
    <Route path="/material/add"><MaterialAdd/></Route>
    <Route path="/material"><MaterialHome/></Route>

    <Route path="/cabin/update/:id"><CabinUpdate/></Route>
    <Route path="/cabin/add"><CabinAdd/></Route>
    <Route path="/cabin"><CabinHome/></Route>

    <Route path="/medicine/update/:id"><MedicineUpdate/></Route>
    <Route path="/medicine/add"><MedicineAdd/></Route>
    <Route path="/medicine"><MedicineHome/></Route>

    <Route path="/"><Home/></Route>
    
    </Switch>
    </div>
    </Router>
  );
}

export default App;
