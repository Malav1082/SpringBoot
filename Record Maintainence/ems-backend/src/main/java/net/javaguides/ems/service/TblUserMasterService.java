package net.javaguides.ems.service;

import net.javaguides.ems.dto.TblUserMasterDto;
import org.springframework.stereotype.Service;

import java.util.List;

public interface TblUserMasterService {
    TblUserMasterDto createTblUserMaster(TblUserMasterDto tblUserMasterDto);
    TblUserMasterDto getTblUserMasterById(Long userId);
    List<TblUserMasterDto> getAllTblUserMasters();
    TblUserMasterDto updateTblUserMaster(Long userId, TblUserMasterDto updatedUser);
    void deleteTblUserMaster(Long userId);
}
