package com.fourneth.ims.repository;


import com.fourneth.ims.domain.Employee;

import java.util.List;

public interface EmployeeRepository {

    public void save(Employee e);

    public void update(Employee e);

    public void delete(Employee e);

    Employee findById(int id);

    List<Employee> findAll();
}
