import React, { Component, Children, cloneElement } from 'react';

import './ItemDetails.css';
import Spinner from "../Spinner";

export default class ItemDetails extends Component {
    state = {
        item: null,
        image: null,
        loading: false,
    };

    componentDidMount() {
        console.log(this.props);
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if (this.props.itemId !== prevProps.itemId){
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if(!itemId){
            return ;
        }
        this.setState({loading: true});

        getData(itemId)
            .then((item) => {
                this.setState({
                    item: item,
                    image: getImageUrl(item),
                    loading: false,
                })
            })
    }

    render() {
        const { item, image, loading } = this.state;

        if (loading) {
            return <Spinner />;
        }

        if(!item) {
            return <span>Select a item from a list</span>
        }

        const { name } = item;

        return (
            <div className="item-details card">
                <img className="item-image"
                     src={image}
                     alt='item img'
                />

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            Children.map(this.props.children, (child, idx) => {
                                return cloneElement(child, {item});
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const Record = ({item, field, label}) => {
    return(
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{ item[field] }</span>
        </li>
    );
};

export {
    Record
}