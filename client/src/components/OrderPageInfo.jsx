
import axios from "axios";
import { Table } from 'semantic-ui-react'
import {useLocation} from "react-router-dom";
import {useState} from "react";
import products from "../reducers/products";

const OrderPageInfo = (props) => {

    const location = useLocation()
    const {order_id,products} = location.params

    console.log(products)



return(
<>
    <Table size='large'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>None</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Requires call</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell>None</Table.Cell>
            </Table.Row>
        </Table.Body>

        <Table.Footer>
            <Table.Row>
                <Table.HeaderCell>3 People</Table.HeaderCell>
                <Table.HeaderCell>2 Approved</Table.HeaderCell>
                <Table.HeaderCell />
            </Table.Row>
        </Table.Footer>
    </Table>

    </>)
}

export default OrderPageInfo