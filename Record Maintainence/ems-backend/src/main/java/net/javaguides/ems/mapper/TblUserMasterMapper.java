package net.javaguides.ems.mapper;

import net.javaguides.ems.dto.TblUserMasterDto;
import net.javaguides.ems.entity.TblUserMaster;

public class TblUserMasterMapper {
    public static TblUserMasterDto mapToTblUserMasterDto (TblUserMaster tblUserMaster){
        return new TblUserMasterDto(
                tblUserMaster.getUserId(),
                tblUserMaster.getUserName(),
                tblUserMaster.getMobileNumber(),
                tblUserMaster.getPassword(),
                tblUserMaster.getConfirmPassword()
        );
    }

    public static TblUserMaster mapToTblUserMaster (TblUserMasterDto tblUserMasterDto){
        return new TblUserMaster(
                tblUserMasterDto.getUserId(),
                tblUserMasterDto.getUserName(),
                tblUserMasterDto.getMobileNumber(),
                tblUserMasterDto.getPassword(),
                tblUserMasterDto.getConfirmPassword()
        );
    }
}
