package com.fourneth.ims.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
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
    @Column
    @NotNull
    @GeneratedValue
    private long id;
    @Version
    private int version;
    @Column(name = "created_time")
    @NotNull
    private long createdTime;
    @Column(name = "updated_time")
    private long updatedTime;
    @Column(name = "organization_id")
    @NotNull
    private String organizationId;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public long getUpdatedTime() {
        return updatedTime;
    }

    public void setUpdatedTime(long updatedTime) {
        this.updatedTime = updatedTime;
    }

    public long getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(long createdTime) {
        this.createdTime = createdTime;
    }

    public String getOrganizationId() {
        return organizationId;
    }

    public void setOrganizationId(String organizationId) {
        this.organizationId = organizationId;
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
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + (organizationId != null ? organizationId.hashCode() : 0);
        return result;
    }
}
