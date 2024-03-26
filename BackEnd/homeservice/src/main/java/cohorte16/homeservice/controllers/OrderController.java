package cohorte16.homeservice.controllers;

import cohorte16.homeservice.dtos.OrderDTO;
import cohorte16.homeservice.dtos.OrderProfessionalDTO;
import cohorte16.homeservice.dtos.OrderRatingDTO;
import cohorte16.homeservice.dtos.UpdateOrderDTO;
import cohorte16.homeservice.models.Order;
import cohorte16.homeservice.repositories.OrderRepository;
import cohorte16.homeservice.services.OrderService;
import cohorte16.homeservice.services.impl.OrderServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
@CrossOrigin("*")
public class OrderController {

    @Autowired
    private OrderServiceImpl orderService;
    @Autowired
    private OrderRepository orderService2;

    @GetMapping(value = "/all", produces = "application/json")
    public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                    @RequestParam(defaultValue = "10") int size) {
        PageRequest pageRequest = PageRequest.of(page, size);

        try{
            return ResponseEntity.status(HttpStatus.OK).body( orderService.getAll(pageRequest));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error! Something went wrong");
        }
    }

    @GetMapping(value = "/allinitial", produces = "application/json")
    public ResponseEntity<?> getAllInitialOrders(){
        try{
            return ResponseEntity.status(HttpStatus.OK).body( orderService.getAllInitialOrders());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error! Something went wrong");
        }
    }

    @GetMapping(value = "/allpending", produces = "application/json")
    public ResponseEntity<?> getAllPendingOrders(){
        try{
            return ResponseEntity.status(HttpStatus.OK).body( orderService.getAllPendingOrders());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error! Something went wrong");
        }
    }

    @GetMapping(value = "/allapproved", produces = "application/json")
    public ResponseEntity<?> getAllApprovedOrders(){
        try{
            return ResponseEntity.status(HttpStatus.OK).body( orderService.getAllApprovedOrders());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error! Something went wrong");
        }
    }

    @PostMapping(consumes = "application/json",produces = "application/json")
    public ResponseEntity<?> createOrder( @RequestBody @Valid OrderDTO orderDTO) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(orderService.CreatedOrder(orderDTO));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error! Something went wrong");
        }
    }

    @PutMapping(value = "/description", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> updateOrderDescription(@RequestBody UpdateOrderDTO updateOrderDTO){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(orderService.updateOrderDescription(updateOrderDTO));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error! Something went wrong");
        }
    }

    @PutMapping(value = "/rating", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> updateOrderRating(@RequestBody OrderRatingDTO updateOrderDTO){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(orderService.updateRating(updateOrderDTO));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error! Something went wrong");
        }
    }

    @PutMapping(value = "/{id}", consumes = "application/json",produces = "application/json")
    public ResponseEntity<?> takeOrderProfessional(@Valid @PathVariable Long id, @RequestBody OrderProfessionalDTO orderProfessionalDTO){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(
                    orderService.takeOrderProfessional(id, orderProfessionalDTO));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error! Something went wrong");
        }
    }

    @PatchMapping(value = "/acepted/{id}", produces = "application/json")
    public ResponseEntity<?> aceptedOrder( @Valid @PathVariable Long id){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(orderService.orderAcepted(id));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error! Something went wrong");
        }
    }

    @PatchMapping(value = "/cancelorder/{id}",produces = "application/json")
    public ResponseEntity<?> cancelOrderOfProfessional(@PathVariable Long id){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(orderService.cancelOrderOfProfessional(id));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error! Something went wrong");
        }
    }

    @DeleteMapping(value = "/{id}", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> deleteOrder(@Valid @PathVariable Long id){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(orderService.deleteOrder(id));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error! Something went wrong");
        }
    }
}
