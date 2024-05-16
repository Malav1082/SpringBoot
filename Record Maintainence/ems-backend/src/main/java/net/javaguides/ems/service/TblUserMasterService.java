package net.javaguides.ems.service;

import net.javaguides.ems.entity.TblUserMaster;
import net.javaguides.ems.repository.TblUserMasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TblUserMasterService {

    @Autowired
    private TblUserMasterRepository tblUserMasterRepository;

    public TblUserMaster addUser(TblUserMaster tblUserMaster){
        return tblUserMasterRepository.save(tblUserMaster);
    }

    public TblUserMaster getUserByE(TblUserMaster tblUserMaster){
        return tblUserMasterRepository.findByName(tblUserMaster.getName());
    }

    public TblUserMaster getUserByEP(TblUserMaster tblUserMaster){
        TblUserMaster user = null;

        try {
            user =
                    this.tblUserMasterRepository.findByNameAndPassword(
                            tblUserMaster.getName(),
                            tblUserMaster.getPassword()
                    );
        } catch (Exception e) {
            e.printStackTrace();
        }
        return user;
    }

    public void updateUser(TblUserMaster tblUserMaster, int userid) {
        TblUserMaster u =
                this.tblUserMasterRepository.findByNameAndPassword(
                        tblUserMaster.getName(),
                        tblUserMaster.getPassword()
                );
    }
}

