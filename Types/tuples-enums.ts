//tuple example
let color: [number, number, number] = [0, 0, 0];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'ok'];

//enums allows us to define a set of named constants. we can give these constants numeric or string
//values
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED,
}

const order = {
    orderNumber: 12732,
    status: OrderStatus.PENDING,
};

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED;
}

enum ArrowKeys {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right',
}

let move = 'left';
if (move === ArrowKeys.LEFT) {
    console.log(ArrowKeys.LEFT);
}
