package com.example.service.impl;


import com.example.converter.NewConverter;
import com.example.dto.NewDTO;
import com.example.entity.NewEntity;
import com.example.repository.CategoryRepository;
import com.example.repository.NewRepository;
import com.example.service.INewService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class NewService implements INewService {

    @Autowired
    private NewConverter newConverter;

    @Autowired
    private NewRepository newRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    @Transactional
    public NewDTO insert(NewDTO newDTO) {
        NewEntity newEntity = newConverter.convertToEntity(newDTO);
        newEntity.setCategory(categoryRepository.findOneByCode(newDTO.getCategoryCode()));
        return newConverter.convertToDto(newRepository.save(newEntity));
    }
    /*

    @Override
    @Transactional
    public NewDTO update(NewDTO updateNewDTO, long id) {
        NewEntity existNew = newRepository.findOneById(id);
        NewEntity updateNewEntity = newConverter.convertToEntity(updateNewDTO);
        updateNewEntity.setCreatedDate(existNew.getCreatedDate());
        updateNewEntity.setCreatedBy(existNew.getCreatedBy());
        updateNewEntity.setThumbnail(existNew.getThumbnail());
        updateNewEntity.setCategory(categoryRepository.findOneByCode(updateNewDTO.getCategoryCode()));
        if (updateNewDTO.getBase64() != null) {
            byte[] decodeBase64 = Base64.getDecoder().decode(updateNewDTO.getBase64().getBytes());
            uploadFileUtils.writeOrUpdate(decodeBase64, "/thumbnail/"+updateNewDTO.getFileName());
            updateNewEntity.setThumbnail("/usr/var/thumbnail/"+updateNewDTO.getFileName());
        }
        updateNewEntity = newRepository.save(updateNewEntity);
        return newConverter.convertToDto(updateNewEntity);
    }*/

    @Override
    public List<NewDTO> findAll() {
        List<NewEntity> list = newRepository.findAll();
        return list.stream().map(item -> newConverter.convertToDto(item)).collect(Collectors.toList());
    }



   /* @Override
    public NewDTO findById(long id) {
        NewEntity newEntity = newRepository.findOne(id);
        NewDTO newDTO = newConverter.convertToDto(newEntity);
        newDTO.setCategoryCode(newEntity.getCategory().getCode());
        return newDTO;
    }

    @Override
    public void deleteNew(long[] id) {
        for (long item: id) {
            newRepository.delete(item);
        }
    }*/
}
