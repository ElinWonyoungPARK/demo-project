package org.cart.api.item.service;


import lombok.RequiredArgsConstructor;
import org.cart.api.item.domain.Item;
import org.cart.api.item.repository.ItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ItemServiceImpl implements ItemService{
    private final ItemRepository itemRepo;
    @Override
    public String save(Item item) {
        System.out.println("=== 2 ==== :"+item.toString());
        Item itm = itemRepo.save(item);
        return (itm != null) ? "SUCCESS": "FAILURE";
    }

    @Override
    public List<Item> all() {
        return itemRepo.findAll();
    }

    @Override
    public Optional<Item> one(long id) {
        return itemRepo.findById(id);
    }

    @Override
    public String edit(Item item) {
        Item itm = itemRepo.save(item);
        return (itm != null) ? "SUCCESS": "FAILURE";
    }

    @Override
    public String delete(long id) {
        itemRepo.deleteById(id);
        return "SUCCESS";
    }
}