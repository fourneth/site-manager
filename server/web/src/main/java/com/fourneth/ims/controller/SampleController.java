package com.fourneth.ims.controller;

import com.fourneth.ims.domain.Employee;
import com.fourneth.ims.repository.EmployeeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class SampleController {

    private static final Logger logger = LoggerFactory.getLogger(SampleController.class);

    @Autowired
    private EmployeeRepository er;

    @RequestMapping(method = RequestMethod.GET, value = "/employee/{id}", headers = "Accept=application/json")
    public @ResponseBody
    Employee employee(String id) {
        logger.info("Employee get request received.....");

        return er.findById(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/employee/", headers = "Accept=application/json")
    public Employee create(Employee e) {
        return er.save(e);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/employees", headers = "Accept=application/json")
    public @ResponseBody
    List<Employee> findAll() {
        logger.info("Employee get request received.....");

        return er.findAll();
    }
}
