import { createContext, useState, useEffect } from 'react';

const DepartmentContext = createContext({
  department: '',
  showDepartment: function (departmentData) {}
});

export function DepartmentContextProvider(props) {
  const [activeDepartment, setActiveDepartment] = useState();

  function showDepartmentHandler(DepartmentData) {
    setActiveDepartment(DepartmentData);
  }

  const context = {
    department: activeDepartment,
    showDepartment: showDepartmentHandler,
  };

  return (
    <DepartmentContext.Provider value={context}>
      {props.children}
    </DepartmentContext.Provider>
  );
}

export default DepartmentContext;
