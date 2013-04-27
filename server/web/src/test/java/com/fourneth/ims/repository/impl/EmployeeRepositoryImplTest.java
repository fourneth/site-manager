package com.fourneth.ims.repository.impl;

import com.fourneth.ims.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.springframework.test.context.testng.AbstractTransactionalTestNGSpringContextTests;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import static org.junit.Assume.assumeNotNull;

/**
 * Created with IntelliJ IDEA.
 * User: romith
 * Date: 4/26/13
 * Time: 9:48 PM
 * To change this template use File | Settings | File Templates.
 */
@ContextConfiguration(locations = "classpath:unit-text-context.xml")
public class EmployeeRepositoryImplTest extends AbstractTransactionalTestNGSpringContextTests {

    @Autowired
    private EmployeeRepository employeeRepository;

    @BeforeMethod
    public void setUp() throws Exception {
        assumeNotNull(employeeRepository);

    }

    @Test
    public void testName() throws Exception {


    }
}
