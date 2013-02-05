package com.fourneth.ims.repository.impl;

import com.fourneth.ims.domain.Employee;
import com.fourneth.ims.repository.EmployeeRepository;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: romith
 * Date: 2/4/13
 * Time: 11:59 PM
 * To change this template use File | Settings | File Templates.
 */
@Repository
@Transactional(propagation = Propagation.SUPPORTS, isolation = Isolation.DEFAULT)
public class EmployeeRepositoryImpl implements EmployeeRepository {

    @Autowired
    private SessionFactory sf;

    @Override
    public Employee save(Employee e) {
        return (Employee) sf.getCurrentSession().save(e);
    }

    @Override
    public void update(Employee e) {
        sf.getCurrentSession().update(e);
    }

    @Override
    public void delete(Employee e) {
        sf.getCurrentSession().delete(e);
    }

    @Override
    public Employee findById(String id) {
        return (Employee) sf.getCurrentSession().createQuery(
                "from Employee e where e.id=?").setParameter(0, id)
                .uniqueResult();
    }

    @Override
    public List<Employee> findAll() {
        return (List<Employee>) sf.getCurrentSession().createQuery(
                "from Employee").list();
    }
}
