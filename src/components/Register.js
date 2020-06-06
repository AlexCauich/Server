import React, { Component } from 'react';
import { getList, addItem, deleteItem, updateItem } from './RegisterFunction';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name_job: '',
            name_service: '',
            phone: '',
            place_delivery: '',
            speci: '',
            prepayment: '',
            reg_date: '',
            items: []
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.getAll();
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getAll= () => {
        getList().then(data => {
            this.setState({
                name_job: '',
                name_service: '',
                phone: '',
                place_delivery: '',
                speci: '',
                prepayment: '',
                reg_date: '',
                items:[...data]
            },
            () => {
                console.log(this.state.items) 
            })
        })
    }

    onSubmit = e => {
        e.preventDefault()
        const formDate = new FormData();
        formDate.append('name_job', this.state.name_job)
        formDate.append('name_service', this.state.name_service)
        formDate.append('phone', this.state.phone)
        formDate.append('place_delivery', this.state.place_delivery)
        formDate.append('speci', this.state.speci)
        formDate.append('prepayment', this.state.prepayment)
        formDate.append('reg_date', this.state.reg_date)
        addItem(formDate).then(() => {
            this.getAll();
        });
    }

    ondelete = (val, e) => {
        e.preventDefault();
        deleteItem(val);
        this.getAll();
    }


    renderProducts() {
        return this.state.items.map(item => {
            return (
                <tr key={item.id}>
                    <td className="bg-secondary">{item.id}</td>
                    <td>{item.name_job}</td>
                    <td>{item.name_service}</td>
                    <td>{item.phone}</td>
                    <td>{item.place_delivery}</td>
                    <td>{item.speci}</td>
                    <td>{item.prepayment}</td>
                    <td>{item.reg_date}</td>
                    <td>
                        <button className="btn btn-outline-danger" onClick={this.ondelete.bind(this, item.id)}>
                            Delete
                        </button>
                    </td>
                </tr>
);
        })
      }

    render() {
        return(
            <div className="App jumbotron">
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <h3>Aluminios Soberanis</h3>
                            <h4>Registration table</h4>
                        </div>
                        <div className="btn btn-outline-primary mt-2 mb-2" type="button" data-toggle="modal"  data-target="#exampleModal">
                            Launch register panel
                        </div>
                        <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">New register</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={this.onSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="name_job">Name job</label>
                                                <input type="text" className="form-control" id="name_job" name="name_job" placeholder="Text here" value={this.state.name_job || ''} onChange={this.onChange.bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name_service">Name service</label>
                                                <input type="text" className="form-control" id="name_service" name="name_service" placeholder="Text here" value={this.state.name_service || ''} onChange={this.onChange.bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name_phone">Phone</label>
                                                <input type="text" className="form-control" id="phone" name="phone" placeholder="Text here" value={this.state.phone || ''} onChange={this.onChange.bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="place_delivery">place_delivery</label>
                                                <input type="text" className="form-control" id="place_delivery" name="place_delivery" placeholder="Text here" value={this.state.place_delivery || ''} onChange={this.onChange.bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="speci">speci</label>
                                                <textarea type="text" className="form-control" id="speci" name="speci" placeholder="Text here" value={this.state.speci || ''} onChange={this.onChange.bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="prepayment">prepayment</label>
                                                <input type="text" className="form-control" id="prepayment" name="prepayment" placeholder="Text here" value={this.state.prepayment || ''} onChange={this.onChange.bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="reg_date">reg_date</label>
                                                <input type="date" className="form-control" id="reg_date" name="reg_date"  onChange={this.onChange.bind(this)}/>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-success" onClick={this.onSubmit.bind(this)}>Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-borderless table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>ID</th>
                                        <th>Name job</th>
                                        <th>Name service</th>
                                        <th>Phone</th>
                                        <th>Place delivery</th>
                                        <th>Specifications</th>
                                        <th>Prepayment</th>
                                        <th>Registration date</th>
                                        <th>Acctions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderProducts()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;