package com.fourneth.ims.domain;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created with IntelliJ IDEA.
 * User: romith
 * Date: 4/25/13
 * Time: 10:29 PM
 * To change this template use File | Settings | File Templates.
 */
@MappedSuperclass
public class EntityClass implements Serializable {

    @Id
    @Column(name="ID")
    @GeneratedValue
    private int id;
    @Version
    private int version;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        EntityClass that = (EntityClass) o;

        return id == that.id && version == that.version;

    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + version;
        return result;
    }
}
