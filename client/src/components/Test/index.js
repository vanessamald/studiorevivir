import React from 'react';

function Test() {

    //const orders = 'Rx1:MedicationX' 
    //'Rx2:MedicationY', 'Rx3:MedicationZ';

    const handlingInstructions = (orders) => {
        const orderList = [];

        var entries = orders.split(';');

        console.log(entries);
        
        for (let i=0; i < entries.length; i++) {

           let entry = entries[i].split(':');
           const [ orderID, medicationName ] = entry;

           const newOrders = {
            ID: orderID,
            medication: medicationName
        }

        console.log(newOrders);
        
        orderList.push(newOrders);

        console.log(orderList);

        }
            //const [ orderID, medicationName ] = entry;
           
/*
            const newOrders = {
                                ID: orderID,
                                medication: medicationName
                            }

            console.log(newOrders);
            */
        //}
       // var orderID = fields[0];
       // var medicationName = fields[1];

       // const newOrders = { ID: orderID, medication: medicationName};
       // orderList.push(newOrders);

       // console.log(orderList);
    }
    
    handlingInstructions('Rx1:MedicationX;Rx2:MedicationY;Rx3:MedicationZ');

    return (
        <div>
            <p></p>
        </div>
    )
}

export default Test;
