import React, { Component } from 'react';
import ContactsTemplate from '../components/contacts-template';
import bgd from '../contacts-img/smartphone.svg';



class Contacts extends Component {

    state = {
        contacts: [{
            firstName: "Барней",
            lastName: "Стинсовський",
            phone: "+380956319521",
            gender: "male"
        }, {
            firstName: "Робін",
            lastName: "Щербатська",
            phone: "+380931460123",
            gender: "female"
        }, {
            firstName: "Анонімний",
            lastName: "Анонімус",
            phone: "+380666666666",
            gender: "undefined"
        }, {
            firstName: "Лілія",
            lastName: "Олдровна",
            phone: "+380504691254",
            gender: "female"
        }, {
            firstName: "Маршен",
            lastName: "Еріксонян",
            phone: "+380739432123",
            gender: "male"
        }, {
            firstName: "Теодор",
            lastName: "Мотсбес",
            phone: "+380956319521",
            gender: "male"
        }],
        search: '',
        isMaleChecked: true,
        isFemaleChecked: true,
        isUndefinedChecked: true,
    };
    handleSearchChange = e => {
        this.setState({ search: e.target.value });
    };

    toggleCheckboxes = (e) => {
        this.setState({
            [e.target.name]: e.target.checked
        })
    };

    render() {
        let filteredContacts = this.state.contacts.filter(e =>
            e.lastName.toLowerCase().includes(this.state.search.toLowerCase())
            || e.firstName.toLowerCase().includes(this.state.search.toLowerCase()) ||
            e.phone.toLowerCase().includes(this.state.search.toLowerCase()) ||
            e.gender.toLowerCase().includes(this.state.search.toLowerCase()));

        if (this.state.search === (!this.state.search)) {
            filteredContacts = this.state.contacts;
        } else {
            filteredContacts.map((contact) => <ContactsTemplate {...contact} key={contact.index} />);
        }

        if (!this.state.isMaleChecked) {
            filteredContacts = filteredContacts.filter(e => {
                return e.gender !== 'male'
            })
        } else if (!this.state.isFemaleChecked) {
            filteredContacts = filteredContacts.filter(e => {
                return e.gender !== 'female'
            })
        } else if (!this.state.isUndefinedChecked) {
            filteredContacts = filteredContacts.filter(e => {
                return e.gender !== 'undefined'
            })
        } else if (!this.state.isMaleChecked && !this.state.isFemaleChecked) {
            filteredContacts = filteredContacts.filter(e => {
                return e.gender !== 'male' && e.gender !== 'female'
            })
        } else if (!this.state.isMaleChecked && !this.state.isFemaleChecked && !this.state.isUndefinedChecked) {
            filteredContacts = filteredContacts.filter(e => {
                return e.gender !== 'male' && e.gender !== 'female' && e.gender !== 'undefined'
            })
        } else if (!this.state.isFemaleChecked && !this.state.isUndefinedChecked) {
            filteredContacts = filteredContacts.filter(e => {
                return e.gender !== 'female' && e.gender !== 'undefined'
            })
        } else if (!this.state.isMaleChecked && !this.state.isUndefinedChecked) {
            filteredContacts = filteredContacts.filter(e => {
                return e.gender !== 'male' && e.gender !== 'undefined'
            })
        }


        return (
            <>
                <section className="contacts-wrapper">
                    <div className="common-container">
                        <img className="bgd-img" src={bgd}></img>
                        <div className="inner-phone-content">
                            <div className="search-wrapper">
                                <input type="text" placeholder="Input name/gender/phone"
                                    value={this.state.search} onChange={this.handleSearchChange}
                                    className="input"></input>
                            </div>
                            <div className="checkboxes-wrapper">
                                <span>male</span><input type="checkbox" id="male"
                                    name="isMaleChecked"
                                    checked={this.state.isMaleChecked}
                                    onChange={this.toggleCheckboxes}></input>
                                <span>female</span><input type="checkbox" id="female"
                                    name="isFemaleChecked"
                                    checked={this.state.isFemaleChecked}
                                    onChange={this.toggleCheckboxes}></input>
                                <span>undefined</span><input type="checkbox" id="undefined"
                                    name="isUndefinedChecked"
                                    checked={this.state.isUndefinedChecked}
                                    onChange={this.toggleCheckboxes}></input>
                            </div>
                            {filteredContacts.map((contact) => <ContactsTemplate {...contact} key={contact.index} />)}
                        </div>
                    </div>
                </section>
            </>
        )
    }

}
export default Contacts;