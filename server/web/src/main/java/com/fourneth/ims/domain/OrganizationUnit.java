package com.fourneth.ims.domain;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created with IntelliJ IDEA.
 * User: romith
 * Date: 4/25/13
 * Time: 11:41 PM
 * To change this template use File | Settings | File Templates.
 */
@Entity
@Table(name = "organization_unit")
public class OrganizationUnit extends EntityClass {

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}