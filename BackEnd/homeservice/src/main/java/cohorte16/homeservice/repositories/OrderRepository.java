package cohorte16.homeservice.repositories;

import cohorte16.homeservice.enums.Orderstatus;
import cohorte16.homeservice.models.Order;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("select o from Order o where o.orderstatus = :status")
    List<Order> findByOrderStatus(@Param("status") Orderstatus orderstatus);


    Page<Order> findAll(Pageable pageable);

    @Query(value = "SELECT * FROM ordenes o WHERE o.cliente_id = :clientId", nativeQuery = true)
    Page<Order> findOrdenesByClienteId(@Param("clientId") Long clientId, Pageable pageable);
}
