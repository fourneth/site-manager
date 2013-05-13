package com.fourneth.ims.repository;


import com.fourneth.ims.domain.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}
