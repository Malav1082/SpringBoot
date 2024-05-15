package net.javaguides.ems.controller;

import lombok.AllArgsConstructor;
import net.javaguides.ems.dto.TblUserMasterDto;
import net.javaguides.ems.service.TblUserMasterService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class TblUserMasterController {
    private TblUserMasterService tblUserMasterService;

    // Another POST method with a different mapping
    @PostMapping("/add")
    public ResponseEntity<TblUserMasterDto> createTblUserMasterAnother(@RequestBody TblUserMasterDto tblUserMasterDto) {
        // Proceed with saving
        TblUserMasterDto savedTblUserMaster = tblUserMasterService.createTblUserMaster(tblUserMasterDto);
        return new ResponseEntity<>(savedTblUserMaster, HttpStatus.CREATED);
    }

    //get employee by id
    @GetMapping("{userId}")
    public ResponseEntity<TblUserMasterDto> getTblUserMasterById(@PathVariable("userId") Long userId){
        TblUserMasterDto tblUserMasterDto = tblUserMasterService.getTblUserMasterById(userId);
        return ResponseEntity.ok(tblUserMasterDto);
    }

    //get all employees
    @GetMapping
    public ResponseEntity<List<TblUserMasterDto>> getAllTblUserMasters(){
        List<TblUserMasterDto> tblUserMasters = tblUserMasterService.getAllTblUserMasters();
        return ResponseEntity.ok(tblUserMasters);
    }

    //update employee
    @PutMapping("{userId}")
    public ResponseEntity<TblUserMasterDto> updateTblUserMaster(@PathVariable("userId") Long userId,
                                                                @RequestBody TblUserMasterDto updatedTblUserMaster){
        TblUserMasterDto tblUserMasterDto = tblUserMasterService.updateTblUserMaster(userId, updatedTblUserMaster);
        return ResponseEntity.ok(tblUserMasterDto);
    }

    //delete employee
    @DeleteMapping("{userId}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("userId") Long userId){
        tblUserMasterService.deleteTblUserMaster(userId);
        return ResponseEntity.ok("User Deleted Successfully");
    }
}