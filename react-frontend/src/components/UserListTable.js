import React from 'react'

const UserListTable = (props) => {
    return (
        <>
<section id="stats-subtitle">
                    <div class="row">
                        <div class="col-12 mt-3 mb-1">
                            <h4 class="text-uppercase">{props.title}</h4>
                        </div>
                    </div>

                    <div class="row">
                        <table class="table">
                            <tr>
                                <th>
                                    ID
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Address
                                </th>
                                <th>
                                    NID NO.
                                </th>
                                <th>
                                    Phone NO.
                                </th>
                                <th>
                                    Current Balance
                                </th>
                                <th>
                                    Option
                                </th>
                                <th></th>
                            </tr>

                            @foreach (var item in Model.petbucket_customer)
                            {
                                <tr>
                                    <td>
                                        @item.id
                                    </td>
                                    <td>
                                        @item.name
                                    </td>
                                    <td>
                                        @item.email
                                    </td>
                                    <td>
                                        @item.address
                                    </td>
                                    <td>
                                        @item.nid
                                    </td>
                                    <td>
                                        @item.phone
                                    </td>
                                    <td>
                                        @item.balance
                                    </td>

                                    <td>
                                        <a href={props.EditLink}>EDIT</a>|
                                        <a href={props.DetailsLink}>DETAILS</a>|
                                        <a href={props.DeleteLink}>DELETE</a>
                                    </td>
                                </tr>
                            }
                        </table>
                    </div>
                </section>
        </>
    )
}

export default UserListTable
