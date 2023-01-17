import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from '../data/items.json'
import { formatCurrency } from "../utilities/formatCurrency"
type CartItemProps = { 
    id:number
    quantity:number
}


export function CartItem({id,quantity} : CartItemProps){
const { removeFromCart} = useShoppingCart()
const item = storeItems.find(i => i.id === id)
if(item == null) return null
return(
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={item.imgUrl} style={{width:"100px", height:"75px", objectFit:"cover"}}/>
        <div className="me-auto">
            <div className="d-flex flex-column">
                {item.name}{" "} 
                { quantity > 1 && ( 
                <span className="text-muted" style={{ fontSize:"16px" }}>x{quantity}
                </span>
                )}            
            </div>
        </div>
        <div className="d-flex flex-column">
            <div className="text-muted text-end" style={{ fontSize:"12px"}}>
                {formatCurrency(item.price)} 
            </div>
            <div className="text-end" style={{ fontSize:"14px"}}>{formatCurrency(item.price * quantity)}</div>
        </div>
        <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
            &times;
        </Button>
    </Stack>
)
}