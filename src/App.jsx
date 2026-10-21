import EmployeeCard from "./EmployeeCard";
function App() 
{

return (
<div>

<h1>Employee Management System</h1>

<EmployeeCard
name="Rahul Sharma"
employeeId="E101"
department="IT"
salary="50000"
/>

<EmployeeCard
name="Priya Patil"
employeeId="E102"
department="HR"
salary="45000"
/>

<EmployeeCard
name="Amit Joshi"
employeeId="E103"
department="Finance"
salary="55000"
/>

</div>
    );
}
export default App;
