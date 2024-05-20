package net.javaguides.ems.mapper;

import net.javaguides.ems.dto.TblEmployeeMasterDto;
import net.javaguides.ems.entity.TblEmployeeMaster;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface TblEmployeeMasterMapper {
    TblEmployeeMasterMapper INSTANCE = Mappers.getMapper(TblEmployeeMasterMapper.class);

    TblEmployeeMasterDto toDto(TblEmployeeMaster tblEmployeeMaster);

    TblEmployeeMaster toEntity(TblEmployeeMasterDto tblEmployeeMasterDto);
}
