import React from 'react'

const UserDetailsContainer = (props) => {
    return (
        <>
                        <section id="stats-subtitle">
                <div class="row">
                    <div class="col-12 mt-3 mb-1">
                        <h4 class="text-uppercase">{props.title}</h4>
                        {/* <h4 class="primary">@Html.DisplayFor(model => model.name)</h4> */}
                        <a href={props.link}><h4 class="warning">Back To List</h4></a>
                    </div>
                </div>
                <div>
                    <hr />
                    <table>
                        <tr>
                            <td class="primary">Name</td>
                            {/* <td class="danger"> @Html.DisplayFor(model => model.name)</td> */}
                        </tr>
                        <tr>
                            <td class="primary">Email</td>
                            {/* <td class="danger">@Html.DisplayFor(model => model.email)</td> */}
                        </tr>
                        <tr>
                            <td class="primary">Address</td>
                            {/* <td class="danger">@Html.DisplayFor(model => model.address)</td> */}
                        </tr>
                        <tr>
                            <td class="primary">Phone Number</td>
                            {/* <td class="danger">@Html.DisplayFor(model => model.phone)</td> */}
                        </tr>
                        <tr>
                            <td class="primary">NID Number</td>
                            {/* <td class="danger">@Html.DisplayFor(model => model.nid)</td> */}
                        </tr>
                        <tr>
                            <td class="primary">Current Balance</td>
                            {/* <td class="danger">@Html.DisplayFor(model => model.balance)</td> */}
                        </tr>
                    </table>
                </div>
            </section>
        </>
    )
}

export default UserDetailsContainer
