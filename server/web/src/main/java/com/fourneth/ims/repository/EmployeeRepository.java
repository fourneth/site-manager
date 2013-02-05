package com.fourneth.ims.repository;


import com.fourneth.ims.domain.Employee;

import java.util.List;

public interface EmployeeRepository {

    public Employee save(Employee e);

    public void update(Employee e);

    public void delete(Employee e);

    Employee findById(String id);

    List<Employee> findAll();
}
