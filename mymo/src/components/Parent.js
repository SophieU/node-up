import React, {Component} from 'react'
import {observable,computed,action} from 'mobx'
import Child from './Child'
class VM{
    @observable firstName=""
    @observable lastName=""
    
    @computed
    get fullName() {
        const { firstName, lastName } = this;
        if (!firstName && !lastName) { 
            return "Please input your name!"
        } else {
            return firstName + " " + lastName;
        }
    }

    @action.bound
    setValue(key, event) {
        this[key] = event.target.value;
    }

    @action.bound
    doReset() {
        this.firstName=""
        this.lastName=""
    }
}

const vm = new VM();
export default class Parent extends Component{
    render() {
        return (<div><Child/></div>)
    }
}