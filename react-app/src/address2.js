import React from "react";

export class Address extends React.Component {
        render() {
            return ( <
                div >
                <
                h1 > {
                    this.props.title
                } < /h1> <
                span > Pincode: {
                    this.props.pincode
                } < /span>

                {
                    this.props.address &&
                        < span > City: {
                            this.props.address.city
                        } < /span> } < /
                    div >
                )
            }
        }
