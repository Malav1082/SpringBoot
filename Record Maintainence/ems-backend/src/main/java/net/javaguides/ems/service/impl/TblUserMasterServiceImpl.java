package net.javaguides.ems.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.ems.dto.TblUserMasterDto;
import net.javaguides.ems.entity.TblUserMaster;
import net.javaguides.ems.exception.ResourceNotFoundException;
import net.javaguides.ems.mapper.TblUserMasterMapper;
import net.javaguides.ems.repository.TblUserMasterRepository;
import net.javaguides.ems.service.TblUserMasterService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TblUserMasterServiceImpl implements TblUserMasterService {
    private TblUserMasterRepository tblUserMasterRepository;

    @Override
    public TblUserMasterDto createTblUserMaster(TblUserMasterDto tblUserMasterDto) {
        TblUserMaster tblUserMaster = TblUserMasterMapper.mapToTblUserMaster(tblUserMasterDto);
        TblUserMaster savedTblUserMaster = tblUserMasterRepository.save(tblUserMaster);
        return TblUserMasterMapper.mapToTblUserMasterDto(savedTblUserMaster);
    }

    @Override
    public TblUserMasterDto getTblUserMasterById(Long userId) {
        TblUserMaster tblUserMaster = tblUserMasterRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User with " +userId +"does not exist"));
        return TblUserMasterMapper.mapToTblUserMasterDto(tblUserMaster);
    }

    @Override
    public List<TblUserMasterDto> getAllTblUserMasters() {
        List<TblUserMaster> tblUserMasters = tblUserMasterRepository.findAll();
        return tblUserMasters.stream().map((tblUserMaster) -> TblUserMasterMapper.mapToTblUserMasterDto(tblUserMaster))
                .collect(Collectors.toList());
    }

    @Override
    public TblUserMasterDto updateTblUserMaster(Long userId, TblUserMasterDto updatedUser) {
        return null;
    }

    @Override
    public void deleteTblUserMaster(Long userId) {

    }
}
