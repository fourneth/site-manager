package com.fourneth.ims.repository.impl;

import com.fourneth.ims.domain.Employee;
import com.fourneth.ims.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.springframework.test.context.testng.AbstractTransactionalTestNGSpringContextTests;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import java.util.Set;
import java.util.UUID;

import static org.junit.Assume.assumeNotNull;

/**
 * Created with IntelliJ IDEA.
 * User: romith
 * Date: 4/26/13
 * Time: 9:48 PM
 * To change this template use File | Settings | File Templates.
 */
@ContextConfiguration(locations = "classpath:dependency-context.xml")
public class EmployeeRepositoryImplTest extends AbstractTransactionalTestNGSpringContextTests {

    @Autowired
    private EmployeeRepository employeeRepository;
    Validator validator;

    @BeforeMethod
    public void setUp() throws Exception {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
        assumeNotNull(employeeRepository);

    }

    @Test
    public void saveEmployeeWithoutMandatoryProperties() throws Exception {
        Employee employee = new Employee();
        employee.setFirstName("first_name");
        employee.setLastName("last_name");
        employee.setOrganizationId("cecb:saut:hbta");
        employeeRepository.save(employee);
    }
}
