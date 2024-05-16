package net.javaguides.ems.repository;

import net.javaguides.ems.entity.TblUserMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TblUserMasterRepository extends JpaRepository<TblUserMaster, Long> {
    public TblUserMaster findByName(String name);
    public TblUserMaster findByNameAndPassword(String name, String password);
}
